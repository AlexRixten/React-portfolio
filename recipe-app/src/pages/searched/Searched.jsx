import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { searchRecipe } from "../../api/apiRecipe";

import { CardItem } from "../../components/cardItem/CardItem";

import styles from "../../static/css/pages/Pages.module.css";

export const Searched = () => {
  const { searchName } = useParams();
  const { data, isSuccess } = useQuery(
    ["searched", searchName],
    () => searchRecipe(searchName),
    {
      enabled: !!searchName,
    }
  );

  if (isSuccess && data.results.length === 0) {
    return (
      <div className={styles.wrapper}>
        <h1 className={styles.title}>Страница пуста</h1>
      </div>
    );
  }

  return (
    <>
      {isSuccess && (
        <div className={styles.wrapper}>
          {data.results.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};
