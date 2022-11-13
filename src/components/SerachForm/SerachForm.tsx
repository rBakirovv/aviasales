import { Button } from "@mui/material";
import CityInput from "../UI/CityInput/CityInput";
import DateInput from "../UI/DateInput/DateInput";
import styles from "./SerachForm.module.css";

const SerachForm = () => {
  return (
    <form className={styles["search-form"]}>
      <div className={styles["serach-form__fields-container"]}>
        <CityInput label="Откуда" placeholder="Город вылета" id="from" />
        <CityInput label="Куда" placeholder="Город прилёта" id="to" />
        <DateInput label="Туда" id="from" />
        <DateInput label="Обратно" id="to" />
      </div>
      <div className={styles["serach-form__submit-container"]}>
        <Button 
          type="submit" 
          variant="contained" 
          color="primary"
          sx={{
            backgroundColor: '#5C87DB;',
            height: '40px',
            borderRadius: '10px'
          }}
        >
          Найти билеты
        </Button>
      </div>
    </form>
  );
};

export default SerachForm;
