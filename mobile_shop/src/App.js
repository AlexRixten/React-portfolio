import { useDispatch, useSelector } from "react-redux";
import { authSelector, logIn, logOut } from "./store/auth/authSlice";

function App() {
  const {isAuth} = useSelector(authSelector)
  const dispacth = useDispatch()

  const loginHandler = () => {
    dispacth(logIn())
  }
  const logoutHandler = () => {
    dispacth(logOut())
  }
   return (
    <>
    <p>{isAuth ? 'true' : 'false'}</p>
      <button onClick={loginHandler}>Login</button>
      <button onClick={logoutHandler}>Logout</button>
    </>
  );
}

export default App;
