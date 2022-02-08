import './App.css';
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import User from './Component/User';
import { Provider } from "react-redux"
import store from './redux/store';
import AddUser from './Component/AddUser';
import EditUser from './Component/EditUser';

function App() {
  return (
    <Provider store={store}>
       <div className="App">
         <Router>
           <Routes>
           <Route path='/' element={< User />}></Route>
           <Route path='/addUser' element={< AddUser />}></Route>
           <Route path='/editUser/:id' element={< EditUser />}></Route>
           </Routes>
         </Router>     
    </div>
    </Provider>
   
  );
}

export default App;
