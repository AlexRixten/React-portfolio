import { TextField } from "@mui/material";
import React from "react";
import { Controller } from "react-hook-form";

export const Input = ({
  variant,
  margin,
  fullWidth,
  name,
  label,
  type,
  id,
  errors,
  control=null,
  required,
}) => {
  console.log(control);
  return (
    <Controller>
      {/* control={control} */}
      rules=
      {{
        required: true,
      }}
      render=
      {({ field: { onChange, onBlur, value } }) => (
        <TextField
          variant={variant}
          margin={margin}
          fullWidth={fullWidth}
          name={name}
          label={label}
          type={type}
          id={id}
          onChange={onChange}
          onBlur={onBlur}
        //   value={value}
        />
      )}
      {/* {errors[name] && <span>This field is required</span>} */}
    </Controller>
  );
};
