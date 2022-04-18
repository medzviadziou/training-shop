import React, {useEffect, useRef, useState} from 'react';
import Social from "../social";
import './contacts.scss'
import Donut from "../donut";
import {Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {getMailFetch} from "../../store/mailSlise";


const Contacts = () => {

    const [mailError, setMailError] = useState(true)
    const [successMail, setSuccessMail] = useState(false)
    const [submitMail, setSubmitMail] = useState(false)

    const dispatch = useDispatch()

    const {isMailLoading, isMailSendSuccess, isMailError} = useSelector((state) => state.mail)

    const formikRef = useRef();


    useEffect(() => {
        if (isMailSendSuccess && submitMail) {
            formikRef.current.resetForm({values: ''})
            setSuccessMail(true)
        }
        // eslint-disable-next-line
    }, [isMailSendSuccess])

    return (
        <div className='contacts'>
            <div className='contacts__wrap contain'>
                <h2 className="contacts__title">BE IN TOUCH WITH US:</h2>

                <Formik
                    innerRef={formikRef}
                    initialValues={{mail: ''}}
                    validate={values => {
                        if (values.mail && /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.mail)) {
                            setMailError(false)
                        } else {
                            setMailError(true)
                            setSuccessMail(false)
                        }
                    }}
                    onSubmit={(values, {setSubmitting}) => {
                        dispatch(getMailFetch(values));
                        setSubmitting(false);
                        setSubmitMail(true)
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
                                name="mail"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <button data-test-id='footer-subscribe-mail-button' type='submit' disabled={mailError || successMail} className='contacts__button'>
                                {isMailError && touched.mail && <p className='contacts__error'>Ошибка при отправке почты</p>}
                                {successMail && <p className='contacts__success'>Почта отправлена успешно</p>}
                                {isMailLoading && touched.mail && <div className='contacts__donut'><Donut/></div>}
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