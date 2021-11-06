using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.DTOs
{
    public class UserActionResult
    {
        public bool IsSuccessful { get; }
        public IEnumerable<string> Errors { get; }
        public string AuthToken { get; }

        public UserActionResult(string token)
        {
            IsSuccessful = true;
            AuthToken = token;
        }

        public UserActionResult(IEnumerable<string> errors)
        {
            IsSuccessful = false;
            Errors = errors;
        }
    }
}
