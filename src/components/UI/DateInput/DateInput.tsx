import React, { FC, useEffect, useState } from "react";
import TextField from "@mui/material/TextField";
import { observer } from "mobx-react-lite";

interface DateInput {
  label: string;
  id: string;
  date: string;
  setDate: (e: string) => void;
}

const DateInput: FC<DateInput> = observer((props) => {
  const { label, id, date, setDate } = props;

  const [color, setColor] = useState<string>("silver");

  useEffect(() => {
    if (date !== '') {
      setColor("#000");
    } else {
      setColor("silver");
    };
  });

  function onDateChange(e: React.SyntheticEvent) {
    const element = e.target as HTMLInputElement;
    setDate(element.value);
  }

  return (
    <div className="date-input">
      <label className="date-input__label" htmlFor={`date-input-${id}`}>
        {label}
      </label>
      <TextField
        id="date"
        type="date"
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
          },
        }}
        value={date}
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
            font-size: 0.75rem;
            line-height: 0.8rem;
          }
        `}
      </style>
    </div>
  );
});

export default DateInput;
