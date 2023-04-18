import { useState, useEffect } from 'react';
import axios from './api/axios';
import './App.scss';
import './assets/reset_style.scss';
import { Header } from './components/Smart/Header/Header';
import { Section } from './components/Smart/Section/Section';

function App() {

  const [weatherData, setWeatherData] = useState({});
  const [daileForecast, setDaileForecast] = useState({});
  const apiKey = import.meta.env.VITE_REACT_APP_OPEN_WEATHER_KEY;

  async function getWeatherData(foundCity = localStorage.getItem('city') ? localStorage.getItem('city') : 'Kiev') {

    try {
      const weatherDataReg = await axios.get(`weather?q=${foundCity}&appid=${apiKey}`),
            daileForecastReg = await axios.get(`forecast?q=${foundCity}&cnt=40&appid=${apiKey}`);
 
      setWeatherData(weatherDataReg.data);
      setDaileForecast(daileForecastReg.data);
    }
    catch (error) {
      console.error(error);
    }

  }

  useEffect(() => {

    getWeatherData();

  }, [])

  return (
    <div className="App">

      <div className="wrapper">
        <Header cityName={weatherData?.name} getData = {getWeatherData} />
        {/* <Header cityName={weatherData.name} country={weatherData.sys ? weatherData.sys.country : ''} /> */}
        <Section mainData={weatherData?.main} weatherType={weatherData.weather?.[0].main} daileForecastArr = {daileForecast?.list} />
      </div>

    </div>
  )
}

export default App
