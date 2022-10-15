import { apiRequest, apiKey } from "./api";

export const fetchPopular = async () => {
  const res = await apiRequest({
    url: `/recipes/random${apiKey}number=9`,
  });
  return res.recipes;
};
