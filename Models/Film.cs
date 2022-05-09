using System.ComponentModel.DataAnnotations;


namespace Spoiler.Models
{
    public class Film
    {
        public int FilmId { get; set; }

        [Required]
        public string? FilmName { get; set; }

        [Required]
        public int Year { get; set; }

        [Required]
        public string? Genre { get; set; }

        [Required]
        public string? Description { get; set; }

        [Required]
        public string? Studio { get; set; }
    }
}
