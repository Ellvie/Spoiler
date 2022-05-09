using System.ComponentModel.DataAnnotations;

namespace Spoiler.Models
{
    public class Show
    {
        public int ShowId { get; set; }

        [Required]
        public string? ShowName { get; set; }

        [Required]
        public int Season { get; set; }

        [Required]
        public int Episode { get; set; }

        [Required]
        public string? EpisodeName { get; set; }

        [Required]
        public string? AirDate { get; set; }

        [Required]
        public string? AirTime { get; set; }

        [Required]
        public string? Genre { get; set; }

        [Required]
        public string? Description { get; set; }

        [Required]
        public string? Network { get; set; }
    }
}
