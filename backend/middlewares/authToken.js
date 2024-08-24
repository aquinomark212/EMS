const jwt = require('jsonwebtoken');


function authToken (req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    if(!token){
        return res.status(401).json({ message: "No token provided"});
    }

    jwt.verify(token, process.env.SECRET_KEY , (err, user ) => {
        if (err) {
            return res.status(403).json({ message: "Invalid Token"})
        }
        req.user = user;
        next();
    })

}

module.exports = authToken;
