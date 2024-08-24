import { useState } from "react";
import { handleSuccess, handleError } from "../utils";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import styles from './styles/RegistrationPage.module.css'
import { Link } from "react-router-dom";
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
const apiUrl = process.env.REACT_APP_API_URL;


const RegistrationPage = () => {

    const [fName, setFname] = useState("");
    const [lName, setLname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();    

    const handleRegister = async (e) => {
        e.preventDefault();

        if( !fName || !lName || !email || !password) {
            return handleError('First Name, Last Name, Email, and Password are required');
        }

        try {
            const result = await axios.post(`${apiUrl}/api/registration`, {fName, lName, email, password});
            console.log(result);
            localStorage.setItem('jwtToken', result.data.token);
            navigate('/api/login');
            
        } catch (error) {
            console.error('Error during registration:', error);
        }
    }


    return (

        <div className= {styles.backgroundContainer}>
          <form onSubmit={handleRegister} className= {styles.registerForm}>
          
            <img
              src={require("../../src/images/galliumLogo.png")}
              alt="Logo"
              className={styles.logo}
            />
            <div className={styles.firstAndLastLabel}>
              <label className={styles.fNameLabel}>First Name</label>
              <label className={styles.lNameLabel}>Last Name</label>
            </div>
          
              <input
                className={styles.fNameInput}
                type='text'
                value={fName}
                onChange={(e) => setFname(e.target.value)}
              ></input>
    
           
              <input
              className={styles.lNameInput}
                type="text"
                value={lName}
                onChange={(e) => setLname(e.target.value)}
              ></input>
    
            <label className={styles.emailLabel}>Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              ></input>
    
            <label className={styles.passwordLabel}>Password</label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              ></input>
            <button type="submit" className ={styles.btn}>Register</button>
            
            <p className={styles.bottom}>Already have an account? <Link className={styles.linkies} to="/api/login">Login</Link></p>
            
          </form>
          <ToastContainer />
        </div>
    );
}
 
export default RegistrationPage;