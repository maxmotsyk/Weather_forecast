import React, { useState, useEffect } from 'react';
import s from './Section.module.scss';
import { Daile_forecast } from '../../Ordinary/Daily_forecast/Daile_forecast';
import {Weekly_forecast} from '../../Ordinary/Weekly_forecast/Weekly_forecast';

export const Section = () => {

    const [bottom_sheet_open, set_bottom_sheet_open] = useState(false)


    return (

        <section>

            <div className="container">

                <div className={`row ${s.temperature_type_row}`}>

                    <div className={s.temperature_type_col}>

                        <img className={s.weather_img_type} src="/img/weather_ico/Sunny.svg" alt="" />

                        <div className={s.type_weather_text}>

                            <h2>-10°</h2>

                            <p>Sunny</p>

                        </div>

                    </div>

                </div>

                <div className={s.additionals_value_row}>

                    <div className={s.additionals_value_col}>

                        <div className={s.item}>

                            <img className={s.item_ico} src="/img/section_ico/thermometer_ico.svg" alt="" />

                            <h3>-8°</h3>

                            <p>Wind</p>

                        </div>

                        <div className={s.item}>

                            <img className={s.item_ico} src="/img/section_ico/wind_ico.svg" alt="" />

                            <h3>10km/h</h3>

                            <p>Wind</p>

                        </div>

                        <div className={s.item}>

                            <img className={s.item_ico} src="/img/section_ico/humidity_ico.svg" alt="" />

                            <h3>70%</h3>

                            <p>Humid</p>

                        </div>

                    </div>

                </div>

                <Daile_forecast/>

                <Weekly_forecast/>

            </div>

        </section>

    )

}