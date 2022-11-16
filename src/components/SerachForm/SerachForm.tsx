import { Button } from "@mui/material";
import CityInput from "../UI/CityInput/CityInput";
import DateInput from "../UI/DateInput/DateInput";
import styles from "./SerachForm.module.css";
import FlightDate from "../../store/date";
import City from "../../store/city";
import { observer } from "mobx-react-lite";
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";

const SerachForm = observer(() => {
  const [isButtonDisabled, setIsButtonDisabled] = useState<boolean>(true);

  const router = useRouter();

  /* Валидирует поля, валидирует дату ( Обратно не раньше, чем туда ) */
  useEffect(() => {
    if (City.cityFrom !== "" && City.cityTo !=="" && FlightDate.dateFrom !== "") {
      if (FlightDate.dateTo !== "") {
        const flightDateFrom = new Date(FlightDate.dateFrom);
        const flightDateTo = new Date(FlightDate.dateTo);

        if (flightDateTo < flightDateFrom) {
          setIsButtonDisabled(true);
        } else {
          setIsButtonDisabled(false);
        }
      } else {
        setIsButtonDisabled(false);
      }
    } else {
      setIsButtonDisabled(true);
    }
  });

  function onSumbit(e: React.SyntheticEvent) {
    e.preventDefault();

    sessionStorage.setItem("cityFrom", City.cityFrom);
    sessionStorage.setItem("cityTo", City.cityTo);
    sessionStorage.setItem("dateFrom", FlightDate.dateFrom);
    sessionStorage.setItem("dateTo", FlightDate.dateTo);

    router.push("/info");
  }

  return (
    <form className={styles["search-form"]}>
      <div className={styles["serach-form__fields-container"]}>
        <CityInput
          label="Откуда"
          placeholder="Город вылета"
          id="from"
          city={City.cityFrom}
          setCity={City.setCityFrom}
        />
        <CityInput
          label="Куда"
          placeholder="Город прилёта"
          id="to"
          city={City.cityTo}
          setCity={City.setCityTo}
        />
        <DateInput
          label="Туда"
          id="from"
          date={FlightDate.dateFrom}
          setDate={FlightDate.setDateFrom}
        />
        <DateInput
          label="Обратно"
          id="to"
          date={FlightDate.dateTo}
          setDate={FlightDate.setDateTo}
        />
      </div>
      <div className={styles["serach-form__submit-container"]}>
        <Button
          type="submit"
          variant="contained"
          color="primary"
          disabled={isButtonDisabled}
          onClick={onSumbit}
          sx={{
            backgroundColor: "#5C87DB;",
            height: "40px",
            borderRadius: "10px",
          }}
        >
          Найти билеты
        </Button>
      </div>
    </form>
  );
});

export default SerachForm;
