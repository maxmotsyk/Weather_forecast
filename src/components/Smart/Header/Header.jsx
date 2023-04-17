import s from './Header.module.scss';
import React from 'react';
// import { useState, useEffect } from 'react';

export const Header = (props) => {

    let inputCityValue =  React.createRef();
    // const [inputWeatherData, setInputWeatherData] = useState(props.cityName)

    try {

        if (typeof (props.cityName) != 'string' || typeof (props.country != 'string')) {
            throw new Error("Props have wrong format ")
        }

    }
    catch (error) {
        console.log(error);
    }

    function searchWeatherCity (){
        localStorage.setItem('city',`${inputCityValue.current.value}`);
        props.getData(inputCityValue.current.value);
    }

    function setCurentData() {

        const data = new Date(),
            curentMount = data.getMonth() + 1 > 10 ? data.getMonth() + 1 : '0' + (data.getMonth() + 1),
            curentData = data.getDate() > 10 ? data.getDate() : '0' + data.getDate(),
            curentDay = data.getDay() ;

        const daysWeek = [
            'Sun',
            'Mon',
            'Tues',
            'Weds',
            'Thurs',
            'Fri',
            'Sat',
        ]

        return `${daysWeek[curentDay]} ${curentData}.${curentMount}`;

    }

    return (

        <header>

            <div className="container">

                <div className={`row ${s.main_header_row}`}>

                    <div className={s.col_name_country_city}>

                        <form className={s.searchCityForm}>

                            <label htmlFor="">

                                <img src="img/header_ico/place-ico.svg" alt="ico-point" />

                                <input placeholder={props.cityName} autocomplete="off"  type="text" name='citySearch' ref={inputCityValue} />

                            </label>

                        </form>

                        <h3>
                            {setCurentData()}
                        </h3>

                    </div>

                    <div className={s.burger_bt_col}>

                        <div className={s.burger_bt}>

                            <img onClick={() => {searchWeatherCity()}} src="img/header_ico/loupe-ico.svg" alt="loupe-ico" />

                        </div>

                    </div>

                </div>

            </div>

        </header>

    )

}