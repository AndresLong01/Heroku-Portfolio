module.exports = app => {
    app.get("/", (req, res) => {
        res.sendFile(path.join(_dirname, "index.html"));
    })
}