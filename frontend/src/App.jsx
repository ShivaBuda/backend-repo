// npm i axios

import "./App.css";
import {useEffect,useState} from "react";
import axios from "axios";

function App() {
    const [jokes, setJokes] = useState([]);

    useEffect(() => {
        const fetchJokes = async () => {
            try {
                const response = await axios.get("/api/jokes");
                setJokes(response.data);
            } catch (error) {
                console.error("Error fetching jokes:", error);
            }
        };

        fetchJokes();
    })

    return (
        <>
            <h1>Backend course learning. Full stack developer</h1>
            <p>JOKES: {jokes.length}</p>

            {jokes.map((joke) => {
                return (
                    <div key={joke.id}>
                        <h2>{joke.joke}</h2>
                        <p>{joke.answer}</p>
                    </div>
                );
            })}
        </>
    );
}

export default App;
