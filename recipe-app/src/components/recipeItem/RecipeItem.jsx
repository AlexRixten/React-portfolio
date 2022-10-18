import React, { useState } from "react";
import styles from "../../static/css/components/RecipeItem.module.css";

export const RecipeItem = ({ item }) => {
  const [activeTab, setActiveTab] = useState("instraction");
  return (
    <div className={styles.wrapper}>
      <div>
        <h2 className={styles.title}>{item.title}</h2>
        <img className={styles.image} src={item.image} alt={item.title} />
      </div>
      <div className={styles.info}>
        <button
          onClick={() => setActiveTab("instraction")}
          className={
            activeTab === "instraction"
              ? `${styles.button} ${styles.active}`
              : `${styles.button}`
          }
        >
          Instraction
        </button>
        <button
          onClick={() => setActiveTab("ingredients")}
          className={
            activeTab === "ingredients"
              ? `${styles.button} ${styles.active}`
              : `${styles.button}`
          }
        >
          Ingredients
        </button>
        {activeTab === "instraction" && (
          <div>
            <h3 dangerouslySetInnerHTML={{ __html: item.summary }}></h3>
            <h3 dangerouslySetInnerHTML={{ __html: item.instructions }}></h3>
          </div>
        )}
        {activeTab === "ingredients" && (
          <ul className={styles.list}>
            {item?.extendedIngredients?.map((ingredient) => (
              <li key={ingredient.id} className={styles.list}>
                {ingredient.original}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
};
