const Employee = require('../models/employeeModel');
 


const createEmployee = async (req, res) => {

    try {
        const { empId, firstname, lastname, department, position } = req.body;

        const newEmployee = new Employee({ empId, firstname, lastname, department, position });
        await newEmployee.save();
        res.status(200).json({ newEmployee });

    } catch (error) {
        res.status(500).json({ message: error.message })
    }
}


const getAllEmployee = async (req, res) => {

    try {
        const employees = await Employee.find();
        res.status(200).json( employees );

    } catch (error) {
        res.status(500).json({  message: error.message });
    }
}

const getSingleEmployee = async (req, res) => {
    const { id } = req.params;

    try {
        const employee = await Employee.findById( id );
        if(!employee){
            return res.status(404).json({ message: "Employee not found"});
        }
        res.status(200).json( employee );

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const updateSingleEmployee = async (req, res) => {
    const { id } = req.params;
    const { empId, firstname, lastname, department, position } = req.body;

    try {
        const updatedEmployee = await Employee.findByIdAndUpdate( id, { empId, firstname, lastname, department, position }, { new: true, runValidators: true });

        if(!updatedEmployee){
            return res.status(404).json({ message: "Employee not found"});
        }
        res.status(200).json( updatedEmployee );


    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const deleteSingleEmployee = async (req, res) => {
    const { id } = req.params;

    try {
        const deletedEmployee = await Employee.findByIdAndDelete( id );

        if(!deletedEmployee){
            return res.status(404).json({ message: "Employee Not Found"});
        }

        res.status(200).json({ message: "Employee deleted successfully"});
        
    } catch (error) {
        res.status(200).json({ message:  error.message});
    }
}

module.exports = { createEmployee, getAllEmployee, getSingleEmployee, updateSingleEmployee, deleteSingleEmployee };
