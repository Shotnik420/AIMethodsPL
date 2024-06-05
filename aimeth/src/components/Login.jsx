//Strona dla wspolpracy z firmami
import "../styles/login.css";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import qs from "qs";
export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    axios
      .get("https://89.73.160.90/check", { withCredentials: true })
      .then((response) => {
        setIsLoggedIn(response.data.isAuthenticated);
      })
      .catch((error) => {
        console.error("Błąd podczas sprawdzania stanu logowania:", error);
      });
  }, []);

  useEffect(() => {}, [isLoggedIn]);

  function checkLoginStatus() {
    axios
      .get("https://89.73.160.90/check", { withCredentials: true })
      .then((response) => {
        console.log(response.data.isAuthenticated);
      })
      .catch((error) => {
        console.error("Błąd podczas sprawdzania stanu logowania:", error);
      });
  }

  function wyloguj() {
    axios
      .get("https://89.73.160.90/logout", { withCredentials: true })
      .then((response) => {
        setIsLoggedIn(response.data.isLoggedIn);
      })
      .catch((error) => {
        console.error("Błąd podczas wylogowywania:", error);
      });
  }

  const handleLogin = async (e) => {
    e.preventDefault();
    console.log("Login:", username, password);
    try {
      const data = qs.stringify({
        username,
        password,
      });

      const config = {
        method: "post",
        url: "https://89.73.160.90/login",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        data: data,
        withCredentials: true,
      };

      const response = await axios(config);
      console.log(response);
      console.log(response.data);
      if (!response.data) {
        document.getElementById("stanlogowania").innerHTML =
          "Login lub hasło jest błędne.";
      }
      setIsLoggedIn(response.data);
      console.log(response.data);
    } catch (error) {
      document.getElementById("stanlogowania").innerHTML =
        "Błąd systemu logowania.";
      // Obsługa błędu logowania
    }
  };
  const startPolling = () => {
    const interval = setInterval(async () => {
      try {
        const response = await axios.get("https://89.73.160.90/pass", {
          withCredentials: true,
        });
        if (response.data === true) {
          setIsLoggedIn(true);
          setLoginStatus("Logged in successfully.");
          clearInterval(interval);
        } else {
          const failResponse = await axios.get("https://89.73.160.90/fail", {
            withCredentials: true,
          });
          if (failResponse.data === false) {
            setLoginStatus("Login failed.");
            clearInterval(interval);
          }
        }
      } catch (error) {
        console.error("Error during polling:", error);
        setLoginStatus("Polling error.");
        clearInterval(interval);
      }
    }, 1000); // Poll every 1 second
  };

  return (
    <motion.div
      className="login"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="loginContainer">
        <div className="loginHeader">
          <h1>Logowanie</h1>
        </div>
        <form onSubmit={handleLogin} method="post">
          <input
            type="text"
            id="username"
            onChange={() => {
              setUsername(document.getElementById("username").value);
            }}
            name="username"
          />
          <input
            type="password"
            id="password"
            onChange={() => {
              setPassword(document.getElementById("password").value);
            }}
            name="password"
          />
          <input type="submit" value="Login" />
        </form>
      </div>
      <br />
      <h1 id="stanlogowania">Logowanie do admina</h1>
    </motion.div>
  );
}
