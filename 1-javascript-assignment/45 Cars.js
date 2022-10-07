const carObjs = (manu, model, ...args) => {
  let obj = { manufacturer: manu, model: model, ...args };
  return obj;
};

console.log(carObjs("Honda", "2016", { color: "green", wheel: 2 }));
console.log(
  carObjs("Suzuki", "2020", { color: "red", wheel: 4, engine: "1200cc" })
);
console.log(
  carObjs("Hyundai", "2022", {
    color: "red",
    wheel: 4,
    engine: "1800cc",
    hybrid: true,
  })
);
