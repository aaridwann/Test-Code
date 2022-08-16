import React from "react";
import AuthProvider from "./Context/AuthContext";
import Router from "./Router";

function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
