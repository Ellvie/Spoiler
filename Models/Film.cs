namespace Spoiler.Models
{
    public class Film
    {
        public int FilmId { get; set; }
        public string? FilmName { get; set; }

        public DateOnly? PremierDate { get; set; }

        public string? Genre { get; set; }

        public string? Description { get; set; }

        public string? Studio { get; set; }
    }
}
