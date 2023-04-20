import React, { useState } from "react";
import "../css/formstyle.css"; // import the CSS file
import { auth, firestore} from "../firebase";
import firebase from 'firebase/compat/app';
import Header from "./Header";
import { useNavigate } from "react-router-dom";

function RegistrationPage() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const [emailExists, setEmailExists] = useState(false);
  const navigate = useNavigate();

  async function checkEmailExists(email) {
    try {
      const methods = await firebase.auth().fetchSignInMethodsForEmail(email);
      return methods.length > 0;
    } catch (error) {
      console.error(error);
      return false;
    }
  }

  async function handleEmailChange(event) {
    setEmail(event.target.value);
    setEmailExists(await checkEmailExists(event.target.value));
  }

  const handlePasswordChange = (event) => {
    const { value } = event.target;
    setPassword(value);

    if (value.length < 6) {
      setPasswordError("Password must be at least 6 characters long.");
    } else {
      setPasswordError("");
    }
  };

  const handleConfirmPasswordChange = (event) => {
    const { value } = event.target;
    setConfirmPassword(value);

    if (value !== password) {
      setConfirmPasswordError("Passwords do not match.");
    } else {
      setConfirmPasswordError("");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    // handle form submission logic here
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await userCredential.user.updateProfile({
        displayName : firstName
      });
      console.log(userCredential);
      navigate("/login");
      await firestore.collection("users").doc(userCredential.uid).set({
        email: userCredential.user.email,
      });
      // optional: redirect to a success page
    } catch (error) {
      console.error(error);
      // optional: display an error message
    }
  };

  return (
    <div>
      <Header/>
    <div className="form-container">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />

        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />

        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => {setEmail(e.target.value); handleEmailChange(e)}}
          required
        />
        {emailExists && <p style={{color:"red"}}>This email is already in use.</p>}

        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => {setPassword(e.target.value); handlePasswordChange(e)}}
          required
        />
        <div style={{ color: "red" }}>{passwordError}</div>

        <label htmlFor="confirmPassword">Confirm Password:</label>
        <input
          type="password"
          id="confirmPassword"
          value={confirmPassword}
          onChange={(e) => {setConfirmPassword(e.target.value); handleConfirmPasswordChange(e)}}
          required
        />
        <div style={{ color: "red" }}>{confirmPasswordError}</div>

        <button type="submit">Submit</button>

        <p class="text-center text-muted mt-5 mb-0">Have already an account? &nbsp;
        <a href="/login" class="fw-bold text-body"><u>Login here</u></a></p>
      </form>
    </div>
    </div>
  );
}

export default RegistrationPage;