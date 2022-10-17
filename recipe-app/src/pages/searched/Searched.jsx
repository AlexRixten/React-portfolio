import React from "react";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { searchRecipe } from "../../api/apiRecipe";

export const Searched = () => {
  const { searchName } = useParams();
  const { data, isSuccess } = useQuery(
    ["contact", searchName],
    () => searchRecipe(searchName),
    {
      enabled: !!searchName,
    }
  );
  console.log(data);
  return <div>Searched</div>;
};
