import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
import { getAnalytics } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-analytics.js";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithRedirect,
  getRedirectResult,
  signInWithPopup,
} from "https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js";

import { useContext } from "react";
import { switchThemeContext } from "./context/themeContext";
import { loginContext } from "./context/loginContext";
import { Link } from "react-router-dom";
const Firstblacktheme = () => {
  const triggerGoogleSign = () => {
    const firebaseConfig = {
      apiKey: "AIzaSyBqmvdh6Va_iVmGWBkIfhQLWzzfOVvRvVU",
      authDomain: "pragati-project-6b84f.firebaseapp.com",
      projectId: "pragati-project-6b84f",
      storageBucket: "pragati-project-6b84f.appspot.com",
      messagingSenderId: "768066164436",
      appId: "1:768066164436:web:3eff85fd2eca1b1e9c8d41",
      measurementId: "G-5SQKCZB4T0",
    };
    const app = initializeApp(firebaseConfig);
    const auth = getAuth(app);
    const provider = new GoogleAuthProvider(app);
    const analytics = getAnalytics(app);
    signInWithPopup(auth, provider)
      .then((result) => {
        // This gives you a Google Access Token. You can use it to access the Google API.
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;

        // The signed-in user info.
        const user = result.user;

        const userProfile = {
          name: user.displayName,
          email: user.email,
          profile: user.photoURL,
        };
        test.setTestFunc(userProfile);
      })
      .catch((error) => {
        // Handle Errors here.
        const errorCode = error.code;
        const errorMessage = error.message;
        // The email of the user's account used.
        // const email = error.customData.email;
        // The AuthCredential type that was used.
        const credential = GoogleAuthProvider.credentialFromError(error);
        // ...
        alert(errorMessage);
      });
  };

  console.log("abc");
  const theme = useContext(switchThemeContext);
  const test = useContext(loginContext);
  console.log("ps", test);
  return (
    <>
      <h1 style={{ backgroundColor: theme.theme, color: "red" }}>
        MY NAME IS PRAGATI SHUKLA
      </h1>
      <button onClick={theme.toggleDarkMode}>THEME</button>

      <button onClick={triggerGoogleSign}>Google Sign-In</button>
      <Link to="/Second">Second</Link>
      <Link to="/third">Third</Link>
    </>
  );
};
export default Firstblacktheme;
