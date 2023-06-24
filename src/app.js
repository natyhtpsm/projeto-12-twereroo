import cors from "cors";
import express from "express";

const app = express();
app.use(cors());
app.use(express.json());

const user = [];
const tweets = [];

app.get("/", (req, res) => {
    res.status(400).send("TEXTO");
    return;
});
app.post("/sign-up", (req, res) => {
    const {username, avatar} = req.body;
    if(!username || !avatar){
        return res.status(400).send("Preencha todos os campos");
    }
    if(user.includes(username)){
        return res.status(401).send("Usuário já existe");
    }
    user.push({
        username: username,
        avatar: avatar
    })
    return res.status(201).send("OK");
});

app.post("/tweets", (req, res) => {
    const {username, tweet} = req.body;
    if(!user.includes(username)){
        return res.status(401).send("UNAUTHORIZED")
    }
    if(!tweet){
        return res.status(400).send("Digite o tweet")
    }
    tweets.push({
        username: username, 
        tweet: tweet
    })
    return res.status(201).send("OK");
})

app.listen(5000, () => {console.log("Servidor funcionando na porta 5000")});

