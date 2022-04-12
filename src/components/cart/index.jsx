import React, {useState} from 'react';
import './cart.scss'
import cross from './img/x.svg'
import classNames from "classnames";
import {useSelector} from "react-redux";
import {Field, Form, Formik} from "formik";
import paypal from "../order/img/pay/paypal.png";
import visa from "../order/img/pay/visa.png";
import mastercard from "../order/img/pay/mastercard.png";
import Selected from "../selected";


const Cart = (props) => {

    const cart = useSelector(state => state.cart.cart)
    let clear = useSelector(state => state.cart.cart).length < 1;
    let total = 0
    cart.forEach((item) => {
        total = total + Math.round((item.price + parseInt(item.discount ?? 0) * (item.price / 100)) * item.quantity)
    })
    // из  state.cart достаю только name, size, color и quantity
    const productsFull = cart.map((item) => {
        return {name: item.name, size: item.size, color: item.color, quantity: item.quantity}
    })

    const [cartList, setCartList] = useState('goods')

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
                        deliveryMethod: "",
                        paymentMethod: "",
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
                        alert(JSON.stringify(values, null, 2));
                    }}
                >
                    {({
                          values,
                          handleSubmit,
                      }) => (
                        <Form id='form' onSubmit={handleSubmit}>


                            {cartList === 'delivery' && <div className='cart__wrap cart__contain'>
                                <div id="radio-group-delivery">Choose the method of delivery of the items</div>
                                <div role="group" aria-labelledby="radio-group-delivery">
                                    <label>
                                        <Field type="radio" name="deliveryMethod" value="pickup from post offices"/>
                                        Pickup from post offices
                                    </label>
                                    <label>
                                        <Field type="radio" name="deliveryMethod" value="express delivery"/>
                                        Express delivery
                                    </label>
                                    <label>
                                        <Field type="radio" name="deliveryMethod" value="store pickup"/>
                                        Store pickup
                                    </label>
                                    <div>Picked: {values.picked}</div>
                                </div>
                                <Field name="phone">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <input type="text" placeholder="+375  (__) _______" {...field} />
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>
                                <Field name="email">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <input type="text" placeholder="e-mail" {...field} />
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>
                                <Field name="country" as="select" className="my-select">
                                    <option value="Abkhazia">Abkhazia</option>
                                    <option value="Belarus">Belarus</option>
                                    <option value="Cyprus">Cyprus</option>
                                </Field>
                                <Field name="city" as="select" className="my-select">
                                    <option value="Minsk">Minsk</option>
                                    <option value="Оrsha">Оrsha</option>
                                </Field>
                                <Field name="street">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <input type="text" placeholder="Street" {...field} />
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>
                                <Field name="house">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <input type="text" placeholder="House" {...field} />
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
                                            <input type="text" placeholder="Apartment" {...field} />
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>
                                <Field name="postcode">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <input type="text" placeholder="BY______" {...field} />
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>
                                <Field name="storeAddress">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          /*
                                                                                form: {touched, errors}, // also values, setXXXX, handleXXXX, dirty, isValid, status, etc.
                                          */
                                          meta,
                                      }) => (
                                        <div>
                                            <input type="text" placeholder="Store address" {...field} />
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>
                                <label>
                                    <Field type="checkbox" name="agree"/>
                                    I agree to the processing of my personal information
                                </label>
                            </div>}

                            {cartList === 'pay' && <div className='cart__wrap cart__contain'>
                                <div id="paymentMethod">Method of payments</div>
                                <div role="group" aria-labelledby="paymentMethod">
                                    <label>
                                        <Field type="radio" name="paymentMethod" value="paypal"/>
                                        <img src={paypal} alt="paypal"/>
                                    </label>
                                    <label>
                                        <Field type="radio" name="paymentMethod" value="card"/>
                                        <img src={visa} alt="visa"/>
                                    </label>
                                    <label>
                                        <Field type="radio" name="paymentMethod" value="card"/>
                                        <img src={mastercard} alt="mastercard"/>
                                    </label>
                                    <label>
                                        <Field type="radio" name="paymentMethod" value="cash"/>
                                        Cash
                                    </label>
                                </div>
                                <Field name="cashEmail">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <input type="text" placeholder="e-mail" {...field} />
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>
                                <Field name="card">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <input type="text" placeholder="____ ____ ____ ____" {...field} />
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>
                                <Field name="cardDate">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <input type="text" placeholder="MM/YY" {...field} />
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>
                                <Field name="cardCVV">
                                    {({
                                          field, // { name, value, onChange, onBlur }
                                          meta,
                                      }) => (
                                        <div>
                                            <input type="text" placeholder="CVV" {...field} />
                                            {meta.touched && meta.error && (<div className="error">{meta.error}</div>)}
                                        </div>
                                    )}</Field>
                            </div>}


                            <div className='cart__payment cart__contain'><span className='cart__total'>Total</span><span className='cart__total--bold'> $ {total}</span></div>

                            <div className='cart__contain'>
                                {cartList === 'pay' && <button className='cart__button' type='submit' onClick={() => setTimeout(() => {
                                    setCartList('pay')
                                }, 500)}>CHECK OUT</button>}
                            </div>

                        </Form>
                    )}
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