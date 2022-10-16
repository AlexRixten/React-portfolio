import React from "react";
import { queryClient } from "../index";

import { Slider } from "../components/slider/Slider";
import { Category } from "../components/category/Category";

export const Home = () => {
  const popular = queryClient.getQueryData(["popular"]);
  const veggie = queryClient.getQueryData(["veggie"]);

  return (
    <div>
      <Slider title={"Our Veggie Picks"} data={veggie} perPage={3} />
      <Slider title={"Popular Picks"} data={popular} perPage={4} />
    </div>
  );
};
