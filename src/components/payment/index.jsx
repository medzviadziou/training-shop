import React from 'react';
import './payment.scss'
import Total from "../total";
import {Field, Form, Formik} from "formik";
import paypal from '../order/img/pay/paypal.png'
import visa from '../order/img/pay/visa.png'
import mastercard from '../order/img/pay/mastercard.png'


const Payment = () => {
    return (
        <div className='payment'>
            <Formik
                initialValues={{
                    deliveryMethod: '',
                    phone: '',
                    email: '',
                    country: '',
                    city: '',
                    street: '',
                    house: '',
                    apartment: '',
                }}
                onSubmit={(values) => {
                    alert(JSON.stringify(values, null, 2));
                }}
            >
                {({
                                          handleSubmit,
                  }) => (
                    <Form id='form' onSubmit={handleSubmit}>
                        <div className='payment__wrap'>
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

                        </div>
                        <Total total='100'/>
                        <button className='payment__button'>CHECK OUT </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Payment;