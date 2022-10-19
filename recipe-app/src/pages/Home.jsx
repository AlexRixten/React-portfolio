import React from "react";
import { motion } from "framer-motion";
import { queryClient } from "../index";

import { Slider } from "../components/slider/Slider";

export const Home = () => {
  const popular = queryClient.getQueryData(["popular"]);
  const veggie = queryClient.getQueryData(["veggie"]);

  return (
    <motion.div
      animate={{ opacity: 1 }}
      initial={{ opacity: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Slider title={"Our Veggie Picks"} data={veggie} perPage={3} gap={"3rem"} />
      <Slider title={"Popular Picks"} data={popular} perPage={4} gap={"2rem"} />
    </motion.div>
  );
};
