import logo from './logo.svg';
import './App.css';
import Cakecontainer from './Component/Cakecontainer';
import { Provider } from "react-redux"
import store from './redux/store';
import HooksCakeContainer from './Component/HooksCakeContainer';
import Icecreamcontainer from './Component/Icecreamcontainer';
import NewCakeContainer from './Component/NewCakeContainer';
import UserContainer from './Component/UserContainer';
function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <HooksCakeContainer />
        <Cakecontainer />
        <Icecreamcontainer />
        <NewCakeContainer /><br /><br />
        <UserContainer />
      </div>
    </Provider>

  );
}

export default App;
