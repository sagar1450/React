import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function Nav(){
    return(
        <div>
            <nav>
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/product">Product</Link>    
                <Link to="/feature">Product</Link>                
            </nav>
        </div>
    )
}

export default Nav;