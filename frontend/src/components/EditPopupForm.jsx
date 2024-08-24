import { useState } from 'react';
import styles from './styles/EditPopupForm.module.css';
import axios from 'axios';

const apiUrl = process.env.REACT_APP_API_URL;

const EditEmployee = ({ editEmployee, closeButton, saveButton}) => {

    const [formData, setFormData] = useState({
        firstname: editEmployee.firstname,
        lastname: editEmployee.lastname,
        department: editEmployee.department,
        position: editEmployee.position
    });


    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    }

    const handleSubmitButton = async () => {

        try {
            
            const token = await localStorage.getItem('jwtToken');

            if(!token){
                throw new Error('No token provided');
            }

            const response = await axios.put(`${apiUrl}/api/employees/${editEmployee._id}`, formData, {
                headers: {
                    Authorization: `Bearer ${token}`, 
                },
            });

            saveButton();
            console.log(response.data);

        } catch (error) {
            console.error('Error updating employee:', error.response ? error.response.data : error.message);
        }
    }


  return (
    <div className={styles.overlay}>
      <div className={styles.popup2}>
        <h2 className={styles.title}>Edit Employee</h2>
        <form>
          <label className={styles.fname}>
            First Name:
            <input
              type="text"
              name="firstname"
              value={formData.firstname}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className={styles.lname}>
            Last Name:
            <input
              type="text"
              name="lastname"
              value={formData.lastname}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className={styles.dep}>
            Department:
            <input
              type="text"
              name="department"
              value={formData.department}
              onChange={handleChange}
            />
          </label>
          <br />
          <label className={styles.pos}>
            Position:
            <input
              type="text"
              name="position"
              value={formData.position}
              onChange={handleChange}
            />
          </label>
          <br />

          <button className={styles.cancelBtn} type="button" onClick={closeButton}>
            Cancel
          </button>
          <button className={styles.saveBtn} type="button" onClick={handleSubmitButton}>
            Save Changes
          </button>
        </form>
      </div>
    </div>
  );
};

export default EditEmployee;
