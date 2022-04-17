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


const Cart = (props) => {

    const cart = useSelector(state => state.cart.cart)
    let clear = useSelector(state => state.cart.cart).length < 1;
    const {countries, isCountriesFilled, /*isCountriesLoading*/} = useSelector((state) => state.countries)
    const cities = useSelector(state => state.cities.cities)

    const getCity =(countryGet, cityGet)=>{
        if (cityGet.length===3){
            dispatch(getCitiesFetch({
                city:cityGet,
                country: countryGet
            }))
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


    return (
        <div className={classNames('cart', {'cart--open': props.checkOpenCart})}>
            <div className='cart__hidden' onClick={(closeCart)}> </div>
            <div data-test-id='cart' className='cart__block'>
                <header className='cart__header cart__contain'>
                    <div className='cart__title'>Shopping Cart</div>
                    <div onClick={(closeCart)} className='cart__cross'><img src={cross} alt=""/></div>
                </header>
                <menu className='cart__menu cart__contain'>
                    <ul className='cart__list'>
                        <li className={classNames('cart__item', {'cart__item--active': cartList === 'goods'})}>Item in Cart</li>
                        <li className='cart__item cart__item--decor'>/</li>
                        <li className={classNames('cart__item', {'cart__item--active': cartList === 'delivery'})}>Delivery Info</li>
                        <li className='cart__item cart__item--decor'>/</li>
                        <li className={classNames('cart__item', {'cart__item--active': cartList === 'pay'})}>Payment</li>
                    </ul>
                </menu>


                {cartList === 'goods' && <div className='cart__selected cart__contain'>
                    <div className='cart__wrap'>
                        <div className={classNames('cart__text', {'cart__text--none': !clear})}>Sorry, your cart is empty</div>
                        {cart.map((cart, index) => {
                            return <Selected data-test-id='cart-card' cart={cart} key={index}/>
                        })}
                    </div>
                    {!clear && <div className='cart__payment'><span className='cart__total'>Total</span><span className='cart__total--bold'> $ {total}</span></div>}
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
                        cardCVV: ""
                    }}
                    onSubmit={(values) => {
                        dispatch(getOrderFetch(values))
                    }}
                >
                    {({
                          touched,
                          values,
                          handleSubmit,
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
                                <Field name="phone">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <InputMask className='cart__input' type="text" placeholder="+375(__)_______" mask={values.phone !== "+375" ? "+375 (99)999 99 99" : ""} {...field} />
                                            {meta.touched && meta.error && <div className="cart__error">{meta.error}</div>}
                                        </div>
                                    )}</Field>
                                <h2 className='cart__h2'>e-mail</h2>
                                <Field name="email">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <input className='cart__input' type="text" placeholder="e-mail" {...field} />
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>
                                <h2 className='cart__h2'>ADRESS {values.deliveryMethod === "store pickup" ? "OF STORE" : ""}</h2>
                                {values.deliveryMethod !== "store pickup" && <Field name="country">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <input className='cart__input' type="text" placeholder="Country" {...field} />
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>}
                                {values.deliveryMethod === "store pickup" && <Field name="country" className='cart__input'>
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                                                               }) => (
                                        <div>
                                            <input list='list-country' className='cart__input' type="text" placeholder="Country" {...field}/>
                                            <datalist id="list-country">
                                                {countries.map((item) => {
                                                    return <option key={item._id} value={item.name}>{item.name}</option>
                                                })}
                                            </datalist>
                                        </div>
                                    )}</Field>}
                                {values.deliveryMethod !== "store pickup" && <Field name="city" className='cart__input' as="select">
                                    <option value="Minsk">Minsk</option>
                                    <option value="Оrsha">Оrsha</option>
                                </Field>}
                                {values.deliveryMethod !== "store pickup" && <Field name="street">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <input className='cart__input' type="text" placeholder="Street" {...field} />
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>}
                                {values.deliveryMethod !== "store pickup" && <div className='cart__input-block'>
                                    <Field name="house">
                                        {({
                                              field, // { name, value, onChange, onBlur }
                                              meta,
                                          }) => (
                                            <div>
                                                <input className='cart__input' type="text" placeholder="House" {...field} />
                                                {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                            </div>
                                        )}</Field>
                                    <Field name="apartment">
                                        {({
                                              field, // { name, value, onChange, onBlur }
                                              /*
                                                                                    form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                              */
                                              meta,
                                          }) => (
                                            <div>
                                                <input className='cart__input' type="text" placeholder="Apartment" {...field} />
                                                {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                            </div>
                                        )}</Field>
                                </div>}
                                {values.deliveryMethod === "pickup from post offices" && <h2 className='cart__h2'>POSTCODE</h2>}
                                {values.deliveryMethod === "pickup from post offices" && <Field name="postcode">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <InputMask className='cart__input' type="text" placeholder="BY______" mask={values.postcode !== "BY" ? "BY 999999" : ""} {...field} />
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>}
                                {values.deliveryMethod === "store pickup" && <Field name="storeAddress">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <input list='list-store-address' className='cart__input' type="text" placeholder="Store address" {...field} disabled={!touched.country} onClick={getCity(values.country ,values.storeAddress)}/>
                                            <datalist id="list-store-address">
                                                {cities.map((item) => {
                                                    return <option key={item._id} value={item.city}>{item.city}</option>
                                                })}
                                            </datalist>
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>}
                                <label>
                                    <Field type="checkbox" name="agree" className='cart__radio-text'/>
                                    I agree to the processing of my personal information
                                </label>
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

                                {values.paymentMethod === "paypal" && <h2 className='cart__h2'>e-mail</h2>}
                                {values.paymentMethod === "paypal" && <Field name="cashEmail">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <input className='cart__input' type="text" placeholder="e-mail" {...field} />
                                            {meta.touched && meta.error && <div className="cart__error">{meta.error}</div>}
                                        </div>
                                    )}</Field>}
                                {values.paymentMethod === "card" && <h2 className='cart__h2'>card</h2>}
                                {values.paymentMethod === "card" && <Field name="card">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <InputMask className='cart__input' type="text" placeholder="____ ____ ____ ____" mask={values.card !== "" ? "9999 9999 9999 9999" : ""} {...field} />
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>}
                                {values.paymentMethod === "card" && <div className='cart__input-block'>
                                    <Field name="cardDate">
                                        {({
                                              field, // { name, value, onChange, onBlur }
                                              meta,
                                          }) => (
                                            <div>
                                                <InputMask className='cart__input' type="text" placeholder="MM/YY" mask={values.cardDate !== "" ? "99/99" : ""} {...field} />
                                                {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                            </div>
                                        )}</Field>
                                    <Field name="cardCVV">
                                        {({
                                              field, // { name, value, onChange, onBlur }
                                              meta,
                                          }) => (
                                            <div className='cart__block-relative'>
                                                <input className='cart__input' type={openEye ? "password" : "text"} placeholder="CVV" {...field}/>
                                                <img className='cart__eye' src={eye} alt="" onClick={() => setOpenEye(!openEye)}/>

                                                {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                            </div>
                                        )}</Field>
                                </div>}
                            </div>}


                            <div className='cart__payment cart__contain'><span className='cart__total'>Total</span><span className='cart__total--bold'> $ {total}</span></div>

                            <div className='cart__contain'>
                                {cartList === 'pay' && <button className='cart__button' type='submit' onClick={() => setTimeout(() => {
                                    setCartList('pay')
                                }, 500)}>CHECK OUT</button>}
                            </div>

                        </Form>)}
                </Formik>}

                <div className='cart__contain'>
                    {cartList !== 'pay' && <button className={classNames('cart__button', {'cart__button--none': clear})} onClick={(next)} form="data">Further</button>}
                    <button className={classNames('cart__button cart__button--light', {'cart__button--none': clear})} onClick={(back)}>View Cart</button>
                    <button className={classNames('cart__button cart__button--back', {'cart__button--none': !clear})} onClick={(closeCart)}>BACK TO SHOPPING</button>
                </div>
            </div>
        </div>
    );
};

export default Cart;