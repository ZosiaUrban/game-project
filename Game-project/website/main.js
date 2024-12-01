const icaoHints = {
    JFK: ["This country is known as the 'Land of Opportunity'.", "It has the Statue of Liberty.", "Its capital is Washington, D.C."],
    LHR: ["This country is famous for tea and Big Ben.", "It’s home to the Queen.", "Its capital is London."],
    DXB: ["This country has the Burj Khalifa.", "It is in the Middle East.", "Its capital is Abu Dhabi."],
    HND: ["This country is known for sushi.", "It has Mount Fuji.", "Its capital is Tokyo."]
};


document.getElementById('startGameForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const playerName = document.getElementById('playerName').value;
    const difficultyLevel = document.getElementById('difficultyLevel').value;

    if (playerName && difficultyLevel) {
        startGame(playerName, difficultyLevel);
    } else {
        alert('Please enter your name and select a difficulty level.');
    }
});

function startGame(playerName, difficultyLevel) {
    const gameContainer = document.querySelector('.game-container');
    gameContainer.innerHTML = `<h2>Hello ${playerName},</h2>
        <p>A passenger lost their luggage! Help them find it.</p>
        <div id="gameArea"></div>`;

    let attempts = 3;
    const co2Penalty = 10;
    let currentHintIndex = 0;


    const icaoCodes = Object.keys(icaoHints);
    const icaoCode = icaoCodes[Math.floor(Math.random() * icaoCodes.length)];
    const hints = icaoHints[icaoCode];

    const gameArea = document.getElementById('gameArea');

    gameArea.innerHTML = `
        <p>The passenger says the luggage was lost in a country whose airport ICAO code is: <strong>${icaoCode}</strong>.</p>
        <p>Some hint for you: ${hints[currentHintIndex]}</p>
        <input type="text" id="countryGuess" placeholder="Name the country!">
        <button id="submitGuess">Fly there</button>
        <p id="attemptsLeft">Attempts left: ${attempts}</p>
        <p id="co2Status">CO2 Levels: 100%</p>
        <p id="gameStatus"></p>
    `;


    document.getElementById('submitGuess').addEventListener('click', function () {
        const guess = document.getElementById('countryGuess').value.trim().toLowerCase();
        const correctAnswer = getCountryFromICAO(icaoCode).toLowerCase();

        if (guess === correctAnswer) {
            document.getElementById('gameStatus').innerHTML = `<strong>Correct!</strong> You helped the passenger find their luggage.`;
            endGameOptions();
        } else {
            attempts--;
            currentHintIndex++;
            document.getElementById('attemptsLeft').innerText = `Attempts left: ${attempts}`;
            document.getElementById('co2Status').innerText = `CO2 Levels: ${100 - (3 - attempts) * co2Penalty}%`;

            if (attempts > 0) {
                document.getElementById('gameStatus').innerHTML = `<strong>Wrong guess!</strong> Here is another hint: ${hints[currentHintIndex]}`;
            } else {
                document.getElementById('gameStatus').innerHTML = `<strong>Game Over!</strong> You've run out of attempts. The correct answer was <strong>${getCountryFromICAO(icaoCode)}</strong>.`;
                endGameOptions();
            }
        }
    });
}

function getCountryFromICAO(icaoCode) {
    const icaoToCountry = {
        JFK: "United States",
        LHR: "United Kingdom",
        DXB: "United Arab Emirates",
        HND: "Japan"
    };
    return icaoToCountry[icaoCode];
}

function endGameOptions() {
    const gameArea = document.getElementById('gameArea');
    gameArea.innerHTML += `
        <div class="game-over-options">
            <button onclick="window.location.href='gamepage.html'">Play Again</button>
            <button onclick="window.location.href='main.html'">Back to Home</button>
        </div>
    `;
}
