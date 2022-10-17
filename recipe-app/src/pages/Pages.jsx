import React from "react";
import { useQueries } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import { fetchPopular, fetchVeggie } from "../api/apiRecipe";

import { MAIN_ROUTES } from "../routes/routes";

export const Pages = () => {
  useQueries({
    queries: [
      { queryFn: () => fetchPopular(), queryKey: ["popular"] },
      { queryFn: () => fetchVeggie(), queryKey: ["veggie"] },
    ],
  });

  return (
    <>
      <Routes>
        {MAIN_ROUTES.map((route, i) => (
          <Route key={i} path={route.path} element={route.component} />
        ))}
      </Routes>
    </>
  );
};
