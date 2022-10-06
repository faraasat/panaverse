let uname = "Farasat ali";

const toTitleCase = (name) => {
  return name
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
};

console.log("Lower Case =>", uname.toLowerCase());
console.log("Upper Case =>", uname.toUpperCase());
console.log("Title Case =>", toTitleCase(uname));
