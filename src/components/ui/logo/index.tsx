import { MovieProjectorIcon } from "@/lib/icons";
import styles from "./logo.module.scss";

const Logo = () => {
  return (
    <div className={styles.logo}>
      <MovieProjectorIcon />
      <div className={styles.title}>ShowVault</div>
    </div>
  );
};

export default Logo;
