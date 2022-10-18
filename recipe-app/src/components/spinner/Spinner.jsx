import React from "react";
import spinner from "../../static/img/spinner.gif";

export const Spinner = () => {
  return (
    <div className="mx-auto flex justify-center">
      <img className="w-24" src={spinner} alt="spinner" />
    </div>
  );
};
