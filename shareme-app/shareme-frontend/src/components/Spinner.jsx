import React from "react";
import { RotatingLines } from "react-loader-spinner";

export const Spinner = ({ message }) => {
  return (
    <div className="flex flex-col justify-center items-center w-full h-full">
      {/* <Loader
        type="Circles"
        color="#00BFFF"
        height={50}
        width={200}
        className="m-5"
      /> */}
      <RotatingLines
        strokeColor="grey"
        strokeWidth="5"
        animationDuration="0.75"
        width="96"
        visible={true}
        className="m-5"
      />

      <p className="text-lg text-center px-2">{message}</p>
    </div>
  );
}