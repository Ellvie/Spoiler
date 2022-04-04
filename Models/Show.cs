namespace Spoiler.Models
{
    public class Show
    {
        public int ShowId { get; set; }
        public string? ShowName { get; set; }

        public int Season { get; set; }

        public int Episode { get; set; }

        public string? EpisodeName { get; set; }

        public string? AirDate { get; set; }

        public string? AirTime { get; set; }

        public string? Genre { get; set; }

        public string? Description { get; set; }

        public string? Network { get; set; }
    }
}
