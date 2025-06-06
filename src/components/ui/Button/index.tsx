"use client";

import { BorderRadius, Padding, PresetColor, TextSize } from "@/types/types";
import styles from "./Button.module.scss";
import clsx from "clsx";

export type ButtonPropsType = {
  children?: React.ReactNode;
  textSize?: TextSize;
  padding?: Padding;
  borderRadius?: BorderRadius;
  textColor?: PresetColor;
  bgColor?: PresetColor;
  outlineColor?: PresetColor;
  fontWeight?: number;
  fullWidth?: boolean;
  disabled?: boolean;
  outline?: boolean;
  onClick?: () => void;
};

const Button = (vm: ButtonPropsType) => {
  return (
    <button
      className={clsx(
        styles.button,
        vm.textSize && styles[`text-${vm.textSize}`],
        vm.padding && styles[`padding-${vm.padding}`],
        vm.borderRadius && styles[`radius-${vm.borderRadius}`],
        vm.fullWidth && styles.fullWidth,
        vm.outline && styles.outline,
        vm.textColor && styles[`text-${vm.textColor}`],
        vm.bgColor && !vm.outline && styles[`bg-${vm.bgColor}`],
        vm.outline && vm.outlineColor && styles[`outline-${vm.outlineColor}`]
      )}
      style={{ fontWeight: vm.fontWeight }}
      onClick={vm.onClick}
      disabled={vm.disabled ?? false}
    >
      {vm.children}
    </button>
  );
};

export default Button;
