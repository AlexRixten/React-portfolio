import React from "react";
import { Category } from "./components/category/Category";
import { Search } from "./components/search/Search";
import { Pages } from "./pages/Pages";

export const App = () => {
  return (
    <div>
      <Search />
      <Category />
      <Pages />
    </div>
  );
};
