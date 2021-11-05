using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace ApplicationCore.Entites
{
    [Table("User")]
    class User : BaseEntity
    {
        [MaxLength(30)]
        [Required]
        public string FirstName { get; set; }

        [MaxLength(30)]
        [Required]
        public string LastName { get; set; }

        [MaxLength(30)]
        [Required]
        public string Email { get; set; }

        [MaxLength(30)]
        [Required]
        public string Username { get; set; }

        [MaxLength(15)]
        [Required]
        public string PasswordHash { get; set; }

        [ForeignKey("Role")]
        [Required]
        public int RoleId { get; set; }
    }
}
