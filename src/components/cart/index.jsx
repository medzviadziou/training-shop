import React, {useState} from 'react';
import './cart.scss'
import classNames from "classnames";
import {useDispatch, useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import cross from './img/x.svg'
import eye from './img/icon-eye.svg'
import paypal from "../order/img/pay/paypal.png";
import visa from "../order/img/pay/visa.png";
import mastercard from "../order/img/pay/mastercard.png";
import Selected from "../selected";
import {getOrderFetch} from "../../store/orderSlise";
import InputMask from "react-input-mask";
import {getCountriesFetch} from "../../store/countriesSlise";
import {getCitiesFetch} from "../../store/citiesSlise";
import check from "../filter/img/check.svg";


const Cart = (props) => {

    const cart = useSelector(state => state.cart.cart)
    let clear = useSelector(state => state.cart.cart).length < 1;
    const {countries, isCountriesFilled, isCountriesError} = useSelector((state) => state.countries)
    const {cities, isCitiesError} = useSelector((state) => state.cities)
    const isMessage = useSelector(state => state.order.isMessage)


    let getCitiFetch
    const getCity = (countryGet, cityGet) => {
        console.log(countryGet, cityGet)
        if (cityGet.length === 3 && getCitiFetch) {
            dispatch(getCitiesFetch({
                city: cityGet,
                country: countryGet
            }))
            getCitiFetch = false
        } else if (cityGet.length !== 3 && !getCitiFetch) {
            getCitiFetch = true
        }
    }

    let total = 0
    cart.forEach((item) => {
        total = total + Math.round((item.price + parseInt(item.discount ?? 0) * (item.price / 100)) * item.quantity)
    })
    // из  state.cart достаю только name, size, color и quantity
    const productsFull = cart.map((item) => {
        return {name: item.name, size: item.size, color: item.color, quantity: item.quantity}
    })

    const [cartList, setCartList] = useState('goods')
    const [checkedPay, setCheckedPay] = useState('visa')
    const [openEye, setOpenEye] = useState('false')
    const [isAgree, setIsAgree] = useState('false')

    function closeCart() {
        props.setCheckOpenCart(false)
        document.body.style.overflow = "";
    }

    function next() {
        if (cartList === 'goods') {
            setCartList('delivery')
        } else if (cartList === 'delivery') {
            setCartList('pay')
        }
    }

    function back() {
        if (cartList === 'goods') {
            closeCart()
        } else if (cartList === 'delivery') {
            setCartList('goods')
        } else if (cartList === 'pay') {
            setCartList('delivery')
        }
    }

    const dispatch = useDispatch()


    function validatePhone(value) {
        let error;
        if (value === "+375 (__)_______") {
            error = 'Поле должно быть заполнено';
        } else if (!value) {
            error = 'Поле должно быть заполнено';
        } else if (!/(\+375 )+\(+(29|25|44|33)+\)+(\d{7})$/i.test(value)) {
            error = 'Проверьте правильность введенных данных';
        }
        return error;
    }

    function validateEmail(value) {
        let error;
        if (!value) {
            error = 'Поле должно быть заполнено';
        } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,63}$/i.test(value)) {
            error = 'Проверьте правильность введенных данных';
        }
        return error;
    }

    function validatePostcode(value) {
        let error;
        if (!value) {
            error = 'Поле должно быть заполнено';
        } else if (!/^(BY)+[0-9]{6}$/i.test(value)) {
            error = 'Поле должно быть заполнено';
        }
        return error;
    }

    function validateExist(value) {
        let error;
        if (!value) {
            error = 'Поле должно быть заполнено';
        }
        return error;
    }

    function validateCites(value) {
        let error;
        if (!value) {
            error = 'Поле должно быть заполнено';
        } else if (!cities.map((item) => item.city).includes(value)) {
            error = 'В этом городе нет выдачи';
        }
        return error;
    }

    function validateCard(value) {
        let error;
        if (!value) {
            error = 'Поле должно быть заполнено';
        } else if (!/(\d{4})+\s+(\d{4})+\s+(\d{4})+\s+(\d{4})$/i.test(value)) {
            error = 'Поле должно быть заполнено';
        }
        return error;
    }

    function validateCardDate(value) {
        let error;
        if (!value) {
            error = 'Поле должно быть заполнено';
        } else if (!value.match(/^(0\d|1[0-2])\/\d{2}$/)) {
            error = 'Дата не верна';
        } else if (value.match(/^(0\d|1[0-2])\/\d{2}$/)) {
            const {0: month, 1: year} = value.split("/");
            const expiry = new Date("20" + year, month);
            const current = new Date();
            if (expiry.getTime() < current.getTime()) {
                error = 'Срок действия карты истек';
            }
        }
        return error;
    }

    function validateCardCVV(value) {
        let error;
        if (!value) {
            error = 'Поле должно быть заполнено';
        } else if (!/^[0-9]{3,4}$/i.test(value)) {
            error = 'СVV это 3 или 4 цифры';
        }
        return error;
    }

    function validateAgree(value) {
        let error;
        if (!value) {
            error = 'Вы должны согласиться на обработку личной информации';
        }
        return error;
    }

    return (
        <div className={classNames('cart', {'cart--open': props.checkOpenCart})}>
            <div className='cart__hidden' onClick={(closeCart)}> </div>
            <div data-test-id='cart' className='cart__block'>
                <header className='cart__header cart__contain'>
                    <div className='cart__title'>Shopping Cart</div>
                    <div onClick={(closeCart)} className='cart__cross'><img src={cross} alt=""/></div>
                </header>
                {cartList !== 'status' && <menu className='cart__menu cart__contain'>
                    <ul className='cart__list'>
                        <li className={classNames('cart__item', {'cart__item--active': cartList === 'goods'})}>Item in Cart</li>
                        <li className='cart__item cart__item--decor'>/</li>
                        <li className={classNames('cart__item', {'cart__item--active': cartList === 'delivery'})}>Delivery Info</li>
                        <li className='cart__item cart__item--decor'>/</li>
                        <li className={classNames('cart__item', {'cart__item--active': cartList === 'pay'})}>Payment</li>
                    </ul>
                </menu>}
                {cartList === 'status' && isMessage !== "success" && <div className='cart__status cart__contain'>
                    <div className='cart__text'>Sorry, your payment has not been processed.</div>
                    {isMessage === "request-error" &&<div className='cart__message'>Server request failed, please try again later</div>}
                    {isMessage === "underfunded" &&<div className='cart__message'>There are not enough funds to pay for the order</div>}
                    {isMessage === "bank-error" &&<div className='cart__message'>Failed to pay for the order, the problem is on the side of the bank</div>}
                    {isMessage === "timeout" &&<div className='cart__message'>Timed out request</div>}
                </div>}
                {cartList === 'status' && isMessage === "success" && <div className='cart__status cart__contain'>
                    <div className='cart__text'>Thank you for your order</div>
                    <div className='cart__message'>Information about your order will appear in your e-mail.</div>
                    <div className='cart__message'>Our manager will call you back.</div>
                </div>}


                {cartList === 'goods' && <div className='cart__selected cart__contain'>
                    <div className='cart__wrap'>
                        <div className={classNames('cart__text', {'cart__text--none': !clear})}>Sorry, your cart is empty</div>
                        {cart.map((cart, index) => {
                            return <Selected data-test-id='cart-card' cart={cart} key={index}/>
                        })}
                    </div>
                    {!clear && <div className='cart__payment'><span className='cart__total'>Total</span><span className='cart__total--bold'> $ {total}</span></div>}
                    {cartList === 'goods' && <button className={classNames('cart__button', {'cart__button--none': clear})} onClick={next} form="data">Further</button>}
                </div>}


                {cartList !== 'goods' && <Formik
                    initialValues={{
                        products: productsFull,
                        deliveryMethod: "pickup from post offices",
                        paymentMethod: "card",
                        totalPrice: total,
                        phone: "",
                        email: "",
                        country: "",
                        cashEmail: "",
                        city: "",
                        street: "",
                        house: "",
                        apartment: "",
                        postcode: "",
                        storeAddress: "",
                        card: "",
                        cardDate: "",
                        cardCVV: "",
                        agree: isAgree,
                    }}
                    onSubmit={(values) => {
                        console.log(values)
                        console.log("test")
                        dispatch(getOrderFetch(values))
                    }}
                >
                    {({
                          errors,
                          touched,
                          values,
                          handleSubmit,
                          validateForm,
                      }) => (
                        <Form id='form' onSubmit={handleSubmit} className='cart__form'>
                            {cartList === 'delivery' && <div className='cart__wrap cart__contain'>
                                <div className='cart__radio-group' role="group" aria-labelledby="radio-group-delivery">
                                    <div className='cart__radio-block'><span className='cart__radio-text'>Choose the method of delivery of the items</span></div>
                                    <div className='cart__radio-block'><label className='cart__label'>
                                        <Field className='cart__radio' type="radio" name="deliveryMethod" value="pickup from post offices" checked="checked"/>
                                        <span className='cart__check'> </span><span className='cart__radio-text'>Pickup from post offices</span>
                                    </label></div>
                                    <div className='cart__radio-block'><label className='cart__label'>
                                        <Field className='cart__radio' type="radio" name="deliveryMethod" value="express delivery"/>
                                        <span className='cart__check'> </span><span className='cart__radio-text'>Express delivery</span>
                                    </label></div>
                                    <div className='cart__radio-block'><label className='cart__label'>
                                        <Field className='cart__radio' type="radio" name="deliveryMethod" value="store pickup" onClick={() => !isCountriesFilled ? dispatch(getCountriesFetch()) : ""}/>
                                        <span className='cart__check'> </span><span className='cart__radio-text'>Store pickup</span>
                                    </label></div>
                                </div>
                                <h2 className='cart__h2'>PHONE</h2>
                                <Field name="phone" validate={validatePhone}>
                                    {({
                                          field,
                                      }) => (
                                        <div className='cart__block-relative'>
                                            <InputMask className={classNames('cart__input', {'cart__input--errors': errors.phone && touched.phone})} type="text" placeholder="+375 (__)_______" mask={values.phone !== "+375" ? "+375 (99)9999999" : ""} {...field} />
                                            {errors.phone && touched.phone && <div className='cart__errors'>{errors.phone}</div>}
                                        </div>
                                    )}</Field>
                                <h2 className='cart__h2'>e-mail</h2>
                                <Field name="email" validate={validateEmail}>
                                    {({
                                          field,
                                      }) => (
                                        <div className='cart__block-relative'>
                                            <input className={classNames('cart__input', {'cart__input--errors': errors.email && touched.email})} type="text" placeholder="e-mail" {...field} />
                                            {errors.email && touched.email && <div className='cart__errors'>{errors.email}</div>}
                                        </div>
                                    )}</Field>
                                <h2 className='cart__h2'>ADRESS {values.deliveryMethod === "store pickup" ? "OF STORE" : ""}</h2>
                                {values.deliveryMethod !== "store pickup" && <Field name="country" validate={validateExist}>
                                    {({
                                          field,
                                      }) => (
                                        <div className='cart__block-relative'>
                                            <input className={classNames('cart__input', {'cart__input--errors': errors.country && touched.country})} type="text" placeholder="Country" {...field} />
                                            {errors.country && touched.country && <div className='cart__errors'>{errors.country}</div>}
                                        </div>
                                    )}</Field>}
                                {values.deliveryMethod === "store pickup" && <Field name="country" as="select" validate={validateExist}>
                                    {({
                                          field
                                      }) => (
                                        <div className='cart__block-relative'>
                                            <select className={classNames('cart__input', {'cart__input--errors': errors.country && touched.country})}   {...field}>
                                                {countries.map((item) => {
                                                    return <option key={item._id} value={item.name}>{item.name}</option>
                                                })}
                                            </select>
                                            {!isCountriesError && errors.country && touched.country && <div className='cart__errors'>{errors.country}</div>}
                                            {isCountriesError && <div className='cart__errors'>Ошибка загрузки данных</div>}
                                        </div>
                                    )}</Field>}
                                {values.deliveryMethod !== "store pickup" && <Field name="city" className='cart__input' validate={validateExist}>
                                    {({
                                          field,
                                      }) => (
                                        <div className='cart__block-relative'>
                                            <input className={classNames('cart__input', {'cart__input--errors': errors.city && touched.city})} type="text" placeholder="City" {...field} />
                                            {errors.city && touched.city && <div className='cart__errors'>{errors.city}</div>}
                                        </div>
                                    )}</Field>}
                                {values.deliveryMethod !== "store pickup" && <Field name="street" validate={validateExist}>
                                    {({
                                          field,
                                      }) => (
                                        <div className='cart__block-relative'>
                                            <input className={classNames('cart__input', {'cart__input--errors': errors.street && touched.street})} type="text" placeholder="Street" {...field} />
                                            {errors.street && touched.street && <div className='cart__errors'>{errors.street}</div>}
                                        </div>
                                    )}</Field>}
                                {values.deliveryMethod !== "store pickup" && <div className='cart__input-block'>
                                    <Field name="house" validate={validateExist}>
                                        {({
                                              field,
                                          }) => (
                                            <div className='cart__block-relative'>
                                                <input className={classNames('cart__input', {'cart__input--errors': errors.house && touched.house})} type="text" placeholder="House" {...field} />
                                                {errors.house && touched.house && <div className='cart__errors'>{errors.house}</div>}
                                            </div>
                                        )}</Field>
                                    <Field name="apartment">
                                        {({
                                              field, meta,
                                          }) => (
                                            <div>
                                                <input className='cart__input' type="text" placeholder="Apartment" {...field} />
                                                {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                            </div>
                                        )}</Field>
                                </div>}
                                {values.deliveryMethod === "pickup from post offices" && <h2 className='cart__h2'>POSTCODE</h2>}
                                {values.deliveryMethod === "pickup from post offices" && <Field name="postcode" validate={validatePostcode}>
                                    {({
                                          field,
                                      }) => (
                                        <div className='cart__block-relative'>
                                            <InputMask className={classNames('cart__input', {'cart__input--errors': errors.postcode && touched.postcode})} type="text" placeholder="BY______" mask={values.postcode !== "BY" ? "BY999999" : ""} {...field} />
                                            {errors.postcode && touched.postcode && <div className='cart__errors'>{errors.postcode}</div>}
                                        </div>
                                    )}</Field>}
                                {values.deliveryMethod === "store pickup" && <Field name="storeAddress" validate={validateCites}>
                                    {({
                                          field,
                                      }) => (
                                        <div className='cart__block-relative'>
                                            <input onChange={getCity(values.country, values.storeAddress)} list='list-store-address' className={classNames('cart__input', {'cart__input--errors': errors.storeAddress && touched.storeAddress})} type="text" placeholder="Store address" {...field} disabled={!touched.country}/>
                                            <datalist id="list-store-address">
                                                {cities.map((item) => {
                                                    return <option key={item._id} value={item.city}>{item.city}</option>
                                                })}
                                            </datalist>
                                            {!isCitiesError && errors.storeAddress && touched.storeAddress && <div className='cart__errors'>{errors.storeAddress}</div>}
                                            {isCitiesError && touched.storeAddress && <div className='cart__errors'>Ошибка загрузки данных</div>}
                                        </div>
                                    )}</Field>}
                                <Field name="agree" validate={validateAgree(values.agree)}>
                                    {({
                                          field,
                                      }) => (
                                        <div className='cart__block-relative'>
                                            <label className='cart__agree'>
                                                <input className='cart__check-input' type="checkbox" checked={!isAgree} onClick={() => setIsAgree(!isAgree)}  {...field} />
                                                <span className={classNames('cart__check-box', {'cart__check-box--error': isAgree && touched.agree})}><img className='cart__check' src={check} alt=""/></span>
                                                <div className='cart__radio-text'>I agree to the processing of my personal information</div>
                                            </label>
                                            {isAgree && touched.agree && <div className='cart__errors'>Вы должны согласиться на обработку личной информации</div>}
                                        </div>

                                    )}</Field>
                                <br/>
                                <br/>
                            </div>}

                            {cartList === 'pay' && <div className='cart__wrap cart__contain'>

                                <div className='cart__radio-group' role="group" aria-labelledby="radio-group-paymentMethod">
                                    <div className='cart__radio-block'><span className='cart__radio-text'>Method of payments</span></div>
                                    <div className='cart__radio-block'>
                                        <label className='cart__label'>
                                            <Field className='cart__radio' checked={checkedPay === "paypal"} type="radio" name="paymentMethod" value="paypal" onClick={() => setCheckedPay("paypal")}/>
                                            <span className='cart__check'> </span><img src={paypal} alt="paypal"/>
                                        </label>
                                    </div>
                                    <div className='cart__radio-block'>
                                        <label className='cart__label'>
                                            <Field className='cart__radio' checked={checkedPay === "visa"} type="radio" name="paymentMethod" value="card" onClick={() => setCheckedPay("visa")}/>
                                            <span className='cart__check'> </span><img src={visa} alt="visa"/>
                                        </label>
                                    </div>
                                    <div className='cart__radio-block'>
                                        <label className='cart__label'>
                                            <Field className='cart__radio' checked={checkedPay === "mastercard"} type="radio" name="paymentMethod" value="card" onClick={() => setCheckedPay("mastercard")}/>
                                            <span className='cart__check'> </span><img src={mastercard} alt="mastercard"/>
                                        </label>
                                    </div>
                                    <div className='cart__radio-block'>
                                        <label className='cart__label'>
                                            <Field className='cart__radio' checked={checkedPay === "cash"} type="radio" name="paymentMethod" value="cash" onClick={() => setCheckedPay("cash")}/>
                                            <span className='cart__check'> </span><span className='cart__radio-text'>Cash</span>
                                        </label>
                                    </div>
                                </div>

                                {checkedPay === "paypal" && <h2 className='cart__h2'>e-mail</h2>}
                                {checkedPay === "paypal" && <Field name="cashEmail" validate={validateEmail}>
                                    {({
                                          field,
                                      }) => (
                                        <div className='cart__block-relative'>
                                            <input className={classNames('cart__input', {'cart__input--errors': errors.cashEmail && touched.cashEmail})} type="text" placeholder="e-mail" {...field} />
                                            {errors.cashEmail && touched.cashEmail && <div className='cart__errors'>{errors.cashEmail}</div>}
                                        </div>
                                    )}</Field>}
                                {checkedPay !== "cash" && checkedPay !== "paypal" && <h2 className='cart__h2'>card</h2>}
                                {checkedPay !== "cash" && checkedPay !== "paypal" && <Field name="card" validate={validateCard}>
                                    {({
                                          field,
                                      }) => (
                                        <div className='cart__block-relative'>
                                            <InputMask className={classNames('cart__input', {'cart__input--errors': errors.card && touched.card})} type="text" placeholder="____ ____ ____ ____" mask={values.card !== "" ? "9999 9999 9999 9999" : ""} {...field} />
                                            {errors.card && touched.card && <div className='cart__errors'>{errors.card}</div>}
                                        </div>
                                    )}</Field>}
                                {values.paymentMethod === "card" && <div className='cart__input-block'>
                                    <Field name="cardDate" validate={validateCardDate}>
                                        {({
                                              field,
                                          }) => (
                                            <div className='cart__block-relative'>
                                                <InputMask className={classNames('cart__input', {'cart__input--errors': errors.cardDate && touched.cardDate})} type="text" placeholder="MM/YY" mask={values.cardDate !== "" ? "99/99" : ""} {...field} />
                                                {errors.cardDate && touched.cardDate && <div className='cart__errors'>{errors.cardDate}</div>}
                                            </div>
                                        )}</Field>
                                    <Field name="cardCVV" validate={validateCardCVV}>
                                        {({
                                              field,
                                          }) => (
                                            <div className='cart__block-relative'>
                                                <input className={classNames('cart__input', {'cart__input--errors': errors.cardCVV && touched.cardCVV})} type={openEye ? "password" : "text"} placeholder="CVV" {...field}/>
                                                <img className='cart__eye' src={eye} alt="" onClick={() => setOpenEye(!openEye)}/>
                                                {errors.cardCVV && touched.cardCVV && <div className='cart__errors'>{errors.cardCVV}</div>}
                                            </div>
                                        )}</Field>
                                </div>}
                            </div>}
                            {cartList !== 'status' && <div className='cart__payment cart__contain'><span className='cart__total'>Total</span><span className='cart__total--bold'> $ {total}</span></div>}
                            <div className='cart__contain'>
                                {cartList === 'delivery' && <button className={classNames('cart__button', {'cart__button--none': clear})} onClick={() => {
                                    touched.phone = true
                                    touched.email = true
                                    touched.country = true
                                    touched.city = true
                                    touched.street = true
                                    touched.house = true
                                    touched.apartment = true
                                    touched.postcode = true
                                    touched.storeAddress = true
                                    validateForm().then(console.log(Object.keys(errors).length === 0))
                                    if (!isAgree) {
                                        if (Object.keys(errors).length !== 0) {
                                            setIsAgree(!isAgree)
                                        } else if (Object.keys(errors).length === 0) {
                                            next()
                                        }
                                    }

                                }} form="data">Further</button>}
                                {cartList === 'pay' && values.paymentMethod !== "cash" && <button className='cart__button' type='submit' onClick={() => {
                                    if (Object.keys(errors).length === 0) {
                                        setCartList('status');
                                        handleSubmit()
                                    }
                                }}>CHECK OUT</button>}
                                {cartList === 'pay' && values.paymentMethod === "cash" && <button className='cart__button' type='submit' onClick={() => {
                                    if (Object.keys(errors).length === 0) {
                                        setCartList('status');
                                        handleSubmit()
                                    }
                                }}>READY</button>}
                            </div>

                        </Form>)}
                </Formik>}

                <div className='cart__contain'>
                    {cartList === 'status' && isMessage !== "success" &&<button className='cart__button cart__button--back' onClick={() => setCartList('pay')}>BACK TO PAYMENT</button>}
                    {cartList === 'status' && isMessage !== "success" &&<button className='cart__button cart__button--light' onClick={() => setCartList('goods')}>View Cart</button>}
                    {cartList === 'status' && isMessage === "success" &&<button  className='cart__button cart__button--back' onClick={(closeCart)}>BACK TO SHOPPING</button>}
                    <button className={classNames('cart__button cart__button--back', {'cart__button--none': !clear})} onClick={(closeCart)}>BACK TO SHOPPING</button>
                    {cartList !== 'status' && <button className={classNames('cart__button cart__button--light', {'cart__button--none': clear})} onClick={(back)}>View Cart</button>}
                </div>
            </div>
        </div>
    );
};

export default Cart;