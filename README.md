![Image alt](https://github.com/maxmotsyk/Weather_forecast/raw/main/public/img/ReadmyImg.jpg)

# Weather Forecast

This is a web application for finding the weather in your city and country. As a result of the search on the main screen of your device, you will be able to see the following information:

+ Real-time weather forecast (minimum temperature, maximum temperature, weather type, air humidity, pressure)
  
+ All-day forecast with a 3-hour interval with weather type (an illustrated) and temperature
  
+ Weekly forecast based on a 3-hour interval (Unfortunately, I couldn't get a free weekly API request, so I had to make do with a 3-hour interval for 5 days).
  
#
During the development of the React app, I used the following technology stack:

+ React.js
+ Vite.js
+ Axios
  
Also, to get weather data, I used the API from a service such as Open Weather ([https://openweathermap.org/](https://openweathermap.org/)).
#
In order to use my SPA, you should install all dependencies and packages, also get and add your own API Key to the .env file, which you will receive when authorizing on Open Weather (do not forget that when using Vite.Js, .env is accessed in a different way)

```js
const apiKey = import.meta.env.VITE_REACT_APP_OPEN_WEATHER_KEY;
```
