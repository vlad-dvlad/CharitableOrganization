using ApplicationCore.Contracts;
using ApplicationCore.DAL;
using ApplicationCore.DTOs;
using ApplicationCore.Entites;
using Microsoft.AspNetCore.Identity;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationCore.Services
{
    public class UserManager : IUserManager
    {
        private readonly IPasswordHasher<User> _passwordHasher;
        private readonly AppDbContext _ctx;
        private readonly IConfiguration _configuration;

        public UserManager(IPasswordHasher<User> passwordHasher, AppDbContext ctx, IConfiguration configuration)
        {
            _passwordHasher = passwordHasher;
            _ctx = ctx;
            _configuration = configuration;
        }

        public async Task<UserActionResult> AuthUserAsync(AuthModel model)
        {
            var user = await _ctx.Users
                .Include(u => u.Role)
                .FirstOrDefaultAsync(x => x.Username == model.Username);
            if (user is null)
            {
                return new UserActionResult(new[] { "User cannot be found" });
            }

            var passwordVerificationResult = _passwordHasher.VerifyHashedPassword(user, user.PasswordHash, model.Password);

            if (passwordVerificationResult != PasswordVerificationResult.Success)
            {
                return new UserActionResult(new[] { "Password is incorrect" });
            }

            return new UserActionResult(GenerateToken(user));
        }

        public async Task<UserActionResult> RegisterUserAsync(RegistrationModel model)
        {
            var isUserWithUsernameOrEmail = _ctx.Users.Where(x => x.Username == model.Username || x.Email == model.Email)
                .Any();

            if (isUserWithUsernameOrEmail)
            {
                return new UserActionResult(new[] { "Username or email already taken." });
            }

            var userRole = await _ctx.Roles.FirstOrDefaultAsync(x => x.RoleName == "User");

            var user = new User
            {
                Username = model.Username,
                Email = model.Email,
                FirstName = model.FirstName,
                LastName = model.LastName,
                Role = userRole
            };

            var passwordHash = _passwordHasher.HashPassword(user, model.Password);

            user.PasswordHash = passwordHash;

            _ctx.Users.Add(user);
            await _ctx.SaveChangesAsync();

            return new UserActionResult(GenerateToken(user));
        }

        private string GenerateToken(User user)
        {
            var claims = new Claim[]
            {
                new Claim(JwtRegisteredClaimNames.Sub, user.Id.ToString()),
                new Claim(JwtRegisteredClaimNames.Email, user.Email),
                new Claim("Role", user.Role.RoleName)
            };

            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["jwtSecret"]));
            var signingCredentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var jwt = new JwtSecurityToken(issuer: _configuration["jwtIssuer"], audience: _configuration["jwtAudience"], notBefore: DateTime.Now, expires: DateTime.Now.AddDays(1), signingCredentials: signingCredentials, claims: claims);

            return new JwtSecurityTokenHandler().WriteToken(jwt);
        }
    }
}
