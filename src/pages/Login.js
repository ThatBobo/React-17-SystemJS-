import React from 'react';

export default function Login() {
  
  function handleLogin() {
    const emailField = document.getElementById('email');
    const usernameField = document.getElementById('username');
    const passwordField = document.getElementById('password');
    
    alert("Login not implemented yet!");
    console.log(emailField.value, usernameField.value, passwordField.value);
  }
  
  return (
    <div>
      <h1>Login</h1>

      <input type="email" placeholder="Email" id="email" />
      <input type="text" placeholder="Username" id="username" />
      <input type="password" placeholder="Password" id="password" />

      <button id="login" onClick={handleLogin}>Login</button>
    </div>
  );
}