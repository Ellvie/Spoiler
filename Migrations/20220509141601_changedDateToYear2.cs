using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Spoiler.Migrations
{
    public partial class changedDateToYear2 : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "PremierDate",
                table: "Films");

            migrationBuilder.AddColumn<int>(
                name: "Year",
                table: "Films",
                type: "INTEGER",
                nullable: true);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "Year",
                table: "Films");

            migrationBuilder.AddColumn<DateTime>(
                name: "PremierDate",
                table: "Films",
                type: "TEXT",
                nullable: true);
        }
    }
}
