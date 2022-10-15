import React from "react";
import { useQueries } from "@tanstack/react-query";
import { Home } from "./Home";
import { fetchPopular } from "../api/apiRecipe";

export const Pages = () => {
  useQueries({
    queries: [
      { queryFn: fetchPopular, queryKey: ["popular"] },
      // { queryFn: fetchGroups, queryKey: ["groups"] },
    ],
  });

  return (
    <div>
      <div>
        <Home />
      </div>
    </div>
  );
};
