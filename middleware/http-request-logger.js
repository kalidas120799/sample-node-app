module.exports = function (req, res, next) {
    const { method, path, query, headers } = req;
    console.log(new Date(), method, path)
    next();
}