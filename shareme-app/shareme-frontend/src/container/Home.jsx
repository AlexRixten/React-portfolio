import React, { useState, useRef, useEffect } from "react";
import { HiMenu } from "react-icons/hi";
import { AiFillCloseCircle } from "react-icons/ai";
import { Link, Route, Routes } from "react-router-dom";

import { Sidebar, UserProfile } from "../components";
import { Pins } from "./Pins";
import { client  } from "../client";
import logo from '../assets/logo.png'

export const Home = () => {
  return (
    <div className="flex bg-gray-50 md:flex-col ">
      Home
      <Sidebar />
      <UserProfile />
    </div> 
  );
};
