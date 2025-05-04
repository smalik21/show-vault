"use client";

import { PresetColors } from "@/types/types";
import styles from "./button.module.scss";

type ButtonPropsType = {
  children?: React.ReactNode;
  textSize?: "sm" | "md" | "lg"; // 12px, 16px, 20px
  padding?: "sm" | "md"; // sm: (20px 5px), md: (30px 10px)
  borderRadius?: "sm" | "md" | "full"; // sm: 5px, md: 10px, full: 50px
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
  textSize = "md",
  padding = "sm",
  borderRadius = "md",
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
      className={`
        ${styles.button} 
        ${styles[textSize]} 
        ${styles[padding]} 
        ${styles[borderRadius]} 
        ${fullWidth ? styles.fullWidth : ""}  
        ${outline ? styles.outline : ""} 
        ${textColor ? styles[`text-${textColor}`] : ""} 
        ${bgColor && !outline ? styles[`bg-${bgColor}`] : ""} 
        ${outline && outlineColor ? styles[`outline-${outlineColor}`] : ""}
      `}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
