import { useMemo } from "react";
import AppActionButton from "../../components/AppActionButton/AppActionButton";
import AppleIcon from "@mui/icons-material/Apple";
import ShopIcon from "@mui/icons-material/Shop";
import styles from "./AppInfo.module.css";
import logo from "./../../assets/logo.png";
import bg_2 from "./../../assets/bg_2.jpeg";
import bg_1 from "./../../assets/bg_1.jpeg";

export default function AppInfo() {
  const randomBackground = useMemo(() => {
    const backgroundimages = [bg_2, bg_1];
    const randomIndex = Math.floor(Math.random() * backgroundimages.length);
    return backgroundimages[randomIndex];
  }, []);

  return (
    <div
      className={styles.container}
      style={{
        backgroundImage: `url('${randomBackground}')`,
      }}
    >
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
