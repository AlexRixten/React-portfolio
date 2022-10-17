import React from "react";
import { useFormik } from "formik";
import { queryClient } from "../../index.js";

import { FaSearch } from "react-icons/fa";

import styles from "./Search.module.css";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();
  const cuisine = queryClient.getQueryData(["cuisine"]);

  console.log(cuisine);

  const formik = useFormik({
    initialValues: { search: "" },
    onSubmit: (values) => {
      navigate(`/searched/${values.search}`);
    },
  });
  return (
    <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
      <FaSearch />
      <input
        type="text"
        id="search"
        onChange={formik.handleChange}
        value={formik.values.search}
      />
    </form>
  );
};
