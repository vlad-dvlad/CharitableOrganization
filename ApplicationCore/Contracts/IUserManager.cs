using ApplicationCore.DTOs;
using System;
using System.Collections.Generic;
using System.Text;
using System.Threading.Tasks;

namespace ApplicationCore.Contracts
{
    public interface IUserManager
    {
        Task<UserActionResult> RegisterUserAsync(RegistrationModel model);
        Task<UserActionResult> AuthUserAsync(AuthModel model);
    }
}
