import React from "react";
import { useFormik } from "formik";
import { queryClient } from "../../index.js";

import { FaSearch } from "react-icons/fa";

import styles from "../../static/css/components/Search.module.css";
import { useNavigate } from "react-router-dom";

export const Search = () => {
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: { search: "" },
    onSubmit: (values) => {
      navigate(`/searched/${values.search}`);
    },
  });
  return (
    <form className={styles.wrapper} onSubmit={formik.handleSubmit}>
      <label className={styles.label}>
        <FaSearch />
        <input
          type="text"
          id="search"
          onChange={formik.handleChange}
          value={formik.values.search}
        />
      </label>
    </form>
  );
};
