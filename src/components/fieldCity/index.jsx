import React, {useState, useEffect, useRef} from "react";
import { useFormikContext, Field } from 'formik';
import classNames from "classnames";
import './field-city.scss'
import {getCitiesFetch} from "../../store/citiesSlise";
import {useDispatch} from "react-redux";
import arrow from '../cart/img/arrow-up.svg'


const FieldCity = ({cities = [], isCitiesError}) => {
    const dispatch = useDispatch();
    const formikContext = useFormikContext();
    const countryValue = formikContext.values.country;
    const cityValue = formikContext.values.storeAddress;
    const isError =  formikContext.errors.storeAddress && formikContext.touched.storeAddress;
    const [showCitiesList, toggleShowCitiesList] = useState(false);
    const options = cities.filter(({city}) => city.toLowerCase().indexOf(cityValue.toLowerCase()) !== -1);
    const handleClick = (e) => {
        e.preventDefault();
        formikContext.setFieldValue('storeAddress', e.target.value);
        toggleShowCitiesList(false);
    }

    const validateCity = (value) => {
        let errors;
        if (isCitiesError && cities.length) {
            const citiesArray = cities.map(({city}) => city);
            const countriesArray = new Set(cities.map(({country}) => country));
            if (!citiesArray.includes(value) || !countriesArray.has(countryValue)) {
                errors = 'Нету результатов';
            }
        }
        if (isCitiesError && !cities.length)
            errors = 'Нету результатов';

        return errors;
    }
    const ref = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                toggleShowCitiesList(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    useEffect(() => {
        if (cityValue.length === 3) {
            dispatch(getCitiesFetch({
                city: cityValue,
                country: countryValue
            }))
        }
        // eslint-disable-next-line
    },[cityValue])

    return (
        <div className={classNames('field-city', {'field-city--active': showCitiesList})} ref={ref}>
            <label htmlFor="storeAddress-input">
                <Field
                    id="storeAddress-input"
                    name="storeAddress"
                    validate={validateCity}
                    autoComplete="whatever"
                    placeholder="Store address"
                    disabled={!countryValue}
                    onFocus={() => toggleShowCitiesList(true)}
                    onChange={(e) => formikContext.setFieldValue('storeAddress', e.target.value)}
                    className={classNames('field-city__input', {'field-city__input--errors': isError})}
                />
                {showCitiesList && <img className='field-city__arrow' src={arrow} alt=""/>}
            </label>
            {showCitiesList &&
            <ul className="field-city__list">
                {options.map((item) => {
                    return <li className="field-city__item" key={item._id}>
                        <button className="field-city__btn" onClick={e => handleClick(e)} value={item.city}>{item.city}</button>
                    </li>
                })}
            </ul>
            }
        </div>
    )
}
export default FieldCity