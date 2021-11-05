using System;
using System.Collections.Generic;
using System.Text;

namespace ApplicationCore.Entites
{
    class User : BaseEntity
    {

        public string FirstName { get; set; }

        public string LastName { get; set; }

        public string Email { get; set; }

        public string Username { get; set; }

        public string PasswordHash { get; set; }

        public int RoleId { get; set; }
    }
}
