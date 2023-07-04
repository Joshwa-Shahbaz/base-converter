import React, { useEffect, useState } from "react";

// Styles
import styles from "./index.module.css";

// content

import useConversion from "./useConversion";

const EnterValue = ({ convertFrom, convertTo }) => {
  const [enteredNumber, setEnteredNumber] = useState(0);
  const [check, setCheck] = useState("");

  const { convertIt, result } = useConversion({});

  useEffect(() => {
    setCheck(convertTo);
  }, [convertTo]);

  return (
    <>
      {/* entering value section */}
      <div className={styles.enter}>
        <div className={styles.center}>
          <label className={styles.from}>Enter a {convertFrom}: </label>
        </div>
        <div className={styles.center}>
          <input
            className={styles.enternumber}
            type="text"
            placeholder="Enter a number"
            value={enteredNumber}
            onChange={(e) => setEnteredNumber(e.target.value)}
          />
          <button
            className={styles.enterbutton}
            onClick={() => convertIt(convertFrom, convertTo, enteredNumber)}
          >
            Submit
          </button>
        </div>
      </div>

      {/* ******************************* */}

      <div className={styles.enter}>
        <div className={styles.center}>
          <label className={styles.from}>Obtained {check}: </label>
        </div>
        <div className={styles.center}>
          <input
            className={styles.enternumber}
            type="text"
            value={result || ""}
          />
        </div>
      </div>
    </>
  );
};

export default EnterValue;
