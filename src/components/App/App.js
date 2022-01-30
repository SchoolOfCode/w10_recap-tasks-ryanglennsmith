import css from "./App.module.css";
import PigeonBlog from "../PigeonBlog/PigeonBlog";
import LoginButton from "../LoginButton/LoginButton";
import LogoutButton from "../LogoutButton/LogoutButton";
import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

function App() {
  const { user, isAuthenticated, isLoading } = useAuth0();

  // if (isLoading) {
  //   return <div>Loading...</div>;
  // }

  return (
    <>
      <div className={css.header}>
        <div className={css.auth}>
          <LoginButton />
          <LogoutButton />
        </div>
        <div className={css.disappearLarge}>
          <h1 className={css.bigWords}>WikiPigeon</h1>
        </div>
      </div>
      {isAuthenticated && <PigeonBlog />}
    </>
  );
}

export default App;
