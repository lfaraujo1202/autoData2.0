import { PageDashboard } from "./Pages/Dashboard";
import { PageWatch } from "./Pages/Watch";
import { Home } from "./Pages/Home";
import { PageLogin } from "./Pages/Login";
import { PageRecovery } from "./Pages/Recovery";
import { PageSendToken } from "./Pages/SendToken";
import { RegisterPage } from "./Pages/Register";
import { AutoData } from "./Pages/AutoData";
import { Navigate, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence } from 'framer-motion'

// @ts-ignore
const PrivateRoute = ({ children, redirectTo }) => {
  const isAuthenticated = sessionStorage.getItem('userToken') !== null;
  return isAuthenticated ? children : <Navigate to={redirectTo} />
}

function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence>
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<AutoData />} />
        <Route path="/home" element={<PrivateRoute redirectTo="/login">
          <Home />
        </PrivateRoute>} />

        <Route path="/" element={<AutoData />} />
        <Route path="/dashboard" element={<PrivateRoute redirectTo="/login">
          <PageDashboard />
        </PrivateRoute>} />

        <Route path="/" element={<AutoData />} />
        <Route path="/watch" element={<PrivateRoute redirectTo="/login">
          <PageWatch />
        </PrivateRoute>} />

        <Route path="/create" element={<RegisterPage />} />
        <Route path="/login" element={<PageLogin />} />

        <Route path="/sendtoken" element={<PageSendToken />} />

        <Route path="/recovery/:recdata" element={<PageRecovery />} />

      </Routes>
    </AnimatePresence>
  )
}

export default AnimatedRoutes