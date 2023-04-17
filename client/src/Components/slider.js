import React, { useState,useEffect } from "react";

function Slider(props)
{
    const [left,setleft] = useState("0");
    const [Left,setLeft] = useState("0");
    const [count,setcount] = useState(0);
    const [Count,setCount] = useState(0);
    const [display,setdisplay] = useState("none");
    const [bdisplay,setbdisplay] = useState("none");
    const [Display,setDisplay]= useState("block");
    const [bDisplay,setbDisplay]= useState("block");

    useEffect(()=>{
        if(count===0)
        {
            setdisplay("none");
        }
        else
        {
            setdisplay("block");
        }

        if(count===3)
        {
            setDisplay("none");
        }
        else
        {
            setDisplay("block");
        }

        if(Count===0)
        {
            setbdisplay("none");
        }
        else
        {
            setbdisplay("block");
        }

        if(Count===1)
        {
            setbDisplay("none");
        }
        else
        {
            setbDisplay("block");
        }

        
        setleft(`-${count*14.2}vw`);
        setLeft(`-${Count*14.2}vw`);
    },[count,Count]);

    function fillter(value)
    {
        if(props.fillter === value)
        {
            props.setfillter("none");
        }
        else
        {
            props.setfillter(value);
        }
    }

    return(
        <>
            <div className="title">
                Category
            </div>
            <div className="slider-container">
                <div className="slider">
                    <div className="tab">
                        <img src={process.env.PUBLIC_URL+"Images/Category/back.png"} className="navigation" style={{display}} onClick={()=> setcount(count-1)} alt="loading" />
                    </div>
                    <div className="slider-frame">
                        <div className="slider-image" style={{left}}>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Category/burger.avif"} onClick={()=>{fillter("Burgers")}} className="cat-img" alt="loading" />
                            </div>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Category/pizza.avif"} onClick={()=>{fillter("Pizzas")}} className="cat-img" alt="loading" />
                            </div>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Category/biryani.avif"} onClick={()=>{fillter("Biryani")}} className="cat-img" alt="loading" />
                            </div>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Category/wrap.avif"} onClick={()=>{fillter("Wraps")}} className="cat-img" alt="loading" />
                            </div>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Category/chicken.webp"} onClick={()=>{fillter("Chicken")}} className="cat-img" alt="loading" />
                            </div>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Category/thali.avif"} onClick={()=>{fillter("Thali")}} className="cat-img" alt="loading" />
                            </div>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Category/chowmein.avif"} onClick={()=>{fillter("Chowmein")}} className="cat-img" alt="loading" />
                            </div>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Category/sandwich.avif"} onClick={()=>{fillter("Sandwiches")}} className="cat-img" alt="loading" />
                            </div>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Category/desert.avif"} onClick={()=>{fillter("Dessert")}} className="cat-img" alt="loading" />
                            </div>
                        </div>
                    </div>
                    <div className="tab">
                        <img src={process.env.PUBLIC_URL+"Images/Category/next.png"} className="navigation" id="next" style={{display:Display}} onClick={()=> setcount(count+1)} alt="loading" />
                    </div>
                </div>
            </div>
            <div className="title">
                Top brands for you
            </div>
            <div className="slider-container">
                <div className="slider">
                    <div className="tab">
                        <img src={process.env.PUBLIC_URL+"Images/Category/back.png"} className="navigation" style={{display:bdisplay}} onClick={()=> setCount(Count-1)} alt="loading" />
                    </div>
                    <div className="slider-frame">
                        <div className="slider-image" style={{left:Left}}>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Brands/mcd.png"} className="brand-img" onClick={()=>{fillter("McDonald's")}}  alt="loading" />
                            </div>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Brands/dominos.avif"} className="brand-img" onClick={()=>{fillter("Domino's")}} alt="loading" />
                            </div>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Brands/bk.avif"} className="brand-img" onClick={()=>{fillter("Burger King")}} alt="loading" />
                            </div>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Brands/kfc.avif"} className="brand-img" onClick={()=>{fillter("KFC")}} alt="loading" />
                            </div>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Brands/haldiram.avif"} className="brand-img" onClick={()=>{fillter("Haldiram's")}} alt="loading" />
                            </div>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Brands/pizza-hut.avif"} className="brand-img" onClick={()=>{fillter("Pizza Hut")}} alt="loading" />
                            </div>
                            <div className="img-container">
                                <img src={process.env.PUBLIC_URL+"Images/Brands/subway.avif"} className="brand-img" onClick={()=>{fillter("Subway")}} alt="loading" />
                            </div>
                        </div>
                    </div>
                    <div className="tab">
                        <img src={process.env.PUBLIC_URL+"Images/Category/next.png"} className="navigation" id="next" style={{display:bDisplay}} onClick={()=> setCount(Count+1)} alt="loading" />
                    </div>
                </div> 
            </div>

            
        </>
    );
}

export default Slider;