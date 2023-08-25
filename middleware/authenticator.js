module.exports = function (req, res, next) {
    const { headers } = req;
    if (!headers.hasOwnProperty("token") || (headers.token && headers.token.length === 0))
        return res.send("unauthorized user")
    next();
}