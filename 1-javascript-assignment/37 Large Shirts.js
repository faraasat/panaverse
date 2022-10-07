const make_shirt = (size) => {
  if (size === "large")
    console.log(
      `Size of your shirt is "${size}" and message printed on it will be "I love JavaScript"`
    );
  else if (size === "medium")
    console.log(
      `Size of your shirt is "${size}" and message printed on it will be "I love TypeScript"`
    );
  else
    console.log(
      `Size of your shirt is "${size}" and message printed on it will be "I love this world"`
    );
};

make_shirt("small");
