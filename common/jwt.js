const jwt = require("jsonwebtoken");


module.exports.genernateToken = (params, type) => {
    const expireDays = type === 'access' ? process.env.ACCESS_TOKEN_EXPIRE_DAYS
        : process.env.REFRESH_TOKEN_EXPIRE_DAYS;
    const secretKey = type === 'access' ? process.env.ACCESS_TOKEN_SECRET_KEY
        : process.env.REFRESH_TOKEN_SECRET_KEY;

    const expiresIn = Math.floor(new Date().getTime() / 1000) + (expireDays * 24 * 60 * 60);
    return jwt.sign(params, secretKey, { expiresIn });
}

module.exports.verifyToken = (token, type) => {
    const secretKey = type === 'access' ? process.env.ACCESS_TOKEN_SECRET_KEY
        : process.env.REFRESH_TOKEN_SECRET_KEY;

    return jwt.verify(token, secretKey);

}