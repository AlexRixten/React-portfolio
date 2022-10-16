import { apiRequest, apiKey } from "./api";

export const fetchPopular = async () => {
  const check = localStorage.getItem("popular");
  if (check) {
    return JSON.parse(check);
  } else {
    const res = await apiRequest({
      url: `/recipes/random${apiKey}number=9`,
    });
    localStorage.setItem("popular", JSON.stringify(res.recipes));
    return res.recipes;
  }
};

export const fetchVeggie = async () => {
  const check = localStorage.getItem("veggi");
  if (check) {
    return JSON.parse(check);
  } else {
    const res = await apiRequest({
      url: `/recipes/random${apiKey}number=9&tags=vegetarian`,
    });
    localStorage.setItem("veggi", JSON.stringify(res.recipes));
    return res.recipes;
  }
};

export const fetchCuisine = async (name) => {
  const res = await apiRequest({
    url: `/recipes/complexSearch${apiKey}cuisine=${name}`,
  });
  return res;
};

export const searchRecipe = async (name) => {
  const res = await apiRequest({
    url: `/recipes/complexSearch${apiKey}cuisine=${name}`,
  });
  return res;
};
