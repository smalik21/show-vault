"use client";

import { ButtonPropsType } from "@/types/propTypes";
import styles from "./button.module.scss";
import clsx from "clsx";

const Button = ({
  children,
  textSize,
  padding,
  borderRadius,
  textColor,
  bgColor,
  outlineColor,
  fontWeight,
  fullWidth = false,
  disabled = false,
  outline = false,
  onClick,
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
      style={{ fontWeight: fontWeight }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
