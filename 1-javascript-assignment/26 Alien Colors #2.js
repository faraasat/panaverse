let alien_color = "red";

if (alien_color === "green")
  console.log("Player just earned 5 points for shooting the alien");
else if (alien_color !== "green") {
  console.log("Player just earned 10 points");
}

alien_color = "green";

if (alien_color === "green")
  console.log("Player just earned 5 points for shooting the alien");
else if (alien_color !== "green") {
  console.log("Player just earned 10 points");
}
