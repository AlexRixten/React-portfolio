import React from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { useParams } from "react-router-dom";

import { fetchCuisine } from "../../api/apiRecipe";

import styles from "../../static/css/pages/Pages.module.css";
import { CardItem } from "../../components/cardItem/CardItem";

export const Cuisine = () => {
  const { type } = useParams();
  const { data: cuisine, isSuccess } = useQuery(
    ["contact", type],
    () => fetchCuisine(type),
    {
      enabled: !!type,
    }
  );
  if (isSuccess && cuisine.results.length === 0) {
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
          {cuisine.results.map((item) => (
            <CardItem key={item.id} item={item} />
          ))}
        </div>
      )}
    </>
  );
};
