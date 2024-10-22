import { useEffect } from "react";
import "./App.css";
import { GA_ID } from "./contants/ga";
import AppInfo from "./page/AppInfo/AppInfo";
import ReactGA from "react-ga";

function App() {
  useEffect(() => {
    ReactGA.initialize(GA_ID);
    ReactGA.pageview(window.location.pathname + window.location.search);

    const handleRouteChange = () => {
      ReactGA.pageview(window.location.pathname + window.location.search);
    };

    window.addEventListener("popstate", handleRouteChange);

    return () => {
      window.removeEventListener("popstate", handleRouteChange);
    };
  }, []);

  return (
    <div>
      <AppInfo />
    </div>
  );
}

export default App;
