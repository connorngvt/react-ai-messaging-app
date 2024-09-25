import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import LoginRegisterPage from "./pages/LoginRegisterPage";
import MessagingPage from "./pages/MessagingPage";

function App() {
  // Hardcoded for now, replace with logic later
  const isAuthenticated = false;

  const ProtectedRoute = ({ children }) => {
    return isAuthenticated ? children : <Navigate to="/auth/login" />;
  };

  return (
    <Router>
      <ToastContainer position="bottom-right" autoClose={5000} />
      <Routes>
        <Route
          path="/"
          element={
            isAuthenticated ? (
              <Navigate to="/messaging" />
            ) : (
              <Navigate to="/auth/login" />
            )
          }
        />
        <Route path="/auth/*" element={<LoginRegisterPage />} />
        <Route
          path="/messaging"
          element={
            <ProtectedRoute>
              <MessagingPage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
