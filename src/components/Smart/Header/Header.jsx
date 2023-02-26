import s from './Header.module.scss'

export const Header = () =>{

    return(

        <div className={`container ${s.header_container}`}>

            <div className={s.name_country_city}>

                <h2>
                    Ukraine,<b>Kiev</b>
                </h2>

                <h3>
                    Mon 23.02
                </h3>

            </div>

        </div>

    )

}