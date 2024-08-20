import { ReactNode } from "react";
import styles from "./AppActionButton.module.css";

interface IAppActionButtonProps {
  iconUrl?: string;
  icon?: ReactNode;
  action?: string;
  marketName: string;
  url: string;
}

export default function AppActionButton(props: IAppActionButtonProps) {
  const { marketName, url, icon } = props;

  const handleClick = () => {
    if (url) {
      window.open(url, "_blank");
    }
  };
  return (
    <div className={styles.container} onClick={handleClick}>
      {icon && icon}
      <span className={styles.text}>{marketName}</span>
    </div>
  );
}
