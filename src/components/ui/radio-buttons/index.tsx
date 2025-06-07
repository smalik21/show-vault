import React from "react";
import Button from "../button";
import styles from "./radio-buttons.module.scss";
import {
  BorderRadius,
  Option,
  Padding,
  PresetColor,
  TextSize,
} from "@/types/types";

export type RadioButtonsPropsType = {
  selectedValue: string;
  setSelectedValue: (value: string) => void;
  options: Option[];
  textColor?: PresetColor;
  bgColor?: PresetColor;
  highlightColor?: PresetColor;
  borderRadius?: BorderRadius;
  padding?: Padding;
  textSize?: TextSize;
  fontWeight?: number;
};

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
