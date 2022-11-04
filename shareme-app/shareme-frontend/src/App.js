import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { Login } from "./components/Login";
import { Home } from "./container/Home";

export const App = () => {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/*" element={<Home />} />
    </Routes>
  );
};
