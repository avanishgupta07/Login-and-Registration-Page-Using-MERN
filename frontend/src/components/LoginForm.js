import React, { useState } from 'react';
import { Form, Button, Card, Alert } from 'react-bootstrap';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import './LoginForm.css';  // Import the custom CSS file

function LoginForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    try {
      const response = await axios.post('http://localhost:5000/api/login', { email, password });
      localStorage.setItem('user', JSON.stringify(response.data));
      navigate('/users');
    } catch (error) {
      setError(error.response?.data?.error || 'Login failed');
    }
  };

  return (
    <div className="login-container">
      <Card className="login-card mx-auto">
        <Card.Body>
          <Card.Title className="text-center mb-4">Sign In</Card.Title>
        
          <div className="profile-icon">👤</div>
          
          {error && <Alert variant="danger">{error}</Alert>}
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
              <Form.Control 
                type="email" 
                placeholder="Email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required 
              />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password} 
                onChange={(e) => setPassword(e.target.value)} 
                required 
              />
            </Form.Group>
            <div className="d-flex justify-content-between align-items-center mb-3">
              <Form.Check type="checkbox" label="Remember me" />
              <Link to="/forgot-password" className="text-link">Forgot your password?</Link>
            </div>
            <Button variant="primary" type="submit" className="w-100">Login</Button>
          </Form>
          <div className="text-center mt-3">
            Don't have an account? <Link to="/register" className="text-link">Register here</Link>
          </div>
        </Card.Body>
      </Card>
    </div>
  );
}

export default LoginForm;
