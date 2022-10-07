const usernames = ["Ali", "Usama", "Admin", "Sara", "Zara"];

if (usernames.length === 0) console.log("We need to find some users!");
else
  for (let i in usernames)
    usernames[i].toLowerCase() === "admin"
      ? console.log("Hello admin, would you like to see a status report?")
      : console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
