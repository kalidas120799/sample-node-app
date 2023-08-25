const fs = require("fs");
const router = require("express").Router();
const authenticator = require("../middleware/authenticator");
const { dataFound, dataNotFound, custom } = require("../common/result");

let users = fs.readFileSync("./database/users.json", "utf8");
users = JSON.parse(users);

router.get("/", async (req, res) => {
    try {
        const { query, headers } = req;
        return res.send(dataFound(users));
    } catch (ex) {
        console.log(ex);
    }
});

router.get("/:id", (req, res) => {
    try {
        const { headers, params: { id } } = req;
        const user = users ? users.find(e => e.id == id) : null;
        return res.send(user ? dataFound(user) : dataNotFound());
    } catch (ex) {
        console.log(ex);
    }
});

router.post("/", authenticator, (req, res) => {
    try {
        const { body, headers } = req;
        console.log(body)
        return res.send(custom(null, 1003, "User added successfully"));
    } catch (ex) {
        console.log(ex);
    }
});

router.put("/:id", authenticator, (req, res) => {
    try {
        const { headers, params: { id } } = req;
        console.log(id)
        return res.send(custom(null, 1004, "User updated successfully"));
    } catch (ex) {
        console.log(ex);
    }
});

router.delete("/:id", authenticator, (req, res) => {
    try {
        const { headers, params: { id } } = req;
        console.log(id)
        return res.send(custom(null, 1005, "User deleted successfully"));
    } catch (ex) {
        console.log(ex);
    }
});

module.exports = router;