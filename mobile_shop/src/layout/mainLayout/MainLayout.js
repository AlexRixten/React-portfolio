import React from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../../store/auth/authSlice";

export const MainLayout = () => {
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <div>mainLayout</div>
      <button onClick={logoutHandler}>Logout</button>
    </div>
  );
};
