import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import styles from "./Slider.module.css";

export const Slider = ({ title, data, perPage, gap }) => {
  return (
    <div>
      <div className={styles.wrapper}>
        <h3>{title}</h3>
        <Splide
          options={{
            perPage,
            arrows: false,
            pagination: false,
            drag: "free",
            gap,
          }}
        >
          {data?.map((recipe) => (
            <SplideSlide key={recipe.id}>
              <div className={styles.card} key={recipe.id}>
                <p className={styles.title}>{recipe.title}</p>
                <img
                  className={styles.image}
                  src={recipe.image}
                  alt={recipe.title}
                />
                <div className={styles.gradient}></div>
              </div>
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
