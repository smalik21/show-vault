import ThemeSwitcher from "@/components/ui/ThemeSwitcher/ThemeSwitcher";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.main}>
      <ThemeSwitcher />
    </div>
  );
}
