import styles from "./styles/PopupForm.module.css";
import { useState } from "react";
import axios from "axios";


const apiUrl = process.env.REACT_APP_API_URL;

  const CreateEmployee = ({open, close}) => {
    const [empId, setEmpId] = useState('');
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [department, setDepartment] = useState('');
    const [position, setPosition] = useState('');
    const [error, setError] = useState(null);
  
    const handleSubmit = async (e) => {
      e.preventDefault();
  
      try {
        const token = localStorage.getItem('jwtToken');
        if (!token) {
          throw new Error('No token provided');
        }
  
        const response = await axios.post(`${apiUrl}/api/employees`, 
          { empId, firstname, lastname, department, position },
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
  
        console.log('Employee created:', response.data);
      
      setEmpId('');
      setFirstname('');
      setLastname('');
      setDepartment('');
      setPosition('');
      close(); 

      } catch (error) {
        setError(error.response ? error.response.data.message : error.message);
      }
    };
  
    if (!open) return null; 

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <h2 className={styles.title}>Create Employee</h2>
        <form onSubmit={handleSubmit}>
          <label className={styles.fname}>
            Employee Id:
            <input
              type="text"
              name="empId"
              value={empId}
              onChange={(e) => setEmpId(e.target.value)}
            />
          </label>
          <label className={styles.fname}>
            First Name:
            <input
              type="text"
              name="firstName"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
            />
          </label>
          <br />
          <label className={styles.lname}>
            Last Name:
            <input
              type="text"
              name="lastName"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
            />
          </label>
          <br />
          <label className={styles.dep}>
            Department:
            <input
              type="text"
              name="department"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            />
          </label>
          <br />
          <label className={styles.pos}>
            Position:
            <input
              type="text"
              name="position"
              value={position}
              onChange={(e) => setPosition(e.target.value)}
            />
          </label>
          <br />
          <div className={styles.formButtons}>
            <button className={styles.cancelBtn} type="button" onClick={close}>
              Cancel
            </button>
            <button className={styles.saveBtn} type="submit">
              Save Changes
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateEmployee;
