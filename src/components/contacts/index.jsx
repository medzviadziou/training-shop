import React, {useEffect, useState} from 'react';
import Social from "../social";
import './contacts.scss'
import Donut from "../donut";
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {getMailFetch} from "../../store/mailSlise";


const Contacts = () => {

    const [mailError, setMailError] = useState(true)

    const dispatch = useDispatch()

    const {isMailLoading, isMailSendSuccess, isMailError} = useSelector((state) => state.mail)

    useEffect(() => {
        if (isMailSendSuccess === true) {
            document.getElementById("contacts__input").value = "";
        }
    }, [isMailSendSuccess])

    return (
        <div className='contacts'>
            <div className='contacts__wrap contain'>
                <h2 className="contacts__title">BE IN TOUCH WITH US:</h2>

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
                      }) => (
                        <form className='contacts__form' onSubmit={handleSubmit}>
                            <input
                                data-test-id='footer-mail-field'
                                className='contacts__input'
                                id='contacts__input'
                                placeholder='Enter your email'
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <button data-test-id='footer-subscribe-mail-button' type='submit' disabled={mailError} className='contacts__button'>
                                {isMailError && touched.email && <p className='contacts__error'>Ошибка при отправке почты</p>}
                                {isMailSendSuccess && touched.email && <p className='contacts__success'>Почта отправлена успешно</p>}
                                {isMailLoading && touched.email && <div className='contacts__donut'><Donut/></div>}
                                <div className='contacts__button-text'>Join Us</div>
                            </button>
                        </form>
                    )}
                </Formik>
                <div className='contacts__social'><Social size='18'/></div>
            </div>
        </div>
    );
};

export default Contacts;