using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Spoiler.Models
{
    public class Review
    {
        public int ReviewId { get; set; }

        [Required]
        public string? ReviewTitle { get; set; }

        [Required]
        public string? ReviewContent { get; set;}

        [Required]
        public int Rating { get; set; }

        public string? Pic { get; set; }

        [NotMapped]
        public IFormFile? Upload { get; set; }

        public DateTime Added { get; set; } = DateTime.Now;

        public Film? Film { get; set; }

        public Show? Show { get; set; }

        public ApplicationUser? User { get; set; }
        [NotMapped]
        public string? UserKey { get; set; }

        [NotMapped]
        public int? FilmKey { get; set; }

        [NotMapped]
        public int? ShowKey { get; set; }

    }
}
