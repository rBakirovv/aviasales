import { FC } from "react";
import FormControl from "@mui/material/FormControl";
import OutlinedInput from "@mui/material/OutlinedInput";
import { observer } from "mobx-react-lite";

interface ICityInputProps {
  label: string;
  placeholder: string;
  id: string;
  city: string;
  setCity: (e: string) => void;
}

const CityInput: FC<ICityInputProps> = observer((props) => {
  const { label, placeholder, id, city, setCity } = props;

  function onCityChange(e: React.SyntheticEvent) {
    const element = e.target as HTMLInputElement;

    setCity(element.value);
  }

  return (
    <div className="city-input">
      <label className="city-input__label" htmlFor={`input-${id}`}>
        {label}
      </label>
      <FormControl
        color="primary"
        sx={{
          color: "#fff",
          "& .MuiInputBase-input": {
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "10px",
            width: "210px",
            height: "56px",
            boxSizing: "border-box",
          },
          "& .MuiInputBase-root": {
            border: "none",
            borderRadius: "10px",
            backgroundColor: "transparent",
          },
          ".css-1t8l2tu-MuiInputBase-input-MuiOutlinedInput-input": {
            fontWeight: "700",
          },
        }}
      >
        <OutlinedInput
          id={id}
          value={city}
          onChange={onCityChange}
          placeholder={placeholder}
        />
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
            font-size: 0.75rem;
            line-height: 0.8rem;
          }
        `}
      </style>
    </div>
  );
});

export default CityInput;
