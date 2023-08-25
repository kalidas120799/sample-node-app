const moment = require("moment-timezone");

moment.prototype.apiFormat = function () {
    const me = this;
    return me.format("YYYY-MM-DD HH:mm:ss");
}

module.exports = moment;