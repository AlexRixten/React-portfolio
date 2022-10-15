import React from "react";
import { queryClient } from "../index.js";

export const Popular = () => {
  const popular = queryClient.getQueryData(["popular"]);
  return (
    <div>
      <div>
        {popular?.map((recipe) => (
          <div key={recipe.id}>
            <p>{recipe.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};
