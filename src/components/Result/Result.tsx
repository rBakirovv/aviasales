import styles from "./Result.module.css";
import { Button } from "@mui/material";
import { useRouter } from "next/router";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";
import flightData from "../../data/flightData";
import { useEffect, useState } from "react";

const Result = () => {
  const [isBrowser, setIsBrowser] = useState<boolean>(false);
  const [indexOfFlightFrom, setIndexOfFlightFrom] = useState<number>(0);
  const [indexOfFlightTo, setIndexOfFlightTo] = useState<number>(0);

  const router = useRouter();

  const cityFrom =
    (typeof window !== "undefined" && sessionStorage.getItem("cityFrom")) || "";
  const cityTo =
    (typeof window !== "undefined" && sessionStorage.getItem("cityTo")) || "";
  const dateFrom =
    (typeof window !== "undefined" &&
      sessionStorage
        .getItem("dateFrom")
        ?.replace(/-/g, ".")
        .split(".")
        .reverse()
        .join(".")) ||
    "";
  const dateTo =
    (typeof window !== "undefined" &&
      sessionStorage
        .getItem("dateTo")
        ?.replace(/-/g, ".")
        .split(".")
        .reverse()
        .join(".")) ||
    "";

  const filteredFlightFrom = flightData.filter(
    (item) =>
      item.fromCity === cityFrom &&
      item.toCity === cityTo &&
      item.startFlightDate === dateFrom
  );

  const filteredFlightTo =
    dateTo !== "" &&
    flightData.filter(
      (item) =>
        item.fromCity === cityTo &&
        item.toCity === cityFrom &&
        item.startFlightDate === dateTo
    );

  useEffect(() => {
    typeof window !== "undefined" && setIsBrowser(true);
  });

  function backToMainPage() {
    resetData();

    router.push("/");
  }

  function resetData() {
    setIndexOfFlightFrom(0);
    setIndexOfFlightTo(0);
    sessionStorage.setItem("cityFrom", "");
    sessionStorage.setItem("cityTo", "");
    sessionStorage.setItem("dateFrom", "");
    sessionStorage.setItem("dateTo", "");
  }

  return (
    <>
      {isBrowser && filteredFlightFrom.length > 0 && (
        <>
          <div className={styles["result__container"]}>
            <div className={styles["result__tickets-container"]}>
              {isBrowser &&
                filteredFlightFrom.slice(indexOfFlightFrom).map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={styles["result__ticket-container"]}
                    >
                      <div className={styles["result__ticket-main-container"]}>
                        <div
                          className={
                            styles["result__ticket-avia-company-container"]
                          }
                        >
                          <div
                            className={
                              styles["result__ticket-avia-refund-container"]
                            }
                          >
                            <p className={styles["result__ticket-avia-refund"]}>
                              Невозвратный
                            </p>
                          </div>
                          <div
                            className={styles["result__ticket-avia-company"]}
                          >
                            <img
                              className={
                                styles["result__ticket-avia-company-image"]
                              }
                              src="./images/s7.png"
                              alt="Авиокомпания S7"
                            />
                            <p
                              className={
                                styles["result__ticket-avia-company-name"]
                              }
                            >
                              S7 Airlines
                            </p>
                          </div>
                        </div>
                        <div className={`${styles["result__info"]}`}>
                          <div className={styles["result__info-container"]}>
                            <div
                              className={
                                styles["result__ticket-time-container"]
                              }
                            >
                              <p className={styles["result__ticket-time"]}>
                                {item.startFlightTime}
                              </p>
                              <p className={styles["result__ticket-date"]}>
                                <span
                                  className={styles["result__ticket-date-span"]}
                                >
                                  {item.fromCity}
                                </span>
                                <br />
                                {item.startFlightDate}
                              </p>
                            </div>
                            <div
                              className={
                                styles["result__ticket-line-main-container"]
                              }
                            >
                              <div
                                className={
                                  styles["result__ticket-line-container"]
                                }
                              >
                                <div
                                  className={styles["result__ticket-airport"]}
                                >
                                  <p
                                    className={
                                      styles["result__ticket-airport-name"]
                                    }
                                  >
                                    {item.airportFromName}
                                  </p>
                                  <div
                                    className={
                                      styles["result__ticket-airport-dot"]
                                    }
                                  ></div>
                                </div>
                                <div
                                  className={
                                    styles["result__ticket-airport-line"]
                                  }
                                ></div>
                                <div
                                  className={styles["result__ticket-airport"]}
                                >
                                  <p
                                    className={
                                      styles["result__ticket-airport-name"]
                                    }
                                  >
                                    {item.airportToName}
                                  </p>
                                  <div
                                    className={
                                      styles["result__ticket-airport-dot"]
                                    }
                                  ></div>
                                </div>
                              </div>
                              <p
                                className={styles["result__ticket-time-on-way"]}
                              >
                                В пути {Math.round(item.flightTime / 60)} ч{" "}
                                {item.flightTime % 60 > 0 &&
                                  `${item.flightTime % 60} мин`}
                              </p>
                            </div>
                            <div
                              className={
                                styles["result__ticket-time-container"]
                              }
                            >
                              <p className={styles["result__ticket-time"]}>
                                {item.finishFlightTime}
                              </p>
                              <p className={styles["result__ticket-date"]}>
                                <span
                                  className={styles["result__ticket-date-span"]}
                                >
                                  {item.toCity}
                                </span>
                                <br />
                                {item.finishFlightDate}
                              </p>
                            </div>
                            <img
                              className={styles["result__ticket-luggage-image"]}
                              src="./images/luggage.svg"
                              alt="Багаж"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              {isBrowser &&
                dateTo !== "" &&
                filteredFlightTo &&
                filteredFlightTo.map((item) => {
                  return (
                    <div
                      key={item.id}
                      className={`${styles["result__ticket-container"]} ${styles["result__ticket-container_comeback"]}`}
                    >
                      <div className={styles["result__ticket-main-container"]}>
                        <div
                          className={
                            styles["result__ticket-avia-company-container"]
                          }
                        >
                          <div
                            className={`${styles["result__ticket-avia-refund-container"]} ${styles["result__ticket-avia-refund-container_comeback"]}`}
                          >
                            <p className={styles["result__ticket-avia-refund"]}>
                              Невозвратный
                            </p>
                          </div>
                          <div
                            className={styles["result__ticket-avia-company"]}
                          >
                            <img
                              className={
                                styles["result__ticket-avia-company-image"]
                              }
                              src="./images/s7.png"
                              alt="Авиокомпания S7"
                            />
                            <p
                              className={
                                styles["result__ticket-avia-company-name"]
                              }
                            >
                              S7 Airlines
                            </p>
                          </div>
                        </div>
                        <div
                          className={`${styles["result__info"]} ${
                            filteredFlightTo &&
                            filteredFlightTo.length > 1 &&
                            styles["result__info_options"]
                          }`}
                        >
                          <div className={styles["result__info-container"]}>
                            <div
                              className={
                                styles["result__ticket-time-container"]
                              }
                            >
                              <p className={styles["result__ticket-time"]}>
                                {item.startFlightTime}
                              </p>
                              <p className={styles["result__ticket-date"]}>
                                <span
                                  className={styles["result__ticket-date-span"]}
                                >
                                  {item.fromCity}
                                </span>
                                <br />
                                {item.startFlightDate}
                              </p>
                            </div>
                            <div
                              className={
                                styles["result__ticket-line-main-container"]
                              }
                            >
                              <div
                                className={
                                  styles["result__ticket-line-container"]
                                }
                              >
                                <div
                                  className={styles["result__ticket-airport"]}
                                >
                                  <p
                                    className={
                                      styles["result__ticket-airport-name"]
                                    }
                                  >
                                    {item.airportFromName}
                                  </p>
                                  <div
                                    className={
                                      styles["result__ticket-airport-dot"]
                                    }
                                  ></div>
                                </div>
                                <div
                                  className={
                                    styles["result__ticket-airport-line"]
                                  }
                                ></div>
                                <div
                                  className={styles["result__ticket-airport"]}
                                >
                                  <p
                                    className={
                                      styles["result__ticket-airport-name"]
                                    }
                                  >
                                    {item.airportToName}
                                  </p>
                                  <div
                                    className={
                                      styles["result__ticket-airport-dot"]
                                    }
                                  ></div>
                                </div>
                              </div>
                              <p
                                className={styles["result__ticket-time-on-way"]}
                              >
                                В пути {Math.round(item.flightTime / 60)} ч{" "}
                                {item.flightTime % 60 > 0 &&
                                  `${item.flightTime % 60} мин`}
                              </p>
                            </div>
                            <div
                              className={
                                styles["result__ticket-time-container"]
                              }
                            >
                              <p className={styles["result__ticket-time"]}>
                                {item.finishFlightTime}
                              </p>
                              <p className={styles["result__ticket-date"]}>
                                <span
                                  className={styles["result__ticket-date-span"]}
                                >
                                  {item.toCity}
                                </span>
                                <br />
                                {item.finishFlightDate}
                              </p>
                            </div>
                            <img
                              className={styles["result__ticket-luggage-image"]}
                              src="./images/luggage.svg"
                              alt="Багаж"
                            />
                          </div>
                          {filteredFlightTo && filteredFlightTo.length > 1 && (
                            <ul
                              className={
                                styles["result__ticket-options-container"]
                              }
                            >
                              <li
                                className={`${styles["result__ticket-option"]} ${styles["result__ticket-option_active"]}`}
                              >
                                <span
                                  className={
                                    styles["result__ticket-option-span"]
                                  }
                                >
                                  09:20
                                </span>
                                - 11:05
                              </li>
                              <li
                                className={`${styles["result__ticket-option"]}`}
                              >
                                <span
                                  className={
                                    styles["result__ticket-option-span"]
                                  }
                                >
                                  10:20
                                </span>
                                - 12:05
                              </li>
                              <li
                                className={`${styles["result__ticket-option"]}`}
                              >
                                <span
                                  className={
                                    styles["result__ticket-option-span"]
                                  }
                                >
                                  11:20
                                </span>
                                - 13:05
                              </li>
                            </ul>
                          )}
                        </div>
                      </div>
                    </div>
                  );
                })}
            </div>
            <div className={styles["result__ticket-price-container"]}>
              <p className={styles["result__ticket-price"]}>
                {isBrowser &&
                  !filteredFlightTo &&
                  filteredFlightFrom[indexOfFlightFrom].price}
                {isBrowser &&
                  filteredFlightTo &&
                  parseInt(filteredFlightFrom[indexOfFlightFrom].price) +
                    parseInt(filteredFlightTo[indexOfFlightTo].price)}{" "}
                ₽
              </p>
            </div>
          </div>
        </>
      )}
      {isBrowser && filteredFlightFrom.length === 0 && (
        <h4 className={styles["result__ticket-not-found"]}>
          К сожалению, по вашему запросу ничего не найдено
        </h4>
      )}
      <Button
        onClick={backToMainPage}
        variant="contained"
        sx={{ mt: 3, backgroundColor: "#5C87DB" }}
      >
        <ArrowBackIosIcon />
        Назад
      </Button>
    </>
  );
};

export default Result;
