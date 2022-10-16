import React from "react";
import { useFormik } from "formik";

import { FaSearch } from "react-icons/fa";

import styles from "./Search.module.css";

export const Search = () => {
  const formik = useFormik({
    initialValues: { email: "" },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form className={styles.wrapper}>
      <input type="text" />
    </form>
  );
};
