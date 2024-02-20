import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard";
import DashboardLayout from "./layouts/dashboard";
import { ThemeProvider } from "@emotion/react";
import { Theme } from "./theme/MvTheme";
import "./assets/css/style.css";
import UserAdd from "./pages/UserAdd";

function App() {
  return (
    <>
      <ThemeProvider theme={Theme}>
        <Router>
          <Routes>
            <Route element={<DashboardLayout />}>
              <Route path="/" exact element={<Home />} />
              <Route path="/dashboard" exact element={<Dashboard />} />
              <Route path="/user" exact element={<UserAdd />} />
            </Route>
          </Routes>
        </Router>
      </ThemeProvider>
    </>
  );
}

export default App;
