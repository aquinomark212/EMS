import "bootstrap/dist/css/bootstrap.min.css";
import EditForm from "@mui/icons-material/EditSharp";
import DeleteIcon from "@mui/icons-material/Delete";
import styles from "./styles/Table.module.css";
import { useState, useEffect } from "react";
import axios from "axios";
import EditEmployeeForm from "./EditPopupForm";

const apiUrl = process.env.REACT_APP_API_URL;

const Table = () => {
  const [employees, setEmployees] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEmployees();
  }, []);

  const fetchEmployees = async () => {
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        throw new Error("No token provided");
      }

      const response = await axios.get(`${apiUrl}/api/employees`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      setEmployees(response.data);
      fetchEmployees();
      
    } catch (error) {
      setError(error.response ? error.response.data.message : error.message);
    }
  };

  const deleteEmployee = async (id) => {
    try {
      const token = localStorage.getItem("jwtToken");
      if (!token) {
        throw new Error("No token provided");
      }

      await axios.delete(`${apiUrl}/api/employees/${id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      fetchEmployees();

    } catch (error) {
      console.error("Error deleting employee:", error.response ? error.response.data : error.message);
      
    }
  };

  // Edit Employee
  const [openEditFormModal, setopenEditFormModal] = useState(false);
  const [selectedEmployee, setSelectedEmployee] = useState(null)
  
  const handleEditClick = (employee) => {
    setSelectedEmployee(employee);
    setopenEditFormModal(true);
  }

  const saveButton = () => {
    fetchEmployees();
    setopenEditFormModal(false);
  }

  const closeButton = () => {
    setopenEditFormModal(false);
  }

  return (
    <div className={styles.tables}>
      {error && <div className="alert alert-danger">{error}</div>}
      <table className="table">
        <thead>
          <tr>
            <th scope="col">No.</th>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Department</th>
            <th scope="col">Position</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp, index) => (
            <tr key={emp._id}>
              <th scope="row">{index + 1}</th>
              <td>{emp.firstname}</td>
              <td>{emp.lastname}</td>
              <td>{emp.department}</td>
              <td>{emp.position}</td>
              <td>
                <button
                  onClick={() => {handleEditClick(emp)}}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <EditForm  />
                </button>
                <button
                  onClick={() => deleteEmployee(emp._id)}
                  style={{
                    border: "none",
                    backgroundColor: "transparent",
                    cursor: "pointer",
                  }}
                >
                  <DeleteIcon />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {openEditFormModal && selectedEmployee && (
        <EditEmployeeForm 
        editEmployee = {selectedEmployee}
        closeButton = {closeButton}
        saveButton = {saveButton}
        />
    )}
    </div>
  );
};

export default Table;
