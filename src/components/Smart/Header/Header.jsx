import s from './Header.module.scss'

export const Header = (props) => {

    try{

        if(typeof(props.cityName) != 'string' || typeof(props.country != 'string')){
            throw new Error ("Props have wrong format ")
        }

    }
    catch(error){
        console.log(error);
    }

    function setCurentData (){

        const data = new Date(),
              curentMount = data.getMonth() + 1 > 10 ? data.getMonth() + 1 : '0' + data.getMonth(),
              curentData =  data.getDate() + 1 > 10 ? data.getDate() + 1 : '0' + data.getDate(),
              curentDay = data.getDay() - 1;

        const daysWeek = [
            'Mon',
            'Tues',
            'Weds',
            'Thurs',
            'Fri',
            'Sat',
            'Sun'
        ]

        return `${daysWeek[curentDay]} ${curentData}.${curentMount}` ;

    }

    return (

        <header>

            <div className="container">

                <div className={`row ${s.main_header_row}`}>

                    <div className={s.col_name_country_city}>

                        <h2>
                            {props.country},<b>{props.cityName}</b>
                        </h2>

                        <h3>
                           {setCurentData()}
                        </h3>

                    </div>

                    <div className={s.burger_bt_col}>

                        <img className={s.burger_ico} src="/img/header_ico/Group 142.svg" alt="" />

                    </div>

                </div>

            </div>

            <div className={s.burgerBody}>

                <form>

                    <label>
                            <input className={s.cityInput} type="text" name='foundCity'/>
                    </label>
                    
                    <img src="" alt="" />
                    
                </form>

            </div>

        </header>

    )

}