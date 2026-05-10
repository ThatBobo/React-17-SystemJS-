import React from 'react';
import { NavLink } from 'react-router-dom';

const styles = {
  container: {
    display: "flex",
    gap: "16px",
    padding: "12px 16px",
    background: "#1e1e1e"
  },
  link: {
    color: "white",
    textDecoration: "none",
    fontSize: "16px"
  },
  active: {
    fontWeight: "bold"
  }
};

export default function NavBar() {
  return (
    <div style={styles.container}>
      <NavLink exact to="/index.html" style={styles.link} activeStyle={styles.active} onMouseEnter={e => e.target.style.textDecoration = "underline"} onMouseLeave={e => e.target.style.textDecoration = "none"}>Home</NavLink>
      <NavLink exact to="/index.html/login" style={styles.link} activeStyle={styles.active} onMouseEnter={e => e.target.style.textDecoration = "underline"} onMouseLeave={e => e.target.style.textDecoration = "none"}>Login</NavLink>
    </div>
  );
}