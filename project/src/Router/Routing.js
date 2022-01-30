import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Hoc from "../HOC/Hoc";

function Routing() {
    return (
        <div>
            <Router>
           
                <Link to="/home" >Home page</Link><br />
                <Link to="/about" >About page</Link>               
                   
               

            </Router>

        </div>
    )
}

function Home() {
    return (
        <div>
            <h1>Home</h1>
        </div>
    )
}

function About() {
    return (
        <div>
            <h1>About</h1>
        </div>
    )
}

export default Routing;