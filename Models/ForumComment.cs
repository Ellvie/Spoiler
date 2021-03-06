using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace Spoiler.Models
{
    public class ForumComment
    {
        public int ForumCommentId { get; set; }

        [Required]
        public string? Comment { get; set; }

        public ApplicationUser? User { get; set; }

        [NotMapped]
        public string? UserKey { get; set; }

        [NotMapped]
        public int CommentKey { get; set; }

        public Forum? Forum { get; set; }
        public DateTime Added { get; set; } = DateTime.Now;
    }
}
