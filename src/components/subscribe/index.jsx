import React, {useState} from 'react';
import './subscribe.scss'
//img
import women from './img/women_left.png'
import men from './img/men_right.png'
import Donut from "../donut";
import {Formik} from "formik";

const Subscribe = () => {
    let isError = false
    const [mailError, setMailError] = useState(true)

    return (
        <div className='subscribe'>
            <div className='subscribe__wrap contain'>
                <div className='subscribe__block'>
                    <h3 className='subscribe__title'>Special Offer</h3>
                    <p className='subscribe__text'>Subscribe <br/> And <span className='subscribe__text subscribe__text--color'>Get 10% Off</span></p>
                    <Formik
                        initialValues={{email: ''}}
                        validate={values => {
                            if (values.email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)  ) {
                                setMailError(false)
                            } else {
                                setMailError(true)
                            }
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            setTimeout(() => {
                                alert(JSON.stringify(values, null, 2));
                                setSubmitting(false);
                            }, 400);
                        }}
                    >
                        {({
                              values,
                              /*
                              errors,
                              touched,
                              */
                              handleChange,
                              handleBlur,
                              handleSubmit,
                              isSubmitting,
                          }) => (
                            <form className='subscribe__form' onSubmit={handleSubmit}>
                                <input
                                    className='subscribe__input'
                                    placeholder='Enter your email'
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <button type='submit' disabled={mailError} className='subscribe__button'>
                                    {isError && values.mail && <p className='subscribe__error'>Ошибка при отправке почты</p>}
                                    {isError && <p className='subscribe__success'>Почта отправлена успешно</p>}
                                    {isSubmitting && <div className='subscribe__donut'><Donut/></div>}
                                    <div className='subscribe__button-text'>Subscribe</div>
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
                <img className='subscribe__img subscribe__img--left' src={women} alt="the lady in the hat"/>
                <img className='subscribe__img subscribe__img--right' src={men} alt="dandy man"/>
            </div>
        </div>
    );
};

export default Subscribe;