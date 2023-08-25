const bcrypt = require("bcrypt");
const saltRounds = 10;

module.exports.hashPassword = async (password) => {
    const salt = bcrypt.genSaltSync(saltRounds);
    return bcrypt.hashSync(password, salt);
}

module.exports.checkPassword = async (password, hashPassword) => {
   return bcrypt.compareSync(password, hashPassword);
}
