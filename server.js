const Axios = require("axios");
const express = require("express");
const app = express();
const port = 3000;

const requestOne = Axios.get(
  "http://api.openweathermap.org/data/2.5/weather?q=tunis&appid=acdc895c0c484038f269ca58955def89"
);
const requestTwo = Axios.get(
  "http://api.openweathermap.org/data/2.5/weather?id=2172797&appid=acdc895c0c484038f269ca58955def89"
);
const requestThree = Axios.get(
  "http://api.openweathermap.org/data/2.5/weather?zip=94040,us&appid=acdc895c0c484038f269ca58955def89"
);
const requestFour = Axios.get(
  "http://api.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=acdc895c0c484038f269ca58955def89"
);
const requestFive = Axios.get(
  "http://api.openweathermap.org/data/2.5/box/city?bbox=12,32,15,37,10&appid=acdc895c0c484038f269ca58955def89"
);
const requestSex = Axios.get(
  "http://api.openweathermap.org/data/2.5/weather?zip=94020,us&appid=acdc895c0c484038f269ca58955def89"
);
Axios.all([
  requestOne,
  requestTwo,
  requestThree,
  requestFour,
  requestFive,
  requestSex,
])
  .then(
    Axios.spread(
      (
        ResponseOne,
        ResponseTwo,
        ResponseThree,
        ResponseFour,
        ResponseFive,
        ResponsesSix
      ) => {
        console.log(
          ResponseOne.data,
          ResponseTwo.data,
          ResponseThree.data,
          ResponseFour.data,
          ResponseFive.data,
          ResponsesSix.data
        );
      }
    )
  )
  .catch((errors) => {
    console.error(errors);
  });

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
