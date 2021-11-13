const authMiddleware = (req, res, next) => {
    if (req.session.user && req.cookies.user_id) {
        res.json(req.session.user);
    } else {
        next();
    }
}

module.exports = authMiddleware;