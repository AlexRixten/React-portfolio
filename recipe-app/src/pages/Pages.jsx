import React from "react";
import { useQueries } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { fetchPopular, fetchVeggie, fetchCuisine } from "../api/apiRecipe";

import { Home } from "./Home";
import { Cuisine } from "./Cuisine";

export const Pages = () => {
  useQueries({
    queries: [
      { queryFn: fetchPopular, queryKey: ["popular"] },
      { queryFn: fetchVeggie, queryKey: ["veggie"] },
      // { queryFn: () => fetchCuisine("type"), queryKey: ["cuisine", "type"] },
    ],
  });

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine/:type" element={<Cuisine />} />
      </Routes>
    </>
  );
};
