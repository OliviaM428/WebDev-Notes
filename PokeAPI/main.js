const url = "https://pokeapi.co/api/v2/pokemon?limit=10&offset=19";

async function getPoke(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        const result = await response.json();
        console.log(result);

    } catch (error) {
        console.error(error.message);
    }
}

 getPoke(url);