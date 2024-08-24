const User = require('../models/userModel');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const login = async (req, res) => {

    const { email, password } = req.body;

    try{

        const user = await User.findOne({ email });

        if(!user){
            return res.status(404).json({ message: "Email does not exist"});
        }

        const  isMatch = await bcrypt.compare(password, user.password);

        if(!isMatch){
            return res.status(404).json({ message: "Password is not match"})
        }


        const payload = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1d' })

        return res.status(200).json({ token, message: "Successful Login"})
    
    } catch (error) {
        console.error("Login error: ", error);
        return res.status(500).json({ message: "Server Error"});
    }

}

const registration = async (req, res) => {

    const { email, password } = req.body;

    try {
        
        const existingUser = await User.findOne({ email });

        if( existingUser ){
            return res.status(401).json({ message: "Email already exists"});
        }


        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new User({ email, password: hashedPassword });

        await newUser.save();

        const payload = {
            user: {
                id: newUser.id
            }
        };

        const token = jwt.sign(payload, process.env.SECRET_KEY, { expiresIn: '1d' })

        return res.status(200).json({ token, message: "Successful Registration"});
    } catch (error) {
        console.error("Registration error: ", error);
        return res.status(500).json({ message: "Server Error"});
    }






}

module.exports = { 
    login, 
    registration 
};