import { useNavigate } from 'react-router-dom';
import styles from './styles/FrontPage.module.css';

const FrontPage = () => {
    const navigate = useNavigate();

    function GetStarted(){
        navigate('/api/login');
    }



    return ( 
        <div className={styles.backgroundContainer}>
            <button onClick= {GetStarted} className={styles.btnStarted}>Get Started</button>
        </div>
     );
}
 
export default FrontPage;