import { useContext } from "react";
import { loginContext } from "./context/loginContext";
import { switchThemeContext } from "./context/themeContext";
export const Second = () => {
  const p = useContext(switchThemeContext);
  const userInfo = useContext(loginContext);
  console.log(userInfo);
  if (userInfo.test.name === undefined) {
    console.log(" you are not authenicated");
  }

  console.log(p);
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
          <h1 style={{ backgroundColor: p.theme, color: "yellow" }}>
            I am FROM MP
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
