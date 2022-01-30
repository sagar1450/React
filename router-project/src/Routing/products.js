import { BrowserRouter as Router, Routes, Route, Link,Outlet} from "react-router-dom";

function Product() {
    return (
        <div>
            <input type="text" placeholder="search" />
            <>
                <nav>
                    <ul>
                        <li>
                            <Link to="feature">Feature</Link>
                        </li>
                        <li>
                            <Link to="new">New</Link>
                        </li>

                    </ul>
                </nav>

                <Outlet />
            </>

        </div>
    )
}

export default Product;