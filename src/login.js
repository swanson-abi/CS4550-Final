import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = (props) => {
    const [email, setEmail] = useState("");
    const [profile, setProfile] = useState("");
    const [password, setPassword] = useState("");
    const [storedEmail, setStoredEmail] = useState(localStorage.getItem('email'));
    const [storedPassword, setStoredPassword] = useState(localStorage.getItem('password'));
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState("")

    const navigate = useNavigate();

    const onButtonClick = () => {
        setEmailError("")
        setPasswordError("")

        if ("" === email) {
            setEmailError("Please provide your email.")
            return
        }

        if (!/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError("Please provide a valid email.")
            return
        }

        if ("" === password || password.length < 7) {
            setPasswordError("Please provide a valid password longer than 7 characters.")
            return
        }

        // Check if email has an account associated with it
        checkAccountExists(accountExists => {
            // If yes, log in 
            if (accountExists)
                logIn()
            else
                // Else, ask user if they want to create a new account and if yes, then log in
                if (window.confirm("No current account exists with" +email+ ". Would you like to create an account?")) {
                    logIn()
                }
        })
        localStorage.setItem('email', email);
        localStorage.setItem('password', password);
        setStoredEmail(email);
        setStoredPassword(password);

    }

    // Call the server API to check if the given email ID already exists
    const checkAccountExists = (callback) => {
        fetch("http://localhost:3001/check-account", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        })
            .then(r => r.json())
            .then(r => {
                callback(r?.userExists)
            })
    }

    // Log in a user using email and password
    const logIn = () => {
        fetch("http://localhost:3001/auth", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email, password })
        })
            .then(r => r.json())
            .then(r => {
                if ('success' === r.message) {
                    localStorage.setItem("user", JSON.stringify({ email, token: r.token }))
                    props.setLoggedIn(true)
                    props.setEmail(email)
                    navigate("/")
                } else {
                    window.alert("Wrong email or password")
                }
            })
    }

    return <div className={"mainContainer"}>
        <div className={"titleContainer"}>
            <div>Log In:</div>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={email}
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{emailError}</label>
        </div>
        <br />
        <div className={"inputContainer"}>
            <input
                value={password}
                placeholder="Enter password"
                onChange={(e) => setPassword(e.target.value)}
                className={"inputBox"} />
            <label className="errorLabel">{passwordError}</label>
        </div>
        <br />
        <select onChange={(e) => setProfile({ ...profile, role:  e.target.value })}
                 className="form-control mb-2" id="wd-role">
            <option value="HOMECOOK">Home Cook</option>
            <option value="CHEF">Chef</option>
          </select>
        <br />
        <div className={"inputContainer"}>
            <input
                className={"inputButton"}
                type="button"
                onClick={onButtonClick}
                value={"Log in"} />
        </div>
        {storedEmail && (
            <div>
               Email: <p>{localStorage.getItem('email')}</p>
            </div>
         )}
         {storedPassword && (
            <div>
               Password: <p>{localStorage.getItem('password')}</p>
            </div>
         )}
    </div>
}

export default Login