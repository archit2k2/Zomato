import axios from 'axios';
import React, { useState, useEffect } from 'react';

function Order(props) {

const [ order, setOrder ] = useState([]);

useEffect(() => {
    axios.get("http://localhost:5000/get-order", {
            params : {
                email : props.user
            }
        })
        .then(res => {
            setOrder(res.data.order);
        })
},[props.user])


  return (
    <>
        <div className='previous-order'>
            {
                order.length === 0
                ?
                <img src={process.env.PUBLIC_URL+"Images/order.png"} alt='loading' />
                :
                <div>
                    <label>
                        MY ORDERS
                    </label>
                    {
                        order && order.map((item,index) => {
                            return (<fieldset key={index}>
                                    <legend>Order Id({item._id})</legend>
                                    <div>
                                        {
                                            item.items.map((item, index) => {
                                                return  (<div className='order-item' key={index}>
                                                            <span>
                                                                {item.name}
                                                            </span>
                                                            <span style={{textAlign: "center"}}>
                                                                {item.count}
                                                            </span>
                                                            <span style={{textAlign: "end"}}>
                                                                Rs.{item.price}
                                                            </span>
                                                        </div>);
                                            })
                                        }
                                    </div>
                                    <div className='amount-paid'>
                                        <p>
                                            Amount Paid : {item.amount}
                                        </p>
                                    </div>
                                </fieldset>)
                        })
                    }
                </div>
            }
        </div>
    </>
  )
}


export default Order;
