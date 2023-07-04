import { useState } from "react";
import { CONVERSION_OPTIONS_ENUMS } from "../containers/Home/ConversionForm/Content";

const useConversion = () => {
  const [result, setResult] = useState(null);

  const convertIt = (convertFrom, convertTo, number) => {
    console.log(typeof number);
    if (
      convertFrom === CONVERSION_OPTIONS_ENUMS.DECIMAL &&
      convertTo === CONVERSION_OPTIONS_ENUMS.BINARY
    ) {
      if (number > 0 || number < 0) {
        const num = Number(number);
        if (typeof num === "number") {
          setResult(num.toString(2));
        } else {
          setResult("Enter a valid decimal number");
        }
      }
    } else if (
      convertFrom === CONVERSION_OPTIONS_ENUMS.DECIMAL &&
      convertTo === CONVERSION_OPTIONS_ENUMS.HEXA_DECIMAL
    ) {
      if (number > 0) {
        setResult(parseInt(number, 10).toString(16).toUpperCase());
      } else {
        setResult("Enter a valid decimal number");
      }
    } else if (
      convertFrom === CONVERSION_OPTIONS_ENUMS.DECIMAL &&
      convertTo === CONVERSION_OPTIONS_ENUMS.OCTAL
    ) {
      if (number > 0) {
        setResult(parseInt(number, 10).toString(8));
      } else {
        setResult("Enter a valid decimal number");
      }
    } else if (
      convertFrom === CONVERSION_OPTIONS_ENUMS.BINARY &&
      convertTo === CONVERSION_OPTIONS_ENUMS.DECIMAL
    ) {
      if (/^[01]+$/.test(number)) {
        setResult(parseInt(number, 2).toString(10));
      } else {
        setResult("enter a valid binary number");
      }
    } else if (
      convertFrom === CONVERSION_OPTIONS_ENUMS.BINARY &&
      convertTo === CONVERSION_OPTIONS_ENUMS.HEXA_DECIMAL
    ) {
      if (/^[01]+$/.test(number)) {
        setResult(parseInt(number, 2).toString(16).toUpperCase());
      } else {
        setResult("enter a vaild binary number");
      }
    } else if (
      convertFrom === CONVERSION_OPTIONS_ENUMS.BINARY &&
      convertTo === CONVERSION_OPTIONS_ENUMS.OCTAL
    ) {
      if (/^[01]+$/.test(number)) {
        setResult(parseInt(number, 2).toString(8));
      } else {
        setResult("enter a vaild binary number");
      }
    } else if (
      convertFrom === CONVERSION_OPTIONS_ENUMS.HEXA_DECIMAL &&
      convertTo === CONVERSION_OPTIONS_ENUMS.BINARY
    ) {
      if (/^[0-9A-Fa-f]+$/.test(number)) {
        setResult(parseInt(number, 16).toString(2));
      } else {
        setResult("Enter a valid hexa number");
      }
    } else if (
      convertFrom === CONVERSION_OPTIONS_ENUMS.HEXA_DECIMAL &&
      convertTo === CONVERSION_OPTIONS_ENUMS.DECIMAL
    ) {
      if (/^[0-9A-Fa-f]+$/.test(number)) {
        setResult(parseInt(number, 16).toString(10));
      } else {
        setResult("Enter a valid hexa number");
      }
    } else if (
      convertFrom === CONVERSION_OPTIONS_ENUMS.HEXA_DECIMAL &&
      convertTo === CONVERSION_OPTIONS_ENUMS.OCTAL
    ) {
      if (/^[0-9A-Fa-f]+$/.test(number)) {
        setResult(parseInt(number, 16).toString(8));
      } else {
        setResult("Enter a valid hexa number");
      }
    } else if (
      convertFrom === CONVERSION_OPTIONS_ENUMS.OCTAL &&
      convertTo === CONVERSION_OPTIONS_ENUMS.BINARY
    ) {
      if (/^[0-9]+$/.test(number)) {
        setResult(parseInt(number, 8).toString(2));
      } else {
        setResult("Enter a valid octal number");
      }
    } else if (
      convertFrom === CONVERSION_OPTIONS_ENUMS.OCTAL &&
      convertTo === CONVERSION_OPTIONS_ENUMS.DECIMAL
    ) {
      if (/^[0-9]+$/.test(number)) {
        setResult(parseInt(number, 8).toString(10));
      } else {
        setResult("Enter a valid octal number");
      }
    } else if (
      convertFrom === CONVERSION_OPTIONS_ENUMS.OCTAL &&
      convertTo === CONVERSION_OPTIONS_ENUMS.HEXA_DECIMAL
    ) {
      if (/^[0-9]+$/.test(number)) {
        setResult(parseInt(number, 8).toString(16).toUpperCase());
      } else {
        setResult("Enter a valid octal number");
      }
    }
  };

  return { result, convertIt };
};

export default useConversion;
