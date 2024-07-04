const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
    console.log("Hey, I'm in Auth :)", req.headers);

    try {
        if (!req.headers.authorization) {
            return res.status(401).json({
                error: true,
                message: 'Authorization header is missing. Please login first.'
            });
        }

        let token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({
                error: true,
                message: 'Token is missing. Please login first.'
            });
        }

        jwt.verify(token, 'secret-key', (err, decoded) => {
            if (err) {
                return res.status(401).json({
                    error: true,
                    message: 'Invalid token.'
                });
            }
            req.body['userId'] = decoded.userId;
            next();
        });
    } catch (error) {
        return res.status(500).json({
            error: true,
            message: 'Internal server error.'
        });
    }
};

module.exports = {
    auth
};
