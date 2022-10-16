import React from "react";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import { Link, useParams } from "react-router-dom";

import { fetchCuisine } from "../api/apiRecipe";

export const Cuisine = () => {
  const { type } = useParams();
  const { data: cuisine, isSuccess } = useQuery(
    ["contact", type],
    () => fetchCuisine(type),
    {
      enabled: !!type,
    }
  );

  return (
    <div>
      <div>cuisine</div>
    </div>
  );
};
