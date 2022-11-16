import { makeAutoObservable } from "mobx";

class City {

  cityFrom: string = '';
  cityTo: string = '';

  constructor() {
    makeAutoObservable(this)
  }

  setCityFrom = (city: string) => {
    this.cityFrom = city;
  }

  setCityTo = (city: string) => {
    this.cityTo = city;
  }
}

export default new City();