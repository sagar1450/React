import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Nav from "./Nav";

function User() {
    let users = [{ id: 1, name: "sagar" },
    { id: 2, name: "sonu" },
    { id: 3, name: "golu" },
    ]

    return(
        <div>
        <Router>
            {
                users.map((item)=>
                <div><Link to={"/nav"}><h3>{item.name}</h3></Link></div>
                )
            }
          
             {/* <Routes>
             <Route path="/nav/:id" element={< Nav />}></Route>                    

                </Routes> */}

        </Router>
        </div>
    )
}

export default User;