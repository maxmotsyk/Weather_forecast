import s from './Weekly_forecast.module.scss';

export const Weekly_forecast = ({ weeklyDate }) => {

    console.log(weeklyDate);

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

                    {

                        weeklyDate.map(({day, min, max, img})=>(

                            <tr className={s.tabel_day_forecast}>

                            <td>{day}</td>
    
                            <td className={s.tabel_day_forecas_img}>
                                <img src={img} alt="" />
                            </td>
    
                            <td>{min}°</td>
    
                            <td>{max}°</td>
    
                        </tr>
                        ))

                    }

                </table>

            </div>

        </div>

    )

}