const app = require("./app");
const PORT = process.env.PORT || 6473;

app.listen((PORT), () => console.log(`App running in http://localhost:${PORT}`));