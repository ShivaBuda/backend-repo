// note for myself
// npm init
// npm install express
// npm install dotenv >for.env file
// npm install cors > white listing

import express from "express";
// import dotenv from "dotenv";

const app = express();
const port = process.env.PORT || 3001;
const jokes = [
    {
        id: 1,
        joke: "Why did the chicken cross the road?",
        answer: "To get to the other side!",
    },
    {
        id: 2,
        joke: "Why don't scientists trust atoms?",
        answer: "Because they make up everything!",
    },
    {
        id: 3,
        joke: "Why did the scarecrow win an award?",
        answer: "Because he was outstanding in his field!",
    },
    {
        id: 4,
        joke: "Why don't skeletons fight each other?",
        answer: "They don't have the guts!",
    },
    {
        id: 5,
        joke: "What do you call fake spaghetti?",
        answer: "An impasta!",
    },
];
app.get("/api/jokes", (req, res) => {
    res.send(jokes);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
