import s from './Section.module.scss'

export const Section = () => {

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

                <div className={s.weather_day_row}>

                    <div className={s.weather_day_col}>

                        <div className={s.item}>

                            <p>11 Am</p>

                            <img src="/img/weather_ico/Rainy.svg" alt="" />

                            <h3>-10°</h3>

                        </div>

                        <div className={s.item}>

                            <p>11 Am</p>

                            <img src="/img/weather_ico/Rainy.svg" alt="" />

                            <h3>-10°</h3>

                        </div>

                        <div className={s.item}>

                            <p>11 Am</p>

                            <img src="/img/weather_ico/Rainy.svg" alt="" />

                            <h3>-10°</h3>

                        </div>

                        <div className={s.item}>

                            <p>11 Am</p>

                            <img src="/img/weather_ico/Rainy.svg" alt="" />

                            <h3>-10°</h3>

                        </div>

                        <div className={s.item}>

                            <p>11 Am</p>

                            <img src="/img/weather_ico/Rainy.svg" alt="" />

                            <h3>-10°</h3>

                        </div>

                        <div className={s.item}>

                            <p>11 Am</p>

                            <img src="/img/weather_ico/Rainy.svg" alt="" />

                            <h3>-10°</h3>

                        </div>

                        <div className={s.item}>

                            <p>11 Am</p>

                            <img src="/img/weather_ico/Rainy.svg" alt="" />

                            <h3>-10°</h3>

                        </div>

                        <div className={s.item}>

                            <p>11 Am</p>

                            <img src="/img/weather_ico/Rainy.svg" alt="" />

                            <h3>-10°</h3>

                        </div>

                    </div>

                </div>

                <div className={s.week_weather_modal_window}>

                    <div className={s.modal_window_col}>
                        
                    </div>
                        
                </div>

            </div>

        </section>

    )

}