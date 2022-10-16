import React from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import { fetchCuisine } from "../../api/apiRecipe";

import styles from "./Cuisine.module.css";

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
            <div key={item.id}>
              <img className={styles.image} src={item.image} alt={item.title} />
              <h4 className={styles.title}>{item.title}</h4>
            </div>
          ))}
        </div>
      )}
    </>
  );
};
