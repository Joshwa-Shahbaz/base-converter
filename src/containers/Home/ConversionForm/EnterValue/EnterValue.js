import React, { useEffect, useState } from "react";

// Styles
import styles from "./Entervalue.module.css";

// content
import { CONVERSION_OPTIONS_ENUMS } from "../Content";

const EnterValue = (props) => {
  const [enteredNumber, setEnteredNumber] = useState(0);
  const [result, setResult] = useState(null);
  const [check, setCheck] = useState("");

  const answerButtonHandler = (number) => {
    console.log(typeof number);
    if (
      props.convertFrom === CONVERSION_OPTIONS_ENUMS.DECIMAL &&
      props.convertTo === CONVERSION_OPTIONS_ENUMS.BINARY
    ) {
      if (number > 0) {
        setResult(parseInt(number, 10).toString(2));
      } else {
        setResult("Enter a valid decimal number");
      }
    } else if (
      props.convertFrom === CONVERSION_OPTIONS_ENUMS.DECIMAL &&
      props.convertTo === CONVERSION_OPTIONS_ENUMS.HEXA_DECIMAL
    ) {
      if (number > 0) {
        setResult(parseInt(number, 10).toString(16).toUpperCase());
      } else {
        setResult("Enter a valid decimal number");
      }
    } else if (
      props.convertFrom === CONVERSION_OPTIONS_ENUMS.DECIMAL &&
      props.convertTo === CONVERSION_OPTIONS_ENUMS.OCTAL
    ) {
      if (number > 0) {
        setResult(parseInt(number, 10).toString(8));
      } else {
        setResult("Enter a valid decimal number");
      }
    } else if (
      props.convertFrom === CONVERSION_OPTIONS_ENUMS.BINARY &&
      props.convertTo === CONVERSION_OPTIONS_ENUMS.DECIMAL
    ) {
      if (/^[01]+$/.test(number)) {
        setResult(parseInt(number, 2).toString(10));
      } else {
        setResult("enter a valid binary number");
      }
    } else if (
      props.convertFrom === CONVERSION_OPTIONS_ENUMS.BINARY &&
      props.convertTo === CONVERSION_OPTIONS_ENUMS.HEXA_DECIMAL
    ) {
      if (/^[01]+$/.test(number)) {
        setResult(parseInt(number, 2).toString(16).toUpperCase());
      } else {
        setResult("enter a vaild binary number");
      }
    } else if (
      props.convertFrom === CONVERSION_OPTIONS_ENUMS.BINARY &&
      props.convertTo === CONVERSION_OPTIONS_ENUMS.OCTAL
    ) {
      if (/^[01]+$/.test(number)) {
        setResult(parseInt(number, 2).toString(8));
      } else {
        setResult("enter a vaild binary number");
      }
    } else if (
      props.convertFrom === CONVERSION_OPTIONS_ENUMS.HEXA_DECIMAL &&
      props.convertTo === CONVERSION_OPTIONS_ENUMS.BINARY
    ) {
      if (/^[0-9A-Fa-f]+$/.test(number)) {
        setResult(parseInt(number, 16).toString(2));
      } else {
        setResult("Enter a valid hexa number");
      }
    } else if (
      props.convertFrom === CONVERSION_OPTIONS_ENUMS.HEXA_DECIMAL &&
      props.convertTo === CONVERSION_OPTIONS_ENUMS.DECIMAL
    ) {
      if (/^[0-9A-Fa-f]+$/.test(number)) {
        setResult(parseInt(number, 16).toString(10));
      } else {
        setResult("Enter a valid hexa number");
      }
    } else if (
      props.convertFrom === CONVERSION_OPTIONS_ENUMS.HEXA_DECIMAL &&
      props.convertTo === CONVERSION_OPTIONS_ENUMS.OCTAL
    ) {
      if (/^[0-9A-Fa-f]+$/.test(number)) {
        setResult(parseInt(number, 16).toString(8));
      } else {
        setResult("Enter a valid hexa number");
      }
    } else if (
      props.convertFrom === CONVERSION_OPTIONS_ENUMS.OCTAL &&
      props.convertTo === CONVERSION_OPTIONS_ENUMS.BINARY
    ) {
      if (/^[0-9]+$/.test(number)) {
        setResult(parseInt(number, 8).toString(2));
      } else {
        setResult("Enter a valid octal number");
      }
    } else if (
      props.convertFrom === CONVERSION_OPTIONS_ENUMS.OCTAL &&
      props.convertTo === CONVERSION_OPTIONS_ENUMS.DECIMAL
    ) {
      if (/^[0-9]+$/.test(number)) {
        setResult(parseInt(number, 8).toString(10));
      } else {
        setResult("Enter a valid octal number");
      }
    } else if (
      props.convertFrom === CONVERSION_OPTIONS_ENUMS.OCTAL &&
      props.convertTo === CONVERSION_OPTIONS_ENUMS.HEXA_DECIMAL
    ) {
      if (/^[0-9]+$/.test(number)) {
        setResult(parseInt(number, 8).toString(16).toUpperCase());
      } else {
        setResult("Enter a valid octal number");
      }
    }
  };

  useEffect(() => {
    setCheck(props.convertTo);
  }, [props.convertTo]);

  return (
    <>
      {/* entering value section */}
      <div className={styles.enter}>
        <div className={styles.center}>
          <label className={styles.from}>Enter a {props.convertFrom}: </label>
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
            onClick={() => answerButtonHandler(enteredNumber)}
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
