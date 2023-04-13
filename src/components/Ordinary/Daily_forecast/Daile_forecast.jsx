import s from './Daile_forecast.module.scss';

export const Daile_forecast = ({ daileForecast }) => {


    return (

        <div className={s.weather_day_row}>

            <div className={s.weather_day_col}>

                {
                    
                    daileForecast.map(({ date, imgSrc, temp }) => (

                        <div className={s.item}>

                            <p>{date}</p>

                            <img src={imgSrc} />

                            <h3>{temp}°</h3>

                        </div>

                    ))

                }


            </div>

        </div>

    )

}