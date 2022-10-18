import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import styles from "../../static/css/components/Slider.module.css";
import { SlideItem } from "../slideItem/SlideItem";

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
              <SlideItem recipe={recipe} />
            </SplideSlide>
          ))}
        </Splide>
      </div>
    </div>
  );
};
