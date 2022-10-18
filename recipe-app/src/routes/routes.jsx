import { FaPizzaSlice, FaHamburger } from "react-icons/fa";
import { GiNoodles, GiChopsticks } from "react-icons/gi";

import { Home } from "../pages/home/Home";
import { Cuisine } from "../pages/cuisine/Cuisine";
import { Searched } from "../pages/searched/Searched";
import { Recipe } from "../pages/recipe/Recipe";

export const ROUTES_CATEGORY = [
  {
    path: "/cuisine/Italian",
    icon: <FaPizzaSlice />,
    title: "Italian",
  },
  {
    path: "/cuisine/American",
    icon: <FaHamburger />,
    title: "American",
  },
  {
    path: "/cuisine/Thai",
    icon: <GiNoodles />,
    title: "Thai",
  },
  {
    path: "/cuisine/Japanese",
    icon: <GiChopsticks />,
    title: "Japanese",
  },
];

export const MAIN_ROUTES = [
  {
    path: "/",
    component: <Home />,
  },
  {
    path: "/cuisine/:type",
    component: <Cuisine />,
  },
  {
    path: "/searched/:searchName",
    component: <Searched />,
  },
  {
    path: "/recipe/:id",
    component: <Recipe />,
  },
];
