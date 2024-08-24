import styles from './styles/DashboardPage.module.css'
import Navbar from '../components/Navbar.jsx'
import Create from '../components/Create.jsx'
import Table from '../components/Table.jsx';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


const DashboardPage = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('jwtToken');

        if(token === null){
            navigate('/');
        }
        navigate('/dashboard');
    }, [navigate])


    return ( 
        <div className={styles.bg}>
            <Navbar />
            <Create />
            <Table />
        </div>
        
     );
}
 
export default DashboardPage;