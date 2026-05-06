//const genrePick = document.getElementById("genre-select");

//let genre = genrePick.value;

//genrePick.addEventListener("change", console.log(genre));
let genre = "";

const url = "https://api.sampleapis.com/movies/western";


async function getMovies(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Response status: ${response.status}`);
        }

        console.log(genre);
        const result = await response.json();
        //console.log(result); use this to view info in console inspect element

        //Process the movie data
        displayMovies(result);


    } catch (error) {
        console.error(error.message);
    }
}

function displayMovies(data) {
    const movieContainer = document.querySelector("#container");
    //Display movie title and poster
    for (const movie of data){
        const movieBox = `<div class ="movie-box">
        <h2>${movie.title}</h2>
        <img src="${movie.posterURL}" alt="${movie.title}"></img>
        </div>`;     
        
        //append this image to the rest of the html in #container    -  works the same as appendchild
  
        movieContainer.innerHTML += movieBox;
    }

}

getMovies(url);


/*
//const genrePick = document.getElementById("genre-select");

//let genre = genrePick.value;

//genrePick.addEventListener("change", console.log(genre));
=======
/* TABLE JS Loop 

function createResultRow(gameData) {
    const winOrLoose = gameData.hawksWin ? "hawks-ftw": "hawks-lose";
    //Generate a row from a game object
    const resultRow = `
    <tr class="${winOrLoose}">
    <td>${gameData.gameDate}</td>
    <td>${gameData.gameLocation}</td>
    <td>${gameData.hawksScore}</td>
    <td>${gameData.opponentTeam}</td>
    <td>${gameData.opponentScore}</td>
    <td>${gameData.hawksWin}</td>
    </tr>
    `;
    return resultRow;
}

//loop over all game results and print each row
function showAllResults(resultsList) {
    for (result of resultsList){
        const currentRow = createResultRow(result);
        resultsTable.innerHTML += currentRow;
    }
}

function checkResult(gameData){
    if (gameData.hawksScore > gameData.opponentScore)
    {
        result = "win";
    }else if(gameData.hawksScore < gameData.opponentScore)
    {
        result = "loose";
    }else
    {
        result = "tie";
    }
    return result;
}
showAllResults(seasonResults);

*/


