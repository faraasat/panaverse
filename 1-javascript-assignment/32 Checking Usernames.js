const current_users = ["Waleed", "Darshan", "Habib", "Babar", "Aiman"];
const new_users = ["Waleed", "Ali", "Shahbaz", "Suzuka", "Azher"];

for (let i in current_users)
  current_users[i].toLowerCase() === new_users[i].toLowerCase()
    ? console.log(`${new_users[i]} will need to enter a new username`)
    : console.log("username is available");
