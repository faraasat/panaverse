let pers = ["Ali", "Darshan", "Aleena"];

pers[0] = "Azeem";

for (let i = 0; i < pers.length; i++) {
  console.log(`Dear ${pers[i]}, I am inviting you to Dinner!`);
}

console.log(
  `\n${pers[0]} will not be able to come to dinner\n\nNew List is as below:\n`
);

pers[1] = "Darshan";

for (let i = 0; i < pers.length; i++) {
  console.log(`Dear ${pers[i]}, I am inviting you to Dinner!`);
}
