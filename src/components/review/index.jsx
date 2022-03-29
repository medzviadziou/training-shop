import React, {useState} from 'react';
import './review.scss'
import starGray from "../cards/img/ico/star_gray.svg";
import starGold from "../cards/img/ico/star_gold.svg";
import {Formik} from "formik";
import Donut from "../donut";

const Review = () => {
    const star = [starGray, starGray, starGray, starGray, starGray,]
    let i = 1
    while (i > 0) {
        star.push(starGold)
        star.shift()
        i = i - 1
    }
    const size = 20

    let error = false

    const [mailError, setMailError] = useState(true)

    return (
        <div className='review'>
            <div className='review__hidden'> </div>
            <div className='review__block'>
                <h2 className='review__title'>Write a review</h2>
                <div className='review__rating'>
                    <img className='review__star' src={star[4]} alt="" width={size} height={size}/>
                    <img className='review__star' src={star[3]} alt="" width={size} height={size}/>
                    <img className='review__star' src={star[2]} alt="" width={size} height={size}/>
                    <img className='review__star' src={star[1]} alt="" width={size} height={size}/>
                    <img className='review__star' src={star[0]} alt="" width={size} height={size}/>
                </div>
                <div className='review__wrap'>
                    <Formik
                        initialValues={{name: '', text: ''}}
                        validate={values => {
                            if (values.name || values.text) {
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
                            <form className='review__form' onSubmit={handleSubmit}>
                                <input
                                    className='review__input'
                                    placeholder='Имя'
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <textarea
                                    className='review__input review__input--text'
                                    placeholder='Комментарий'
                                        name="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.text}
                                />
                                <button type='submit' disabled={mailError} className='review__button'>
                                    {!error && values.mail && <p className='review__error'>Ошибка при отправке почты</p>}
                                    {error && <p className='review__success'>Почта отправлена успешно</p>}
                                    {isSubmitting && <div className='review__donut'><Donut/></div>}
                                    <div className='review__button-text'>Send</div>
                                </button>
                            </form>
                        )}
                    </Formik>
                </div>
            </div>
        </div>
    );
};

export default Review;