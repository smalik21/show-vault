import { RadioButtonsPropsType } from "@/types/propTypes";
import React from "react";
import Button from "../button";
import styles from "./radio-buttons.module.scss";

const RadioButtons = ({
  selectedValue,
  setSelectedValue,
  padding,
  options,
  textColor,
  bgColor,
  highlightColor,
  borderRadius,
  textSize,
  fontWeight,
}: RadioButtonsPropsType) => {
  const handleButtonClick = (value: string) => {
    setSelectedValue(value);
  };

  return (
    <div className={styles.radioButtons}>
      {options.map((option) => {
        return (
          <Button
            key={`radio-btn-${option.value}`}
            onClick={() => handleButtonClick(option.value)}
            padding={padding}
            textColor={textColor}
            bgColor={selectedValue === option.value ? highlightColor : bgColor}
            borderRadius={borderRadius}
            textSize={textSize}
            fontWeight={fontWeight}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
};

export default RadioButtons;
