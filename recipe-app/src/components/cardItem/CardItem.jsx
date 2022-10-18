import React from "react";
import { Link } from "react-router-dom";
import styles from "../../static/css/components/CradItem.module.css";

export const CardItem = ({ item }) => {
  return (
    <Link to={`/recipe/${item.id}`}>
      <img className={styles.image} src={item.image} alt={item.title} />
      <h4 className={styles.title}>{item.title}</h4>
    </Link>
  );
};
