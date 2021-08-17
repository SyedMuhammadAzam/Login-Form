import React, { useState, useEffect } from "react";

import Login from "./components/Login/Login";
import Home from "./components/Home/Home";
import MainHeader from "./components/MainHeader/MainHeader";
import Navigation from "./components/MainHeader/Navigation";
import AuthContext from "./components/Login/Context/auth-context";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(
    () => {
      const UserLoggedInInformation = localStorage.getItem("isLoggedIn");

      if (UserLoggedInInformation === "1") {
        setIsLoggedIn(true);
      }
    },
    [
      //array of dependencies ....
    ]
  );

  const loginHandler = (email, password) => {
    // We should of course check email and password
    // But it's just a dummy/ demo anyways
    setIsLoggedIn(true);
    localStorage.setItem("isLoggedIn", "1");
  };

  const logoutHandler = () => {
    setIsLoggedIn(false);
    localStorage.removeItem("isLoggedIn");
  };

  return (
     
      <AuthContext.Provider 
          value={{
            isLoggedIn : isLoggedIn,
            onLogout : logoutHandler
          }}
        >
      <MainHeader 
     // isAuthenticated={isLoggedIn}
       // onLogout={logoutHandler}
        />
      <main>
        {!isLoggedIn && <Login onLogin={loginHandler} />}
        {isLoggedIn && <Home onLogout={logoutHandler} />}
      </main>
      </AuthContext.Provider>
    
  );
}

export default App;
