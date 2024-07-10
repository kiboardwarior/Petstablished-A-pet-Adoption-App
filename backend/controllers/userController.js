const User = require('../models/userModel');
const jwt = require('jsonwebtoken');
require('dotenv').config();

const createToken = (_id) => {
    return jwt.sign({ _id }, process.env.SECRET, { expiresIn: '3d' });
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.login(email, password);
        const token = createToken(user._id);
        const firstName = user.firstName;
        res.status(200).json({ email, token,firstName});
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
}

    const signupUser = async (req, res) => {
        const { firstName, lastName, email, password, phoneNumber } = req.body;

        try {
            const user = await User.signup(firstName, lastName, email, password, phoneNumber);
            const token = createToken(user._id);
            res.status(200).json({ email, token,firstName });
        } catch (error) {
            res.status(400).json({ message: error.message });
        }
    }

    module.exports = { signupUser, loginUser };
