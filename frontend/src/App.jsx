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
import { useUserStore } from "./lib/userStore";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./lib/firebase";

function App() {

  const {currentUser, isLoading, fetchUserInfo} = useUserStore();

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, (user) => {
      fetchUserInfo(user?.uid);
    })

    return () => {
      unSub();
    }
  }, [fetchUserInfo]);

  if (isLoading) return <div className="loading">Loading...</div>

  const ProtectedRoute = ({ children }) => {
    return currentUser ? children : <Navigate to="/auth/login" />;
  };

  return (
    <Router>
      <ToastContainer position="bottom-right" autoClose={5000} />
      <Routes>
        <Route
          path="/"
          element={
            currentUser ? (
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
