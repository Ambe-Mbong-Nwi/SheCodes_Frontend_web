let paris = {
  name: "Paris",
  country: "France",
  language: "French",
  temperature: 18,
  capitalCity: true,
};

//challenge 1
console.log(paris.temperature);

//challlenge 2
let sydney = {
  name: "Sydney",
  country: "Cameroon",
  language: "English",
  temperature: 27,
  capitalCity: false,
};

console.log(sydney["temperature"]);

//challenge 3
let cities = ["Buea", "Bamenda", "Yaounde"];
console.log(cities[0]);
console.log(cities[1]);
console.log(cities[2]);

//challenge 4
let cities2 = [
  {
    name: "Paris",
    country: "France",
    language: "French",
    temperature: 18,
    capitalCity: true,
  },
  {
    name: "Sydney",
    country: "Cameroon",
    language: "English",
    temperature: 27,
    capitalCity: false,
  },
  {
    name: "Lagos",
    country: "Nigeria",
    language: "English",
    temperature: 40,
    capitalCity: true,
  },
];

console.log(cities2[0].name);
console.log(cities2[0].temperature);

console.log(cities2[1].name);
console.log(cities2[1].temperature);

console.log(cities2[2].name);
console.log(cities2[2].temperature);
