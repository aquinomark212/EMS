import { useState } from "react";
import { handleSuccess, handleError } from "../utils";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import styles from './styles/LoginPage.module.css';
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const apiUrl = process.env.REACT_APP_API_URL;

const LoginPage = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        
        if (!email || !password) {
            return handleError("Email and Password are required");
        }

        try {
            const result = await axios.post(`${apiUrl}/api/login`, { email, password });
            console.log(result);
            localStorage.setItem('jwtToken', result.data.token);
            navigate('/dashboard');
        
        } catch (error) {
            console.error('Error during login', error);
        }
    };

    return (
        <div className={styles.backgroundContainer}>
            <form className={styles.loginForm} onSubmit={handleLogin}>
                <img
                    src={require("../../src/images/galliumLogo.png")}
                    alt="Logo"
                    className={styles.logo}
                />
                <label className={styles.emailLabel}>Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                <label className={styles.passwordLabel}>Password</label>
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <button className={styles.btn} type="submit">Login</button>
                <p className={styles.bottom}>Doesn't have an account yet? <Link className={styles.linkies} to="/api/registration">Registration</Link></p>
            </form>
            <ToastContainer />
        </div>
    );
};

export default LoginPage;
