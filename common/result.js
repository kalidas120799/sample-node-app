module.exports.dataFound = (data = []) => {
    return {
        version: "1.0.0",
        code: 1000,
        message: "Data Found",
        data: data,
        error: null
    }
}

module.exports.dataNotFound = () => {
    return {
        version: "1.0.0",
        code: 1001,
        message: "Data Not Found",
        data: null,
        error: null
    }
}

module.exports.exception = (error = null) => {
    return {
        version: "1.0.0",
        code: 1001,
        message: "Data Not Found",
        data: null,
        error: error && error.message ? error.message : error
    }
}

module.exports.custom = (data = null, code, msg) => {
    return {
        version: "1.0.0",
        code: code,
        message: msg,
        data: data,
        error: null
    }
}