import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./Home";
import About from "./About";
import Nav from "./Nav";
import OrderSummary from "./OrderSummary";
import Product from "./products";
import Feature from "./feature";
import New from "./new";
import Users from "./Users";
import UserDeatils from "./UserDetails";
import User from "./User";

function Routing() {
    return (
        <div>
            <h1>Routing</h1>
            {/* <Router> */}
              {/* <Nav /> */}
                {/* <Routes> */}
                    {/* <Route path='/' element={< Home />}></Route>
                    <Route path='/about' element={< About />}></Route>
                    <Route path='/order-summary' element={< OrderSummary />}></Route>
                    <Route path='/product' element={< Product />}>
                    <Route index element={< Feature />}></Route>  
                    <Route path='feature' element={< Feature />}></Route>  
                    <Route path='new' element={< New />}></Route>                        
                    </Route>    
                    <Route path='/users' element={< Users />}>  </Route>  
                    <Route path='/users/:userid' element={< UserDeatils />}>  </Route> 
                    <Route path='/nav' element={< User />}>  </Route>                 */}
                    <User />
                      
                    
                {/* </Routes> */}
            {/* </Router> */}
        </div>
    )
}


export default Routing;