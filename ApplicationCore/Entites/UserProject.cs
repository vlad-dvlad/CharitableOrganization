using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ApplicationCore.Entites
{
    [Table("UserProject")]
    class UserProject
    {
        [ForeignKey("User")]
        public int UserId { get; set; }
        
        [ForeignKey("Role")]
        public int RoleId { get; set; }
    }
}
