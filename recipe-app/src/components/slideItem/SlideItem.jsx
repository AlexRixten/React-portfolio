import React from "react";
import styles from "../../static/css/components/SlideItem.module.css";

export const SlideItem = ({ recipe }) => {
  return (
    <>
      <div className={styles.card} key={recipe.id}>
        <p className={styles.title}>{recipe.title}</p>
        <img className={styles.image} src={recipe.image} alt={recipe.title} />
        <div className={styles.gradient}></div>
      </div>
    </>
  );
};
