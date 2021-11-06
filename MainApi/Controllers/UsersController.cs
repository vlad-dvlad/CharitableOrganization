using ApplicationCore.Contracts;
using ApplicationCore.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MainApi.Controllers
{
[ApiController]
[Route("api/[controller]")]
    public class UsersController : ControllerBase
    {
        private readonly IUserManager _userManager;

        public UsersController(IUserManager userManager)
        {
            _userManager = userManager;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterUser(RegistrationModel model) => Ok(await _userManager.RegisterUserAsync(model));

        [HttpPost("auth")]
        public async Task<IActionResult> AuthUser(AuthModel model) => Ok(await _userManager.AuthUserAsync(model));

        [Authorize]
        [HttpGet("secret")]
        public async Task<IActionResult> Secret() => Ok(new { Secret = "This is some secret info" });
    }
}
