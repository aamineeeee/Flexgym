// src/pages/Register/Register2.jsx
import { useState } from "react";
import form_bg from "/images/reg-form-bg.jpg";
import { FaCheckCircle } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "./Register.css";

const Register2 = () => {
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [errorMessage, setErrorMessage] = useState({
    nameError: "",
    emailError: "",
    passwordError: "",
    confirmPasswordError: "",
  });

  const [messageActive, setMessageActive] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData((prevUserData) => ({
      ...prevUserData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const { name, email, password, confirmPassword } = userData;

    let hasError = false;

    // Password validation
    if (password.trim() === "") {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        passwordError: "Password is required",
      }));
      hasError = true;
    } else if (password.length < 6) {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        passwordError: "Password must be at least 6 characters",
      }));
      hasError = true;
    } else {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        passwordError: "",
      }));
    }

    // Confirm Password validation
    if (confirmPassword.trim() === "") {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        confirmPasswordError: "Please confirm your password",
      }));
      hasError = true;
    } else if (password !== confirmPassword) {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        confirmPasswordError: "Passwords do not match",
      }));
      hasError = true;
    } else {
      setErrorMessage((prevErrorMessage) => ({
        ...prevErrorMessage,
        confirmPasswordError: "",
      }));
    }

    if (!hasError) {
      console.log(userData);
      setMessageActive(true);
      setUserData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });

      // Redirection vers la page des packs memberships
      setTimeout(() => {
        navigate("/subsc");
      }, 1000); // Délai de 1 secondes pour afficher le message de succès
    }
  };

  return (
    <div className="register-form-wrapper">
      <section className="registration-form-section center">
        <div className="container">
          <div className="form-side-image">
            <img src={form_bg} alt="" />
          </div>
          <div className="registration-form-container">
            <div className="form-title mt-5" style={{ color: "orangered" }}>
              <h4 className="text-2xl font-bold text-center pt-4">
                REGISTER !
              </h4>
            </div>
            <form onSubmit={handleSubmit} id="register-form">
              <div className="form-group">
                <label htmlFor="name">Full Name</label>
                <input
                  type="text"
                  name="name"
                  id="name"
                  className="form-input"
                  placeholder="Enter name"
                  onChange={handleChange}
                  value={userData.name}
                />
                <span className="error-message">{errorMessage.nameError}</span>
              </div>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="form-input"
                  placeholder="Enter email"
                  onChange={handleChange}
                  value={userData.email}
                />
                <span className="error-message">{errorMessage.emailError}</span>
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  className="form-input"
                  placeholder="Enter password"
                  onChange={handleChange}
                  value={userData.password}
                />
                <span className="error-message">
                  {errorMessage.passwordError}
                </span>
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Confirm Password</label>
                <input
                  type="password"
                  name="confirmPassword"
                  id="confirmPassword"
                  className="form-input"
                  placeholder="Confirm password"
                  onChange={handleChange}
                  value={userData.confirmPassword}
                />
                <span className="error-message">
                  {errorMessage.confirmPasswordError}
                </span>
              </div>
              <div className="form-btn mx-4 mt-3">
                <input type="submit" id="register-btn" value="Register" />
              </div>
              {messageActive && (
                <div className="success-message p-3 text-center rounded text-center">
                  <FaCheckCircle style={{ color: "green" }} />
                  <p>Registration successful!</p>
                </div>
              )}
            </form>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Register2;
