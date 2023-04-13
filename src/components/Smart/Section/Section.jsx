import React, { useState, useEffect } from 'react';
import s from './Section.module.scss';
import { Daile_forecast } from '../../Ordinary/Daily_forecast/Daile_forecast';
import { Weekly_forecast } from '../../Ordinary/Weekly_forecast/Weekly_forecast';

export const Section = (props) => {

    let weatherType = props.weatherType;
    let mainData = props.mainData;    

    // console.log(mainData)

    const weatherImgSrc = {
        clouds: '/img/weather_ico/Clouds.svg',
        snowy: '/img/weather_ico/Snowy.svg',
        sunny: '/img/weather_ico/Sunny.svg',
        rainy: '/img/weather_ico/Rainy.svg',
        rain_thunder: '/img/weather_ico/RainThunder.svg',
        partly_cloudly: '/img/weather_ico/PartlyCloudly.svg',
        clear: '/img/weather_ico/Sunny.svg'
    }

    function parseDaileForecastData (){
        const data = props.daileForecastArr;
        let newArr = [];

        try{
            if(!Array.isArray(data)) throw new Error('Is not a array');

            data.forEach(item =>{
                let date = item.dt_txt.match(/\d\d\:/m)[0].replace(/\:/g,''),
                    temp = Math.round(item.main.temp - 273.15),
                    img  = setWeatherImg(item.weather ? item.weather[0].main : '');

                if(date){

                    newArr.push({
                        date : +date < 12 ? date + ' AM' : date + ' PM',
                        temp : temp,
                        imgSrc : img
                    })

                }

            })

        }
        catch(error){
            console.log(error);
        }

        return newArr;

    }

    parseDaileForecastData();

    function setWeatherImg(type){

        switch (type) {
            case 'Clouds':
                return weatherImgSrc.clouds;
            case 'Rain':
                return weatherImgSrc.rainy;
            case 'Snow':
                return weatherImgSrc.snowy;
            case 'Sunny':
                return weatherImgSrc.sunny;
            case 'Clear':
                return weatherImgSrc.clear;
            default:
                console.log('Not have this type weather');

        }

    }

    return (

        <section>

            <div className="container">

                <div className={`row ${s.temperature_type_row}`}>

                    <div className={s.temperature_type_col}>

                        <img className={s.weather_img_type} src={setWeatherImg(weatherType)} alt="" />

                        <div className={s.type_weather_text}>

                            <h2>{mainData ? Math.round(mainData.temp - 273.15) : 'error'}°</h2>

                            <p>{weatherType}</p>

                        </div>

                    </div>

                </div>

                <div className={s.additionals_value_row}>

                    <div className={s.additionals_value_col}>

                        <div className={s.item}>

                            <img className={s.item_ico} src="/img/section_ico/thermometer_ico.svg" alt="" />

                            <h3>{mainData ? Math.round(mainData.temp - 273.15) : 'error'}°</h3>

                            <p>Wind</p>

                        </div>

                        <div className={s.item}>

                            <img className={s.item_ico} src="/img/section_ico/wind_ico.svg" alt="" />

                            <h3>10km/h</h3>

                            <p>Wind</p>

                        </div>

                        <div className={s.item}>

                            <img className={s.item_ico} src="/img/section_ico/humidity_ico.svg" alt="" />

                            <h3>{mainData ? mainData.humidity : 'error'}%</h3>

                            <p>Humid</p>

                        </div>

                    </div>

                </div>

                <Daile_forecast daileForecast = {parseDaileForecastData()} />

                <Weekly_forecast />

            </div>

        </section>

    )

}