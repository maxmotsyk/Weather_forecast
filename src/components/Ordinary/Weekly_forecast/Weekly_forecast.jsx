import s from './Weekly_forecast.module.scss';

export const Weekly_forecast = () => {
    
    return (

        <div className={s.bottom_sheet_row}>

            <div className={s.bottom_sheet_col}>

                <table>

                    <tr className={s.tabel_title_row}>

                        <th>Day</th>

                        <th></th>

                        <th>Min</th>

                        <th>Max</th>

                    </tr>

                    <tr className={s.tabel_day_forecast}>

                        <td>Tuesday</td>

                        <td className={s.tabel_day_forecas_img}>
                            <img src="/img/weather_ico/Rainy.svg" alt="" />
                        </td>

                        <td>-10°</td>

                        <td>-15°</td>

                    </tr>

                    <tr className={s.tabel_day_forecast}>

                        <td>Wednesday</td>

                        <td className={s.tabel_day_forecas_img}>
                            <img src="/img/weather_ico/Rainy.svg" alt="" />
                        </td>

                        <td>-10°</td>

                        <td>-15°</td>

                    </tr>

                    <tr className={s.tabel_day_forecast}>

                        <td>Thursday</td>

                        <td className={s.tabel_day_forecas_img}>
                            <img src="/img/weather_ico/Rainy.svg" alt="" />
                        </td>

                        <td>-10°</td>

                        <td>-15°</td>

                    </tr>

                    <tr className={s.tabel_day_forecast}>

                        <td>Friday</td>

                        <td className={s.tabel_day_forecas_img}>
                            <img src="/img/weather_ico/Rainy.svg" alt="" />
                        </td>

                        <td>-10°</td>

                        <td>-15°</td>

                    </tr>

                    <tr className={s.tabel_day_forecast}>

                        <td>Saturday</td>

                        <td className={s.tabel_day_forecas_img}>
                            <img src="/img/weather_ico/Rainy.svg" alt="" />
                        </td>

                        <td>-10°</td>

                        <td>-15°</td>

                    </tr>

                    <tr className={s.tabel_day_forecast}>

                        <td>Sunday</td>

                        <td className={s.tabel_day_forecas_img}>
                            <img src="/img/weather_ico/Rainy.svg" alt="" />
                        </td>

                        <td>-10°</td>

                        <td>-15°</td>

                    </tr>

                </table>

            </div>

        </div> 

    )

}