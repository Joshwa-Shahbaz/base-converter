import React, { useState } from "react";

// Styles
import styles from "./index.module.css";

// Components
import EnterValue from "./EnterValue/EnterValue";

// Content
import { conversionOptions } from "./Content";

const ConversionFrom = () => {
  const [convertFrom, setConvertFrom] = useState("value");
  const [convertTo, setConvertTo] = useState("value");

  const submitHandler = (event) => {
    event.preventDefault();
  };

  const convertFromHandler = (e) => {
    setConvertFrom(e.target.value);
  };

  const convertToHandler = (e) => {
    setConvertTo(e.target.value);
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <div className={styles.flex}>
          <div className={styles.check}>
            <label className={styles.label}>From: </label>
            <select onChange={convertFromHandler}>
              <option value="value">Select Any Number System</option>
              {conversionOptions.map((item) => {
                return <option value={item.value}>{item.title}</option>;
              })}
            </select>
          </div>
          <div className={styles.check}>
            <label className={styles.labeltwo}>To: </label>
            <select onChange={convertToHandler}>
              <option value="any number">Select Any Number System</option>
              {conversionOptions.map((item) => {
                return <option value={item.value}>{item.title}</option>;
              })}
            </select>
          </div>
        </div>
        <EnterValue convertFrom={convertFrom} convertTo={convertTo} />
      </form>
    </>
  );
};

export default ConversionFrom;
