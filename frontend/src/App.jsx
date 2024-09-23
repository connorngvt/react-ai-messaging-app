import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import LoginRegisterPage from "./pages/LoginRegisterPage";

function App() {

  const isAuthenticated = false;

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/messaging" />
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/*" element={<LoginRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
