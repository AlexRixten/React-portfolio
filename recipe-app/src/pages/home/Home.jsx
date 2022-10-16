import React from "react";
import { queryClient } from "../../index";

import { Slider } from "../../components/slider/Slider";

export const Home = () => {
  const popular = queryClient.getQueryData(["popular"]);
  const veggie = queryClient.getQueryData(["veggie"]);

  return (
    <div>
      <Slider
        title={"Our Veggie Picks"}
        data={veggie}
        perPage={3}
        gap={"3rem"}
      />
      <Slider title={"Popular Picks"} data={popular} perPage={4} gap={"2rem"} />
    </div>
  );
};
