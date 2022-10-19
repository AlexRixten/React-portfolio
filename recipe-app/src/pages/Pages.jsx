import React from "react";
import { useQueries } from "@tanstack/react-query";
import { Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import { fetchPopular, fetchVeggie } from "../api/apiRecipe";

import { MAIN_ROUTES } from "../routes/routes";

export const Pages = () => {
  const location = useLocation()
  useQueries({
    queries: [
      { queryFn: () => fetchPopular(), queryKey: ["popular"] },
      { queryFn: () => fetchVeggie(), queryKey: ["veggie"] },
    ],
  });

  return (
    <AnimatePresence exitBeforeEnter >
      <Routes location={location} key={location.pathname}>
        {MAIN_ROUTES.map((route, i) => (
          <Route key={i} path={route.path} element={route.component} />
        ))}
      </Routes>
    </AnimatePresence>
  );
};
