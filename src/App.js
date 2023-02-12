import {useEffect} from "react";

// de53642e

const API_URL = "http://www.omdbapi.com?apikey=de53642e";
const App = () => {
    const searchMovies = async(title) => {
        const response = await fetch(`${API_URL}&s=${title}}`);
        const data = await response.json();

        console.log(data);
    }

    useEffect( () => {
        searchMovies('Spiderman')
    },[])

    return (
        <h1>App</h1>
    )
};

export default App;
