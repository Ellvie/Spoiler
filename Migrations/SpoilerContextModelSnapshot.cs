﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Spoiler.Data;

#nullable disable

namespace Spoiler.Migrations
{
    [DbContext(typeof(SpoilerContext))]
    partial class SpoilerContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder.HasAnnotation("ProductVersion", "6.0.1");

            modelBuilder.Entity("Spoiler.Models.ApplicationUser", b =>
                {
                    b.Property<string>("Id")
                        .HasColumnType("TEXT");

                    b.Property<int>("AccessFailedCount")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ConcurrencyStamp")
                        .HasColumnType("TEXT");

                    b.Property<string>("Email")
                        .HasColumnType("TEXT");

                    b.Property<bool>("EmailConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<bool>("LockoutEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<DateTimeOffset?>("LockoutEnd")
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedEmail")
                        .HasColumnType("TEXT");

                    b.Property<string>("NormalizedUserName")
                        .HasColumnType("TEXT");

                    b.Property<string>("PasswordHash")
                        .HasColumnType("TEXT");

                    b.Property<string>("PhoneNumber")
                        .HasColumnType("TEXT");

                    b.Property<bool>("PhoneNumberConfirmed")
                        .HasColumnType("INTEGER");

                    b.Property<string>("SecurityStamp")
                        .HasColumnType("TEXT");

                    b.Property<bool>("TwoFactorEnabled")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserName")
                        .HasColumnType("TEXT");

                    b.HasKey("Id");

                    b.ToTable("ApplicationUser");
                });

            modelBuilder.Entity("Spoiler.Models.Film", b =>
                {
                    b.Property<int>("FilmId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("FilmName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Genre")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Studio")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Year")
                        .HasColumnType("INTEGER");

                    b.HasKey("FilmId");

                    b.ToTable("Films");
                });

            modelBuilder.Entity("Spoiler.Models.Forum", b =>
                {
                    b.Property<int>("ForumId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Added")
                        .HasColumnType("TEXT");

                    b.Property<int?>("FilmId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ForumComment")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("ShowId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.HasKey("ForumId");

                    b.HasIndex("FilmId");

                    b.HasIndex("ShowId");

                    b.HasIndex("UserId");

                    b.ToTable("Forum");
                });

            modelBuilder.Entity("Spoiler.Models.ForumComment", b =>
                {
                    b.Property<int>("ForumCommentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Added")
                        .HasColumnType("TEXT");

                    b.Property<string>("Comment")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("ForumId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.HasKey("ForumCommentId");

                    b.HasIndex("ForumId");

                    b.HasIndex("UserId");

                    b.ToTable("ForumComment");
                });

            modelBuilder.Entity("Spoiler.Models.News", b =>
                {
                    b.Property<int>("NewsId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Content")
                        .HasColumnType("TEXT");

                    b.HasKey("NewsId");

                    b.ToTable("News");
                });

            modelBuilder.Entity("Spoiler.Models.Recap", b =>
                {
                    b.Property<int>("RecapId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Added")
                        .HasColumnType("TEXT");

                    b.Property<int?>("FilmId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Pic")
                        .HasColumnType("TEXT");

                    b.Property<string>("RecapContent")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("RecapTitle")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("ShowId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.HasKey("RecapId");

                    b.HasIndex("FilmId");

                    b.HasIndex("ShowId");

                    b.HasIndex("UserId");

                    b.ToTable("Recap");
                });

            modelBuilder.Entity("Spoiler.Models.Review", b =>
                {
                    b.Property<int>("ReviewId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<DateTime>("Added")
                        .HasColumnType("TEXT");

                    b.Property<int?>("FilmId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("Pic")
                        .HasColumnType("TEXT");

                    b.Property<int>("Rating")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ReviewContent")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("ReviewTitle")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int?>("ShowId")
                        .HasColumnType("INTEGER");

                    b.Property<string>("UserId")
                        .HasColumnType("TEXT");

                    b.HasKey("ReviewId");

                    b.HasIndex("FilmId");

                    b.HasIndex("ShowId");

                    b.HasIndex("UserId");

                    b.ToTable("Review");
                });

            modelBuilder.Entity("Spoiler.Models.Show", b =>
                {
                    b.Property<int>("ShowId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("AirDate")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("AirTime")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Episode")
                        .HasColumnType("INTEGER");

                    b.Property<string>("EpisodeName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Genre")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<string>("Network")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.Property<int>("Season")
                        .HasColumnType("INTEGER");

                    b.Property<string>("ShowName")
                        .IsRequired()
                        .HasColumnType("TEXT");

                    b.HasKey("ShowId");

                    b.ToTable("Shows");
                });

            modelBuilder.Entity("Spoiler.Models.TVGuide", b =>
                {
                    b.Property<int>("TVGuideId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("INTEGER");

                    b.Property<string>("Content")
                        .HasColumnType("TEXT");

                    b.HasKey("TVGuideId");

                    b.ToTable("TVGuide");
                });

            modelBuilder.Entity("Spoiler.Models.Forum", b =>
                {
                    b.HasOne("Spoiler.Models.Film", "Film")
                        .WithMany()
                        .HasForeignKey("FilmId");

                    b.HasOne("Spoiler.Models.Show", "Show")
                        .WithMany()
                        .HasForeignKey("ShowId");

                    b.HasOne("Spoiler.Models.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("Film");

                    b.Navigation("Show");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Spoiler.Models.ForumComment", b =>
                {
                    b.HasOne("Spoiler.Models.Forum", "Forum")
                        .WithMany()
                        .HasForeignKey("ForumId");

                    b.HasOne("Spoiler.Models.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("Forum");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Spoiler.Models.Recap", b =>
                {
                    b.HasOne("Spoiler.Models.Film", "Film")
                        .WithMany()
                        .HasForeignKey("FilmId");

                    b.HasOne("Spoiler.Models.Show", "Show")
                        .WithMany()
                        .HasForeignKey("ShowId");

                    b.HasOne("Spoiler.Models.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("Film");

                    b.Navigation("Show");

                    b.Navigation("User");
                });

            modelBuilder.Entity("Spoiler.Models.Review", b =>
                {
                    b.HasOne("Spoiler.Models.Film", "Film")
                        .WithMany()
                        .HasForeignKey("FilmId");

                    b.HasOne("Spoiler.Models.Show", "Show")
                        .WithMany()
                        .HasForeignKey("ShowId");

                    b.HasOne("Spoiler.Models.ApplicationUser", "User")
                        .WithMany()
                        .HasForeignKey("UserId");

                    b.Navigation("Film");

                    b.Navigation("Show");

                    b.Navigation("User");
                });
#pragma warning restore 612, 618
        }
    }
}
