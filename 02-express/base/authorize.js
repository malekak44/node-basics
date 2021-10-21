const authorize = (req, res, next) => {
    console.log('User authorized at ' + Date());
    next();
}

module.exports = authorize;