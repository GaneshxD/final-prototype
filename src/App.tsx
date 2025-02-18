import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import DashboardLayout from './components/dashboard/DashboardLayout';
import PremiumDashboard from './pages/PremiumDashboard';
import LoginForm from './components/auth/LoginForm';
import RegisterForm from './components/auth/RegisterForm';
import BackendNotification from './components/BackendNotification';

function App() {
  return (
    <Router>
      <BackendNotification />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/register" element={<RegisterForm />} />
        <Route path="/dashboard" element={<DashboardLayout />} />
        <Route path="/premium" element={<PremiumDashboard />} />
      </Routes>
    </Router>
  );
}

export default App;