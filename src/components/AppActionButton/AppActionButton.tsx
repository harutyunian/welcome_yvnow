import { ReactNode } from "react";
import styles from "./AppActionButton.module.css";
import ReactGA from "react-ga";

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
    ReactGA.event({
      category: "Button",
      action: `Clicked ${marketName} Button`,
      label: marketName,
    });
  };
  return (
    <div className={styles.container} onClick={handleClick}>
      {icon && icon}
      <span className={styles.text}>{marketName}</span>
    </div>
  );
}
