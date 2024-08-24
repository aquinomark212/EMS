import React from 'react';
import styles from './styles/Navbar.module.css';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const logoutHandle = async () => {
    const response = await axios.post(`${apiUrl}/logout`);
  
    try {
      if (response.status === 200) {
        localStorage.removeItem('jwtToken');
        console.log(response.data.message); 
        window.location.href = '/';  
      }
      } catch (error) {
      console.error('Logout failed:', error);
      }
  
  }



const Navbar = () => {
    return ( 
        <nav className={`navbar ${styles.customNavbar}`}>
            <img
                src={require('../images/galliumLogo.png')}
                alt="Logo"
                className={styles.logo}
            />
            <button className={styles.logoutBtn} onClick={logoutHandle}>
                <img src={require('../images/logout.jpg')} /> Sign Out
            </button>        
        </nav>

    );
}
 
export default Navbar;
