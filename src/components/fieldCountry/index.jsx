import React, {useState, useEffect, useRef} from "react";
import { useFormikContext, Field } from 'formik';
import classNames from "classnames";
import './field-country.scss'


const FieldCountry = ({countries}) => {
    const countriesArr = countries.map(({name}) => name);
    const formikContext = useFormikContext();
    const isError =  formikContext.errors.country && formikContext.touched.country;
    const [showCountriesList, toggleShowCountriesList] = useState(false);
    const handleClick = (e) => {
        e.preventDefault();
        formikContext.setFieldValue('country', e.target.value);
        toggleShowCountriesList(false);
    }

    const handleBlurCustom = (value) => {
        formikContext.setFieldTouched('country', true);
        if (!countriesArr.includes(value))
            formikContext.setFieldValue('country', '', true)
    }
    const validateCountry = (value) => (!countriesArr.includes(value) && 'Выберите город из списка');
    const ref = useRef(null);
    useEffect(() => {
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                toggleShowCountriesList(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);

    return (
        <div className={classNames('field-country', {'field-country--active': showCountriesList})} ref={ref}>
            <label className="field-country__label" htmlFor="country-input">
                <Field
                    id="country-input"
                    name="country"
                    validate={validateCountry}
                    autoComplete="whatever"
                    placeholder="Country"
                    onFocus={() => toggleShowCountriesList(true)}
                    onBlur={(e) => handleBlurCustom(e.target.value)}
                    onChange={(e) => formikContext.setFieldValue('country', e.target.value)}
                    className={classNames('field-country__input', {'field-country__input--errors': isError})}
                />
            </label>
            {showCountriesList &&
            <ul className="field-country__list">
                {countries.map((item) => {
                    return <li className="field-country__item" key={item._id}>
                        <button className="field-country__btn" onClick={e => handleClick(e)} value={item.name}>{item.name}</button>
                    </li>
                })}
            </ul>
            }
        </div>
    )
}
export default FieldCountry