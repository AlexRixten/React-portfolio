import { useSelector } from "react-redux";
import { AuthLayout } from "./layout/authLayout/AuthLayout";
import { MainLayout } from "./layout/mainLayout/MainLayout";
import { authSelector } from "./store/auth/authSlice";

function App() {
  const { isAuth } = useSelector(authSelector);

  return (
    <>
      <div>{isAuth ? <MainLayout /> : <AuthLayout />}</div>
    </>
  );
}

export default App;
