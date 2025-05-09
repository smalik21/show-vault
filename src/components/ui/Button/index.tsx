"use client";

import { PresetColors } from "@/types/types";
import styles from "./button.module.scss";
import clsx from "clsx";

type ButtonPropsType = {
  children?: React.ReactNode;
  textSize?: "xs" | "sm" | "md" | "lg";
  padding?: "sm" | "md";
  borderRadius?: "sm" | "md" | "full";
  textColor?: PresetColors;
  bgColor?: PresetColors;
  outlineColor?: PresetColors;
  fullWidth?: boolean;
  onClick?: () => void;
  disabled?: boolean;
  outline?: boolean;
};

const Button = ({
  children,
  textSize,
  padding,
  borderRadius,
  textColor,
  bgColor,
  outlineColor,
  fullWidth = false,
  onClick,
  disabled = false,
  outline = false,
}: ButtonPropsType) => {
  return (
    <button
      className={clsx(
        styles.button,
        textSize && styles[`text-${textSize}`],
        padding && styles[`padding-${padding}`],
        borderRadius && styles[`radius-${borderRadius}`],
        fullWidth && styles.fullWidth,
        outline && styles.outline,
        textColor && styles[`text-${textColor}`],
        bgColor && !outline && styles[`bg-${bgColor}`],
        outline && outlineColor && styles[`outline-${outlineColor}`]
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
