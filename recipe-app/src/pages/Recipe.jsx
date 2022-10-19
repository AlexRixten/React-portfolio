import React from "react";
import { useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchRecipe } from "../api/apiRecipe";
import { Spinner } from "../components/spinner/Spinner";
import { RecipeItem } from "../components/recipeItem/RecipeItem";

export const Recipe = () => {
  const { id } = useParams();
  const { data, isSuccess } = useQuery(["recipe", id], () => fetchRecipe(id), {
    enabled: !!id,
  });
  if (!isSuccess) {
    return <Spinner />;
  }

  return <RecipeItem key={data.id} item={data} />;
};
