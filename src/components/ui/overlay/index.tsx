import { useEffect } from "react";
import styles from "./overlay.module.scss";

type OverlayProps = {
  children: React.ReactNode;
  onClickOutside?: () => void;
};

const Overlay = ({ children, onClickOutside }: OverlayProps) => {
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  return (
    <div className={styles.overlay} onClick={onClickOutside}>
      <div
        className={styles.overlayContent}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>
  );
};

export default Overlay;
