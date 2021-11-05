using System.ComponentModel.DataAnnotations;

namespace ApplicationCore.Entites
{
    public class BaseEntity
    {
        [Key]
        [Required]
        public int Id { get; set; }
    }
}
