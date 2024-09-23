
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRegisterPage from "./pages/LoginRegisterPage";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="*" element={<LoginRegisterPage />} />
      </Routes>
    </Router>
  );
}

export default App;
