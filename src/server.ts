import express from "express";

const app = express()

app.listen(3333, () => { console.log("Server running on port 3333.") })

app.get("/", (request, response) => {
    return response.json({ healthy: true })
})