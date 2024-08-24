 const router = require('express').Router();
const authToken = require('../middlewares/authToken')
const dashboard = require('../controllers/dashboard');

const { createEmployee, getAllEmployee, getSingleEmployee, updateSingleEmployee, deleteSingleEmployee } = require('../controllers/employee')

router.use('/dashboard', authToken);
router.get('/dashboard', dashboard);

router.use('/api/employees', authToken);

router.post('/api/employees', createEmployee);
router.get('/api/employees', getAllEmployee);
router.get('/api/employees/:id', getSingleEmployee);
router.put('/api/employees/:id', updateSingleEmployee);
router.delete('/api/employees/:id', deleteSingleEmployee);

router.post('/logout', (req, res) => {
    res.clearCookie('token');

    return res.status(200).json({ message: 'Successfully logged out' });
})

module.exports = router;