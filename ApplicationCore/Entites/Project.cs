using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text;

namespace ApplicationCore.Entites
{
    [Table("Project")]
    public class Project : BaseEntity
    {
        [MaxLength(30)]
        [Required]
        public string Name { get; set; }

        [MaxLength(300)]
        [Required]
        public string Description { get; set; }

        [Required]
        public bool IsCompleted { get; set; }

        [Required]
        public byte[] Pricture { get; set; }
    
    }
}
