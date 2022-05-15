using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Spoiler.Models
{
    [NotMapped]
    public class ForumCommentPost
    {
        [Required]
        public string? ForumComment { get; set; }
        public ApplicationUser? User { get; set; }
        public int? ShowId { get; set; }
        public int? FilmId { get; set; }
    }
}
