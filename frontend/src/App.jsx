<<<<<<< HEAD
import React from "react"
import LoginForm from "./LoginForm"
import './LoginForm.css'

function App() {
=======
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LoginRegisterPage from "./pages/LoginRegisterPage";
>>>>>>> 8bc4442dfa8d854743c59d0837e8574e21465a84

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
