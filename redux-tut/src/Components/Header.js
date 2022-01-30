import React, { useState, useEffect } from "react";

function Header(props) {
    console.log('home',props.cardData);
    return (
       
        <div>
            <div className="addtocart">
                <span className="cart-count">{props.cardData.length}</span>
                <img src="download.png" />
            </div>
           
        </div>
    )
}

export default Header;
