import React, {useState} from 'react';
import './subscribe.scss'
//img
import women from './img/women_left.png'
import men from './img/men_right.png'
import Donut from "../donut";
import {Formik} from "formik";
import {getMailFetch} from "../../store/mailSlise";
import {useDispatch, useSelector} from "react-redux";

const Subscribe = () => {
    const dispatch = useDispatch()

    const [mailError, setMailError] = useState(true)

    const {isMailLoading, isMailSendSuccess, isMailError} = useSelector((state) => state.mail)

    return (
        <div className='subscribe'>
            <div className='subscribe__wrap contain'>
                <div className='subscribe__block'>
                    <h3 className='subscribe__title'>Special Offer</h3>
                    <p className='subscribe__text'>Subscribe <br/> And <span className='subscribe__text subscribe__text--color'>Get 10% Off</span></p>
                    <Formik
                        initialValues={{email: ''}}
                        validate={values => {
                            if (values.email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                setMailError(false)
                            } else {
                                setMailError(true)
                            }
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            dispatch(getMailFetch(values));
                            setSubmitting(false);
                        }}
                    >
                        {({
                              values,
                              handleChange,
                              handleBlur,
                              touched,
                              handleSubmit,
                              resetForm,
                          }) => (
                            <form className='subscribe__form' onSubmit={handleSubmit}>
                                <input
                                    data-test-id='main-subscribe-mail-field'
                                    className='subscribe__input'
                                    placeholder='Enter your email'
                                    type="email"
                                    name="email"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.email}
                                />
                                <button
                                    data-test-id='main-subscribe-mail-button'
                                    type='submit'
                                    disabled={mailError}
                                    className='subscribe__button'
                                    onClick={() => resetForm({values: ''})}>  {/*  resetForm очищает форму при нажатии, но надо очищать форму когда isMailSendSuccess === true*/}
                                    {isMailError && touched.email && <p className='subscribe__error'>Ошибка при отправке почты</p>}
                                    {isMailSendSuccess && touched.email && <p className='subscribe__success'>Почта отправлена успешно</p>}
                                    {isMailLoading && touched.email && <div className='subscribe__donut'><Donut/></div>}
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
