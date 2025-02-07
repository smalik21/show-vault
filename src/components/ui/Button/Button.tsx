"use client";

import styles from "./Button.module.scss";

type ButtonPropsType = {
  children: React.ReactNode;
  textSize?: "sm" | "md" | "lg"; // 12px, 16px, 20px
  padding?: "sm" | "md"; // sm: (20px 5px), md: (30px 10px)
  borderRadius?: "sm" | "md" | "full"; // sm: 5px, md: 10px, full: 50px
  textColor?: string; // Custom text color
  bgColor?: string; // Custom background color
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
      `}
      style={{
        color: textColor,
        backgroundColor: outline ? "transparent" : bgColor,
      }}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
