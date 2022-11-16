import styles from "./Result.module.css";

const Result = () => {
  return (
    <div className={styles["result__container"]}>
      <div className={styles["result__tickets-container"]}>
        <div className={styles["result__ticket-container"]}>
          <div className={styles["result__ticket-main-container"]}>
            <div className={styles["result__ticket-avia-company-container"]}>
              <div className={styles["result__ticket-avia-refund-container"]}>
                <p className={styles["result__ticket-avia-refund"]}>
                  Невозвратный
                </p>
              </div>
              <div className={styles["result__ticket-avia-company"]}>
                <img
                  className={styles["result__ticket-avia-company-image"]}
                  src="./images/s7.png"
                  alt="Авиокомпания S7"
                />
                <p className={styles["result__ticket-avia-company-name"]}>
                  S7 Airlines
                </p>
              </div>
            </div>
            <div className={`${styles["result__info"]}`}>
              <div className={styles["result__info-container"]}>
                <div className={styles["result__ticket-time-container"]}>
                  <p className={styles["result__ticket-time"]}>22:57</p>
                  <p className={styles["result__ticket-date"]}>
                    <span className={styles["result__ticket-date-span"]}>
                      Москва
                    </span>
                    <br />
                    19.05.2022
                  </p>
                </div>
                <div className={styles["result__ticket-line-main-container"]}>
                  <div className={styles["result__ticket-line-container"]}>
                    <div className={styles["result__ticket-airport"]}>
                      <p className={styles["result__ticket-airport-name"]}>
                        SVO
                      </p>
                      <div
                        className={styles["result__ticket-airport-dot"]}
                      ></div>
                    </div>
                    <div
                      className={styles["result__ticket-airport-line"]}
                    ></div>
                    <div className={styles["result__ticket-airport"]}>
                      <p className={styles["result__ticket-airport-name"]}>
                        ROV
                      </p>
                      <div
                        className={styles["result__ticket-airport-dot"]}
                      ></div>
                    </div>
                  </div>
                  <p className={styles["result__ticket-time-on-way"]}>
                    В пути 1 ч 55 мин
                  </p>
                </div>
                <div className={styles["result__ticket-time-container"]}>
                  <p className={styles["result__ticket-time"]}>11:05</p>
                  <p className={styles["result__ticket-date"]}>
                    <span className={styles["result__ticket-date-span"]}>
                      Ростов на Дону
                    </span>
                    <br />
                    19.05.2022
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

        <div
          className={`${styles["result__ticket-container"]} ${styles["result__ticket-container_comeback"]}`}
        >
          <div className={styles["result__ticket-main-container"]}>
            <div className={styles["result__ticket-avia-company-container"]}>
              <div
                className={`${styles["result__ticket-avia-refund-container"]} ${styles["result__ticket-avia-refund-container_comeback"]}`}
              >
                <p className={styles["result__ticket-avia-refund"]}>
                  Невозвратный
                </p>
              </div>
              <div className={styles["result__ticket-avia-company"]}>
                <img
                  className={styles["result__ticket-avia-company-image"]}
                  src="./images/s7.png"
                  alt="Авиокомпания S7"
                />
                <p className={styles["result__ticket-avia-company-name"]}>
                  S7 Airlines
                </p>
              </div>
            </div>
            <div
              className={`${styles["result__info"]} ${styles["result__info_options"]}`}
            >
              <div className={styles["result__info-container"]}>
                <div className={styles["result__ticket-time-container"]}>
                  <p className={styles["result__ticket-time"]}>22:57</p>
                  <p className={styles["result__ticket-date"]}>
                    <span className={styles["result__ticket-date-span"]}>
                      Москва
                    </span>
                    <br />
                    19.05.2022
                  </p>
                </div>
                <div className={styles["result__ticket-line-main-container"]}>
                  <div className={styles["result__ticket-line-container"]}>
                    <div className={styles["result__ticket-airport"]}>
                      <p className={styles["result__ticket-airport-name"]}>
                        SVO
                      </p>
                      <div
                        className={styles["result__ticket-airport-dot"]}
                      ></div>
                    </div>
                    <div
                      className={styles["result__ticket-airport-line"]}
                    ></div>
                    <div className={styles["result__ticket-airport"]}>
                      <p className={styles["result__ticket-airport-name"]}>
                        ROV
                      </p>
                      <div
                        className={styles["result__ticket-airport-dot"]}
                      ></div>
                    </div>
                  </div>
                  <p className={styles["result__ticket-time-on-way"]}>
                    В пути 1 ч 55 мин
                  </p>
                </div>
                <div className={styles["result__ticket-time-container"]}>
                  <p className={styles["result__ticket-time"]}>11:05</p>
                  <p className={styles["result__ticket-date"]}>
                    <span className={styles["result__ticket-date-span"]}>
                      Ростов на Дону
                    </span>
                    <br />
                    19.05.2022
                  </p>
                </div>
                <img
                  className={styles["result__ticket-luggage-image"]}
                  src="./images/luggage.svg"
                  alt="Багаж"
                />
              </div>
              <ul className={styles["result__ticket-options-container"]}>
                <li
                  className={`${styles["result__ticket-option"]} ${styles["result__ticket-option_active"]}`}
                >
                  <span className={styles["result__ticket-option-span"]}>
                    09:20
                  </span>
                  - 11:05
                </li>
                <li className={`${styles["result__ticket-option"]}`}>
                  <span className={styles["result__ticket-option-span"]}>
                    10:20
                  </span>
                  - 12:05
                </li>
                <li className={`${styles["result__ticket-option"]}`}>
                  <span className={styles["result__ticket-option-span"]}>
                    11:20
                  </span>
                  - 13:05
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className={styles["result__ticket-price-container"]}>
        <p className={styles["result__ticket-price"]}>4 150 ₽</p>
      </div>
    </div>
  );
};

export default Result;
