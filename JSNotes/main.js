const url = "https://api.sampleapis.com/movies/animation";

async function getMovies(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result); //log to check api has be received 

        //Process the movie data - call function that displays results

    } catch (error) {
        console.error(error.message);
    }
}

getMovies(url);

