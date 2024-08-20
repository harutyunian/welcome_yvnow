import AppActionButton from "../../components/AppActionButton/AppActionButton";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import styles from "./AppInfo.module.css";
import logo from "./../../assets/logo.png";

export default function AppInfo() {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <div>
          <img src={logo} alt="Yvnow" className={styles.logo} />
        </div>
        <AppActionButton
          url="https://apps.apple.com/am/app/yvnow/id6502640274"
          marketName="App Store"
          icon={<AppleIcon style={{ color: "white" }} />}
        />

        <AppActionButton
          url="https://play.google.com/store/apps/details?id=com.yvnow&hl=en_US"
          marketName="Play Market"
          icon={<ShopIcon style={{ color: "white" }} />}
        />
      </div>
    </div>
  );
}
