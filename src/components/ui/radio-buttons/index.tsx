import { RadioButtonsPropsType } from "@/types/propTypes";
import React from "react";
import Button from "../button";
import styles from "./radio-buttons.module.scss";

const RadioButtons = (vm: RadioButtonsPropsType) => {
  const handleButtonClick = (value: string) => {
    vm.setSelectedValue(value);
  };

  return (
    <div className={styles.radioButtons}>
      {vm.options.map((option) => {
        return (
          <Button
            key={`radio-btn-${option.value}`}
            onClick={() => handleButtonClick(option.value)}
            padding={vm.padding}
            textColor={vm.textColor}
            bgColor={
              vm.selectedValue === option.value ? vm.highlightColor : vm.bgColor
            }
            borderRadius={vm.borderRadius}
            textSize={vm.textSize}
            fontWeight={vm.fontWeight}
          >
            {option.label}
          </Button>
        );
      })}
    </div>
  );
};

export default RadioButtons;
