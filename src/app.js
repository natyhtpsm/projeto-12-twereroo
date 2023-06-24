import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());

const user = [];
const tweet = [];

app.get("/", (req, res) => {
    res.status(400).send("TEXTO");
    return;
});
app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    if(!username || !avatar){
        return res.status(400).send("Preencha todos os campos");
    }
    user.push({
        username: username,
        avatar: avatar
    })
    return res.status(201).send("OK");
});
app.listen(5000, () => {console.log("Servidor funcionando na porta 5000")});

