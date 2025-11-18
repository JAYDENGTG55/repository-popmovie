import { OMDB_API_KEY } from "../config";

export async function fetchMovie(query) {
    try {
        const res = await fetch(
            `https://www.omdbapi.com/?s=${query}&apikey=${OMDB_API_KEY}`
        );
        const data = await res.json();
        // console.log(data.Search);
        return data;
    } catch (err) {
        console.log(err);
    }
}



export async function fetchMovieDetail(selectedID) {
    try {
        const res = await fetch(
            `https://www.omdbapi.com/?apikey=${OMDB_API_KEY}&i=${selectedID}`
        );
        const data = await res.json();
        return data;
    } catch (err) {
        console.log(err);
    }
}