import React, { FC, useState } from "react";
import { Dayjs } from "dayjs";
import TextField from "@mui/material/TextField";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";

interface DateInput {
  label: string;
  id: string;
}

const DateInput: FC<DateInput> = ({ label, id }) => {

  const [color, setColor] = useState<string>('silver');

  function onDateChange() {
    setColor('#000');
  };

  return (
    <div className="date-input">
      <label className="date-input__label" htmlFor={`date-input-${id}`}>
        {label}
      </label>
      <TextField
        id="date"
        type="date"
        InputLabelProps={{
          shrink: true,
        }}
        sx={{
          color: "#fff",
          "& .MuiInputBase-root": {
            backgroundColor: "#fff",
            border: "none",
            borderRadius: "10px",
            width: "210px",
            height: "56px",
            boxSizing: "border-box",
            color: `${color}`,
            fontWeight: "500",
          }
        }}
        onChange={onDateChange}
      />
      <style>
        {`
          .date-input {
            display: flex;
            flex-direction: column;
            color: #fff;
          }

          .date-input__label {
            font-weight: 400;
            font-size: 11px;
            line-height: 13px;
          }
        `}
      </style>
    </div>
  );
};

export default DateInput;
