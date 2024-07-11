import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import LoginForm from './components/LoginForm';
import RegisterForm from './components/RegisterForm';
import UserTable from './components/UserTable';
import 'bootstrap/dist/css/bootstrap.min.css';

function PrivateRoute({ children }) {
  return localStorage.getItem('user') ? children : <Navigate to="/login" replace />;
}

function App() {
  return (
    <Router>
      <div className="container mt-5">
        <Routes>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegisterForm />} />
          <Route path="/users" element={
            <PrivateRoute>
              <UserTable />
            </PrivateRoute>
          } />
          <Route path="/" element={<Navigate to="/login" replace />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;