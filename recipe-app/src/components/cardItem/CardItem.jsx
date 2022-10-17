import React from "react";
import styles from "../../static/css/components/CradItem.module.css";

export const CardItem = ({ item }) => {
  return (
    <div>
      <img className={styles.image} src={item.image} alt={item.title} />
      <h4 className={styles.title}>{item.title}</h4>
    </div>
  );
};
