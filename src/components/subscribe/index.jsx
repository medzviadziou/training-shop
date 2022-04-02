import React, {useEffect, useRef, useState} from 'react';
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
    const [submitSubscribe, setSubmitSubscribe] = useState(false)
    const [success, setSuccess] = useState(false)

    const {isMailLoading, isMailSendSuccess, isMailError} = useSelector((state) => state.mail)

    const formikRef = useRef();


    useEffect(() => {
        if (isMailSendSuccess && submitSubscribe) {
            formikRef.current.resetForm({values: ''})
            setSuccess(true)
        }
        // eslint-disable-next-line
    }, [isMailSendSuccess])


    return (
        <div className='subscribe'>
            <div className='subscribe__wrap contain'>
                <div className='subscribe__block'>
                    <h3 className='subscribe__title'>Special Offer</h3>
                    <p className='subscribe__text'>Subscribe <br/> And <span className='subscribe__text subscribe__text--color'>Get 10% Off</span></p>
                    <Formik
                        innerRef={formikRef}
                        initialValues={{email: ''}}
                        validate={values => {
                            if (values.email && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
                                setMailError(false)
                            } else {
                                setMailError(true)
                                setSuccess(false)
                            }
                        }}
                        onSubmit={(values, {setSubmitting}) => {
                            dispatch(getMailFetch(values));
                            setSubmitting(false);
                            setSubmitSubscribe(true)
                        }}
                    >
                        {({
                              values,
                              handleChange,
                              handleBlur,
                              touched,
                              handleSubmit,
                          }) => (
                            <form className='subscribe__form' onSubmit={handleSubmit}>
                                <input
                                    data-test-id='main-subscribe-mail-field'
                                    className='subscribe__input'
                                    id='subscribe__input'
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
                                    disabled={mailError || success}
                                    className='subscribe__button'>
                                    {isMailError && touched.email && <p className='subscribe__error'>Ошибка при отправке почты</p>}
                                    {success && <p className='subscribe__success'>Почта отправлена успешно</p>}
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