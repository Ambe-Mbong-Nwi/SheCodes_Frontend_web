let weather = {
  paris: {
    temp: 19.7,
    humidity: 80,
  },
  tokyo: {
    temp: 17.3,
    humidity: 50,
  },
  lisbon: {
    temp: 30.2,
    humidity: 20,
  },
  "san francisco": {
    temp: 20.9,
    humidity: 100,
  },
  oslo: {
    temp: -5,
    humidity: 20,
  },
};

// write your code here

let city = prompt("Enter a city");
let cityT = city.trim(); // remove white spaces.
let cityL = cityT.toLowerCase(); //to lowercase
if (weather.hasOwnProperty(cityL)) {
  let tempC = Math.round(weather[cityL].temp);
  let tempF = Math.round((tempC * 9) / 5 + 32);
  let humidity = weather[cityL].humidity;

  // Display the weather information using an alert
  alert(
    `It is currently ${tempC}°C (${tempF}°F) in ${cityL} with a humidity of ${humidity}%`
  );
} else {
  alert(
    "Sorry, we don't know the weather for this city, try going to https://www.google.com/search?q=weather+sydney"
  );
}
