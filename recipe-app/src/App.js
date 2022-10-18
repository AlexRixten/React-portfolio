import React from "react";
import { Category } from "./components/category/Category";
import { Search } from "./components/search/Search";
import { Pages } from "./pages/Pages";
import { GiKnifeFork } from "react-icons/gi";

import styles from "./static/css/App.module.css";
import { Link } from "react-router-dom";

export const App = () => {
  return (
    <div>
      <div className={styles.nav}>
        <GiKnifeFork />
        <Link to={"/"}>deliciousss</Link>
      </div>
      <Search />
      <Category />
      <Pages />
    </div>
  );
};
