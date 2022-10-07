const mName = ["Harry Potter", "Potter Harry"];
const greatM = [];

const make_great = (arr) => {
  for (let i in arr) greatM.push("Great " + arr[i]);
};

const show_magicians = (arr) => {
  for (let i in arr) console.log(arr[i]);
};

make_great(mName);
show_magicians(mName);
show_magicians(greatM);
