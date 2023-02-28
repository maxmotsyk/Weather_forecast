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

            </div>

        </section>

    )

}