import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Email:', email);
    console.log('Password:', password);

    // Redirect to the registration page
    window.location.href = '/register';
  };

  const handleSkip = () => {
    // Redirect to the navbar page
    window.location.href = '/navbar';
  };

  const handleRegisterRedirect = () => {
    // Redirect to the registration page
    window.location.href = '/register';
  };

  return (
    <Container>
      <Row className="justify-content-md-center mt-5">
        <Col xs={12} md={6}>
          <h1 className="mb-4" style={{ color: "#832729", fontWeight: "bold", textAlign: "center" }}>Login</h1>
          <Form>
            <Form.Group className="mb-3" controlId="email">
              <Form.Label>Email</Form.Label>
              <Form.Control 
                type="email" 
                placeholder="Enter email" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="password">
              <Form.Label>Password</Form.Label>
              <Form.Control 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Group>

            <Button 
              style={{backgroundColor: "#832729"}} 
              type="button" 
              onClick={handleLogin} 
              className="mb-3"
              block
            >
              Login
            </Button>
          </Form>
          <p>Don't have an account? <Link to="/register" onClick={handleRegisterRedirect}>Register now</Link></p>
          <p>Go to homepage.. <Link to="/navbar" onClick={handleSkip}>Skip</Link></p>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;
