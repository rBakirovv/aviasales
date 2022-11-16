import { makeAutoObservable } from "mobx";

class FlightDate {

  dateFrom: string = '';
  dateTo: string = '';

  constructor() {
    makeAutoObservable(this)
  }

  setDateFrom =(date: string) => {
    this.dateFrom = date;
  }

  setDateTo = (date: string) => {
    this.dateTo = date;
  }
}

export default new FlightDate();