import React, {useState, useEffect, useRef} from "react";
import { useFormikContext, Field } from 'formik';
import classNames from "classnames";
import './field-city.scss'
import {getCitiesFetch, clearCities} from "../../store/citiesSlise";
import {useDispatch} from "react-redux";


const FieldCity = ({cities = []}) => {
    const dispatch = useDispatch();
    const formikContext = useFormikContext();
    const countryValue = formikContext.values.country;
    const cityValue = formikContext.values.storeAddress;
    const isError =  formikContext.errors.storeAddress && formikContext.touched.storeAddress;
    const [showCitiesList, toggleShowCitiesList] = useState(false);
    const options = cities.filter(({city}) => city.toLowerCase().includes(cityValue.toLowerCase()));
    const handleClick = (e) => {
        e.preventDefault();
        formikContext.setFieldValue('storeAddress', e.target.value);
        toggleShowCitiesList(false);
    }

    function validateCites(value) {
        let error;
        if (!value) {
            error = 'Поле должно быть заполнено';
        }
        return error;
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
    useEffect(() => {
        formikContext.setFieldValue('storeAddress', '');
        dispatch( clearCities())
        // eslint-disable-next-line
    },[countryValue])

    return (
        <div className={classNames('field-city', {'field-city--active': showCitiesList})} ref={ref}>
            <label className="field-city__label" htmlFor="storeAddress-input">
                <Field
                    id="storeAddress-input"
                    name="storeAddress"
                    validate={validateCites}
                    autoComplete="whatever"
                    placeholder="Store address"
                    disabled={!countryValue}
                    onFocus={() => toggleShowCitiesList(true)}
                    onChange={(e) => formikContext.setFieldValue('storeAddress', e.target.value)}
                    className={classNames('field-city__input', {'field-city__input--errors': isError})}
                />
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