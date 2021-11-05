using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ApplicationCore.Entites
{
    [Table("Role")]
    class Role : BaseEntity
    {
        [MaxLength(30)]
        [Required]
        public string RoleName { get; set; }
    
    }
}
