import { useState } from "react";
import axios from 'axios';


function Item(props)
{

    const [item,setItem] = useState(
        {
            email : props.user,
            id : props.data.id,
            name : props.data.name,
            count : 1,
            price : props.data.price
        }
    )

    const inc = () => {

         setItem({...item, "count" : item.count+1});
    }

    const dec = () => {

        if(item.count === 1)
        {
            setItem({...item, "count" : 1});
            return;
        }

        setItem({...item, "count" : item.count-1});
    }

    const addtocart = () => {

        axios.post("http://localhost:5000/cart",item)
            .then(res => {
                alert(res.data.msg);
            })
    }

    return (
        <>
            <div className="item">
                <div className="item-img-container">
                    <img src={process.env.PUBLIC_URL+props.data.src}  alt="loading" />
                </div>
                <hr></hr>
                <div className="item-info">
                    <div>
                        <label>
                        {props.data.name}
                        </label>
                        <span>
                        Rs. {props.data.price}
                        </span>
                    </div>
                    <div className="order">
                        <div >
                            <button className="amount" onClick={dec}>
                                -
                            </button>
                            <input value={item.count} disabled></input>
                            <button className="amount" onClick={inc}>
                                +
                            </button>
                        </div>
                        <button onClick={addtocart}>
                            ADD TO CART
                        </button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Item;