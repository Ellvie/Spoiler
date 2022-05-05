using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Spoiler.Models
{
    public class Recap
    {
        public int RecapId { get; set; }

        [Required]
        public string? RecapTitle { get; set; }

        [Required]
        public string? RecapContent { get; set; }

        public string? Pic { get; set; }

        [NotMapped]
        public IFormFile? Upload { get; set; }

        public DateTime Added { get; set; } = DateTime.Now;

        public Film? Film { get; set; }

        public Show? Show { get; set; }

        public ApplicationUser? User { get; set; }
    }
}
