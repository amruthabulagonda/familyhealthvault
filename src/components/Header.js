import React, { useState, useEffect, Component } from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../firebase';
import '../css/style.css';
const Header = ()  => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Check if a user is already logged in
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        setUser(userAuth);
      } else {
        setUser(null);
      }
    });

    return unsubscribe;
  }, []);

  const handleSignOut = () => {
    auth.signOut().then(() => {
      // User is signed out, redirect to login page
      navigate('/login');
      setUser(null);
    });
  };

    return (
    <header id="header" class="fixed-top">
        <link rel="stylesheet" href="../css/style.css" />
    <div class="container d-flex align-items-center">

      <h1 class="logo me-auto"><a href="/">Family Health Vault</a></h1>
      <nav id="navbar" class="navbar order-last order-lg-0">
      {user ? (
        <div class="items-list">
        <ul>
          <li><h4>Hello {user.displayName}</h4></li>
          <li><a class="nav-link scrollto active" href="/home">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a class="nav-link scrollto" href="/" onClick={handleSignOut}>Sign Out</a></li>
          </ul>
        </div>
      ) : (
        <div class="items-list">
          <ul>
          <li><a class="nav-link scrollto active" href="/">Home</a></li>
          <li><a class="nav-link scrollto" href="#about">About</a></li>
          <li><a class="nav-link scrollto" href="#services">Services</a></li>
          <li><a class="nav-link scrollto" href="#contact">Contact</a></li>
          <li><a class="nav-link scrollto" href="/login">Sign In</a></li>
          <li><a class="nav-link scrollto" href="/register">Sign Up</a></li>
          </ul>
        </div>
      )}
        <i class="bi bi-list mobile-nav-toggle"></i>
      </nav>
    </div>
  </header>
    );
}
export default Header;