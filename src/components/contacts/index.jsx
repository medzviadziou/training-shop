import React, {useState} from 'react';
import Social from "../social";
import './contacts.scss'
import Donut from "../donut";
import {Formik} from "formik";


const Contacts = () => {
    let error = false

    const [mailError, setMailError] = useState(true)

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
                        <form className='contacts__form' onSubmit={handleSubmit}>
                            <input
                                className='contacts__input'
                                placeholder='Enter your email'
                                type="email"
                                name="email"
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                            />
                            <button type='submit' disabled={mailError} className='contacts__button'>
                                {!error && values.mail && <p className='contacts__error'>Ошибка при отправке почты</p>}
                                {error && <p className='contacts__success'>Почта отправлена успешно</p>}
                                {isSubmitting && <div className='contacts__donut'><Donut/></div>}
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