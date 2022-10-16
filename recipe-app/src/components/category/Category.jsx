import React from "react";
import { NavLink } from "react-router-dom";

import { ROUTES_CATEGORY } from "../../routes/routes";

import styles from "./Category.module.css";

export const Category = () => {
  return (
    <div className={styles.wrapper}>
      {ROUTES_CATEGORY.map((nav, i) => (
        <NavLink
          className={({ isActive }) =>
            !isActive ? `${styles.link}` : `${styles.link} ${styles.active}`
          }
          to={nav.path}
          key={i}
        >
          {nav.icon}
          <h4 className={styles.title}>{nav.title}</h4>
        </NavLink>
      ))}
    </div>
  );
};
