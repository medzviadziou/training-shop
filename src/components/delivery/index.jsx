import React from 'react';
import './delivery.scss'
import {Field, Form, Formik} from "formik";
import Total from "../total";


const Delivery = (props) => {


    return (
        <div className='delivery'>
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
                      values,
                      handleSubmit,
                  }) => (
                    <Form id='form' onSubmit={handleSubmit}>
                        <div className='delivery__wrap'>
                            <div id="my-radio-group">Choose the method of delivery of the items</div>
                            <div role="group" aria-labelledby="my-radio-group">
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
                            <label>
                                <Field type="checkbox" name="agree"/>
                                I agree to the processing of my personal information
                            </label>
                        </div>
                        <Total total='100'/>
                        <button className='delivery__button' type='submit' onClick={() => setTimeout(() => {
                            props.setCartList('pay')
                        }, 500)}>Further
                        </button>
                    </Form>
                )}
            </Formik>
        </div>
    );
};

export default Delivery;