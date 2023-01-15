import { useContext } from "react";
import { loginContext } from "./context/loginContext";
import { switchThemeContext } from "./context/themeContext";
export const Third = () => {
  const third = useContext(switchThemeContext);
  const userInfo = useContext(loginContext);
  console.log(userInfo);
  if (userInfo.test.name === undefined) {
    console.log(" you are not authenicated");
  }

  console.log(third);
  return (
    <>
      {userInfo.test.name === undefined ? (
        <>
          <h1>not authenicated</h1>
          <redirect to="/" />
        </>
      ) : (
        <div>
          <h1>authenicated</h1>
          <h1 style={{ backgroundColor: third.theme, color: "green" }}>
            I Am from INDIA
          </h1>
          <h3>User Name:{userInfo.test.name}</h3>
          <h3>User Email:{userInfo.test.email}</h3>
          <h3>
            User Profile:{userInfo.test.PhotoURL}
            <img src={userInfo.test.profile} />
          </h3>
        </div>
      )}
    </>
  );
};
