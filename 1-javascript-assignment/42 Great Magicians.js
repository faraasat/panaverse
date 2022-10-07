const mName = ["Harry Potter", "Potter Harry"];

const make_great = (arr) => {
  for (let i in arr) arr[i] = "Great " + arr[i];
};

const show_magicians = (arr) => {
  for (let i in arr) console.log(arr[i]);
};

make_great(mName);
show_magicians(mName);
