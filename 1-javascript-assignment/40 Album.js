const make_album = (name, title, no_of_tracks = null) =>
  (music_album = { name, title, no_of_tracks });

console.log(make_album("Atif Aslam", "Pakistani Singer"));
console.log(make_album("Talha Younus", "Pakistani Rapper"));
console.log(make_album("Justin Bieber", "American Singer"));
console.log(make_album("Karakoram", "Pakistan Band", 15));
