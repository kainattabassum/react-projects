import React from "react";
import UserContextProvider from "./context/UserContextProvider";
import { Login, Profile } from "./components";

function App() {
  return (
    <UserContextProvider>
      <h1>App</h1>

      <Login />
      <Profile />
    </UserContextProvider>
  );
}

export default App;
