const http = require("http");
const url = require('url');
const PORT = 8768;

const requestListener = function (req, res) {
    const { method, headers } = req;
    const { pathname: path, query } = url.parse(req.url, true);
    console.log(method, headers, path, query)

    if (method === "GET" && path === "/") return res.end("hai");
    return res.end("api not found");
};

const server = http.createServer(requestListener);


server.listen({
    host: "localhost",
    port: PORT,
    path: "/"
}, () => console.log(`App running in http://localhost:${PORT}`));