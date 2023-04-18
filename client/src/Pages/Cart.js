
import React, { useState, useEffect } from 'react';
import CartItem from '../Components/cartItem';
import axios from 'axios';

function Cart(props)
{
    const [address, setAddress ] = useState("");
    const [ cart, setCart ] = useState([]);
    const [ total, setTotal ] =useState(0);
    const [ flag, setFlag ] = useState(0);

    useEffect(()=> {
        let b = 0;

        if(cart)
        {
            cart.forEach((item) => {
                b = b+(item.count*item.price);
            })
        }

        setTotal(b);
    },[cart])

    useEffect(()=>{

        axios.get("http://localhost:5000/get-cart", {
            params : {
                email : props.user
            }
        })
        .then(res => {
            setCart(res.data.cart);
        })

        axios.get("http://localhost:5000/get-address", {
            params : {
                email : props.user
            }
        })
        .then(res => {
            setAddress(res.data.address);
        })
    },[flag,props.user])

    const setflag = () => {

        if(flag)
        {
            setFlag(0);
        }
        else
        {
            setFlag(1);
        }
    }

    const empty_cart = () => {
        axios.post("http://localhost:5000/empty-cart", {
                email:props.user
            })
            .then(res => {
                setflag();
            })
    }

    const Place_order = () => {

        if(address === "")
        {
            alert("Add an Address in Profile Section");
        }
        else
        {
            axios.post("http://localhost:5000/order", {
                email:props.user,
                cart,
                amount: total+50
            })
            .then(res => {
                alert("Order Has Been Placed");
                empty_cart();
            })
        }
    }

  return (
    <>
        <div className='cart'>
            {
                cart.length === 0
                ? 
                <img src={process.env.PUBLIC_URL+"Images/cart.webp"} alt='loading' /> 
                :
                <div className='item-container'>
                    <label>
                        MY CART
                    </label>
                    <div className='cart-heading'>
                        <span id='item'>
                            Item
                        </span>
                        <span id="quantity">
                            Quantity
                        </span>
                        <span id="price">
                            Price
                        </span>
                        <span id="remove">
                            Remove
                        </span>
                    </div>
                    <hr style={{width: "100%"}}></hr>
                    <div style={{width: "100%",minHeight: "13rem"}}>
                        {
                            cart && cart.map((item,index) => {

                                return(
                                    <CartItem item={item} user={props.user} setflag={setflag} key={index} />
                                );
                            })
                        }
                    </div>
                    <hr style={{width: "100%"}}></hr>
                    <div className='bill-container'>
                        <div className='empty' onClick={empty_cart}>
                            Empty Cart
                        </div>
                        <div className='bill'>
                            <div>
                                <span>
                                    Sub Total :
                                </span>
                                <span>
                                    Rs. {total}
                                </span>
                            </div>
                            <div>
                                <span>
                                    Delivery Fee :
                                </span>
                                <span>
                                    Rs.50
                                </span>
                            </div>
                            <div>
                                <span>
                                    Order Total :
                                </span>
                                <span>
                                Rs.{total+50}
                                </span>
                            </div>
                        </div>
                    </div>
                    <button onClick={Place_order}>
                        PLACE ORDER
                    </button>
                </div>
            }
        </div>
    </>

  )
}

export default Cart;
