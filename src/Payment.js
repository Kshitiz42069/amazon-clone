/* eslint-disable no-template-curly-in-string */
import React, { useEffect, useState } from 'react'
import './Payment.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { Link, useNavigate } from 'react-router-dom';
import { CardElement,useElements, useStripe } from '@stripe/react-stripe-js';
import CurrencyFormat from 'react-currency-format';
import { getBasketTotal } from './reducer';
import instance from './axios';

function Payment() {
    const history = useNavigate();
    const [{basket, user}, dispatch] = useStateValue();
    const stripe = useStripe();
    const elements = useElements();
    const [succeeded,setSucceeded] = useState(false);
    const [processing, setProcessing] = useState(""); 
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [clientsecret , setClientSecret] = useState(true);

    useEffect(() => {
        const getclientsecret= async () =>{
            const response = await instance({
                method:'post',
                // Stripe expects the total in a currency subunits
                url: `/payments/create`,
                data: getBasketTotal(basket) * 100
            });
            setClientSecret(response.data.clientsecret)
        }
        getclientsecret();
    },[basket])
    const handleSubmit = async(event) =>{
        // fancy stripe
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientsecret,{
            payment_method:{
                card:elements.getElement(CardElement)
            }
        }).then(({paymentIntent }) =>{
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history('/orders');
        })
    }
    const handleChange = e => {
        setDisabled(e.empty);
        setError(e.error ? e.error.message : "");
    }
  return (
    <div className='payment'>
        <div className="payment_container">
            <h1>
                Checkout (<Link to="/Checkout">{basket?.length} items</Link>)
            </h1>
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Delivery Address</h3>
                </div>
                <div className="payment_address">
                    <p>{user?.email}</p>
                    <p>123 Lane</p>
                    <p>XYZ street</p>
                    <p>New Delhi, India</p>
                </div>
            </div>
            {/* review item */}
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Review items and Delivery</h3>
                </div>
                <div className="payment_items">
                    {basket.map(item =>(
                        <CheckoutProduct
                            id={item.id}
                            title= {item.title}
                            image= {item.image}
                            price= {item.price}
                            rating= {item.rating}
                        />
                    ))}
                </div>
            </div>
            {/* payment method */}
            <div className="payment_section">
                <div className="payment_title">
                    <h3>Payment Method</h3>
                </div>
                <div className="payment_details">
                    {/* Stripe magic will go */}
                    <form onSubmit={handleSubmit}>
                        <CardElement onChange={handleChange}/>
                        <div className="payment_priceContainer">
                            <CurrencyFormat
                                renderText={(value)=>(
                                    <>
                                        <h3>Order Total:{value}</h3>
                                    </>
                                )}
                                decimalScale={2}
                                value={getBasketTotal(basket)}
                                displayType={"text"}
                                thousandSepratoe={true}
                                prefix={"₹"}
                            />
                            <button disabled={processing||disabled||succeeded}>
                                <span>
                                    {processing ? <p> Processing</p>:"Buy Now"}
                                </span>
                            </button>
                        </div>
                        {error && <div>{error}</div>}
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Payment