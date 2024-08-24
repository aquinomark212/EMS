import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import FrontPage from "./pages/FrontPage.jsx";
import LoginPage from "./pages/LoginPage.jsx"; // Ensure this path is correct
import RegistrationPage from "./pages/RegistrationPage.jsx"; // Ensure this path is correct
import PrivateRoute from "./privateRoute.js"; // Ensure this path is correct
import DashboardPage from "./pages/DashboardPage.jsx"; // Ensure this path is correct

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<FrontPage />} />
          <Route path="/api/login" element={<LoginPage />} />
          <Route path="/api/registration" element={<RegistrationPage />} />
          <Route
            path="/dashboard"
            element={
              <PrivateRoute>
                <DashboardPage />
              </PrivateRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
