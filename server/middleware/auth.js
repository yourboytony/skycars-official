const jwt = require('jsonwebtoken');

module.exports = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1];
        const decoded = jwt.verify(token, 'your-secret-key'); // Use your actual secret key
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ error: 'Authentication failed' });
    }
}; 