import { FC } from "react";
import FormControl, { useFormControl } from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";

interface ICityInputProps {
  label: string,
  placeholder: string,
  id: string
}

const CityInput: FC<ICityInputProps> = ({ label, placeholder, id}) => {
  return (
    <div className="city-input">
      <label className="city-input__label" htmlFor={`input-${id}`}>
        {label}
      </label>
      <FormControl
        id={id}
        color="primary"
        sx={{
          color: "#fff",
          "& .MuiInputBase-input": {
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "10px",
            width: "210px",
            height: "56px",
            boxSizing: "border-box"
          },
          "& .MuiInputBase-root": {
            border: "none",
            borderRadius: "10px",
            backgroundColor: "transparent",
          },
          ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            fontWeight: '700'
          }
        }}
      >
        <OutlinedInput placeholder={placeholder} />
      </FormControl>
      <style>
        {`
          .city-input {
            display: flex;
            flex-direction: column;
            color: #fff;
          }

          .city-input__label {
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;
          }
        `}
      </style>
    </div>
  );
};

export default CityInput;
