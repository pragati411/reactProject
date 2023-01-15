import { useContext } from "react";
import { switchThemeContext } from "./routes";
export const Btn = () => {
  const theme = useContext(switchThemeContext);

  return (
    <>
      <button onClick={theme.toggleDarkMode}>theme</button>
    </>
  );
};
