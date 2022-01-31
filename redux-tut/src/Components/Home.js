import React, { useState, useEffect } from "react";

function Home(props) {  
    return (       
        <div>           
             <h1>Home component</h1>
             <div className="cart-wrapper"> 
             <div className="img-wrapper item">
                 <img src="iphone11.png" />
                 </div>
            
             <div className="text-wrapper item">
                <span>I-phone</span>
                <span>Price: $1000</span>
             </div>
             <div className="btn-wrapper item">
               <button onClick={()=>props.addToCartHandler({price:1000,name:'iphone11'})}>add to cart</button><br />
               <button className="r-btn" onClick={()=>props.removeToCartHandler()}>remove to cart</button>
             </div>

             </div>
           
        </div>
    )
}

export default Home;
