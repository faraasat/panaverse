const usernames = ["Ali", "Usama", "Admin", "Sara", "Zara"];

for (let i in usernames)
  usernames[i].toLowerCase() === "admin"
    ? console.log("Hello admin, would you like to see a status report?")
    : console.log(`Hello ${usernames[i]}, thank you for logging in again.`);
