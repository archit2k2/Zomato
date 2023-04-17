import React from 'react';
import axios from 'axios';

function CartItem(props) {

    const item = {
        email : props.user,
        id : props.item.id,
    }

    const delete_item = () => {

        axios.post("http://localhost:5000/delete-item", item)
            .then( res => {
                props.setflag();
            })
    }

  return (
    <div className='cart-item'>
        <span id="item">
            {props.item.name}
        </span>
        <span id="quantity">
            {props.item.count}
        </span>
        <span id="price">
            Rs.{props.item.price}
        </span>
        <div id="remove">
            <i className="fa-solid fa-trash" onClick={delete_item}></i>
        </div>
    </div>
  )
}

export default CartItem;
