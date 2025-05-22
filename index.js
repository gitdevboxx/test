const express = require("express");
const path = require("path"); // <-- fehlt
const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "public")));

app.get("/api/hello", (req, res) => {
    res.json({ message: "Hallo von /api/hello" });
});

app.get("/api/status", (req, res) => {
    res.json({ status: "OK", timestamp: new Date().toISOString() });
});

app.get("*", (req, res) => {
    res.sendFile(path.join(__dirname, "public/index.html"));
});

app.listen(port, () => {
    console.log(`App läuft auf Port ${port}`);
});
