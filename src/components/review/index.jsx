import React, {useEffect, useState} from 'react';
import './review.scss'
import starGray from "../cards/img/ico/star_gray.svg";
import starGold from "../cards/img/ico/star_gold.svg";
import {Formik} from "formik";
import Donut from "../donut";
import {useDispatch, useSelector} from "react-redux";
import {getReviewFetch} from "../../store/reviewSlice";


const Review = (props) => {
    const [reviewRating, setReviewRating] = useState(1)
    const choseReviewRating = (e) => {
        if (e.target.name) {
            setReviewRating(e.target.name)
        }
    }

    const star = [starGray, starGray, starGray, starGray, starGray,]
    let i = reviewRating
    while (i > 0) {
        star.push(starGold)
        star.shift()
        i = i - 1
    }

    const size = 20

    const [mailError, setMailError] = useState(true)

    function closeReview() {
        props.setCheckOpenReview(false)
        document.body.style.overflow = "";
    }

    const dispatch = useDispatch()

    const {isReviewLoading, isReviewSendSuccess, isReviewError} = useSelector((state) => state.review)

    let [closeSuccess, setCloseSuccess]=useState(false)

    useEffect(() => {
        // eslint-disable-next-line
        setCloseSuccess(closeSuccess = isReviewSendSuccess)
        // eslint-disable-next-line
        if (closeSuccess){
            closeReview()
        }
    }, [isReviewSendSuccess])

    return (
        <div className='review' data-test-id='review-modal'>
            <div className='review__hidden' onClick={(closeReview)}> </div>
            <div className='review__block'>
                <h2 className='review__title'>Write a review</h2>
                <div className='review__rating' onClick={choseReviewRating}>
                    <img className='review__star' name='1' src={star[4]} alt="" width={size} height={size}/>
                    <img className='review__star' name='2' src={star[3]} alt="" width={size} height={size}/>
                    <img className='review__star' name='3' src={star[2]} alt="" width={size} height={size}/>
                    <img className='review__star' name='4' src={star[1]} alt="" width={size} height={size}/>
                    <img className='review__star' name='5' src={star[0]} alt="" width={size} height={size}/>
                </div>
                <div className='review__wrap'>
                    <Formik
                        initialValues={{
                            id: props.id,
                            name: '',
                            text: '',
                            rating: reviewRating,
                        }}
                        validate={values => {
                            if (values.name && values.text) {
                                setMailError(false)
                            } else {
                                setMailError(true)
                            }
                        }}
                        onSubmit={(values) => {
                            values.rating = reviewRating
                            dispatch(getReviewFetch(values))
                        }}
                    >
                        {({
                              values,
                              handleChange,
                              handleBlur,
                              handleSubmit,
                          }) => (
                            <form className='review__form' onSubmit={handleSubmit}>
                                <input
                                    data-test-id='review-name-field'
                                    className='review__input'
                                    placeholder='Имя'
                                    type="text"
                                    name="name"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.name}
                                />
                                <textarea
                                    data-test-id='review-text-field'
                                    className='review__input review__input--text'
                                    placeholder='Комментарий'
                                    name="text"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                    value={values.text}
                                />
                                <button data-test-id='review-submit-button' type='submit' disabled={mailError} className='review__button'>
                                    {isReviewError && <p className='review__error'>Ошибка при отправке отзыва</p>}
                                    {isReviewLoading && <div className='review__donut'><Donut/></div>}
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