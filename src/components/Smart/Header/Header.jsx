import s from './Header.module.scss'

export const Header = () => {

    return (

        <header>

            <div className="container">

                <div className={`row ${s.main_header_row}`}>

                    <div className={s.col_name_country_city}>

                        <h2>
                            Ukraine,<b>Kiev</b>
                        </h2>

                        <h3>
                            Mon 23.02
                        </h3>

                    </div>

                    <div className={s.burger_bt_col}>

                        <img className={s.burger_ico} src="/img/header_ico/Group 142.svg" alt="" />

                    </div>

                </div>

            </div>

        </header>

    )

}