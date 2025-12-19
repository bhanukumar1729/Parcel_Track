import express from 'express';
import "dotenv/config"

const app = express();
const PORT = process.env.PORT;

// Middleware
app.use(express.json());

app.get('/', (req, res) => {
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log(`🚀Server running at http://localhost:${PORT}`);
});