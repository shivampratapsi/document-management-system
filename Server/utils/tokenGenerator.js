const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    return jwt.sign(
        {
            email: user.email,
            id: user._id,
            role: user.role
        },
        process.env.JWT_SECRET,
        { expiresIn: '20min' }
    );
};

module.exports = { generateToken }; 