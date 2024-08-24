const router = require("express").Router();

const { login, registration } = require('../controllers/users');

router.post("/api/login", login);
router.post('/api/registration', registration);


module.exports = router;