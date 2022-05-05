using System.ComponentModel.DataAnnotations;

namespace Spoiler.Models
{
    public class Forum
    {
        public int ForumId { get; set; }

        [Required]
        public string? ForumComment { get; set; }

        public DateTime Added { get; set; } = DateTime.Now;

        public Film? Film { get; set; }

        public Show? Show { get; set; }

        public ApplicationUser? User { get; set; }
    }
}
