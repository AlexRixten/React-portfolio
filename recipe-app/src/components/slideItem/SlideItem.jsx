import React from "react";
import { Link } from "react-router-dom";
import styles from "../../static/css/components/SlideItem.module.css";

export const SlideItem = ({ recipe }) => {
  return (
    <Link to={`/recipe/${recipe.id}`}>
      <div className={styles.card}>
        <p className={styles.title}>{recipe.title}</p>
        <img className={styles.image} src={recipe.image} alt={recipe.title} />
        <div className={styles.gradient}></div>
      </div>
    </Link>
  );
};
