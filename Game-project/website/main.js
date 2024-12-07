import { passengers } from './data.js';

let currentRound = 0;
const maxRounds = 5;
let currentPassenger = null;
let currentCountry = null;
let attempts = 0;
let difficultyLevel = null;
// easy to guess countries becaause the game was too hard
const popularCountryNames = [
    "Canada", "Russia", "South Africa", "Mexico", "Germany",
    "Thailand", "New Zealand", "United States", "Japan", "Brazil",
    "France", "Italy", "China", "India", "United Kingdom",
    "Australia", "Argentina", "Egypt", "South Korea", "Spain",
    "Turkey", "Netherlands", "Sweden", "Norway", "Greece",
    "Portugal", "Switzerland", "Denmark", "Poland", "Vietnam"
];

document.getElementById('startGameForm').addEventListener('submit', function (e) {
    e.preventDefault();
    const playerName = document.getElementById('playerName').value;
    difficultyLevel = document.getElementById('difficultyLevel').value;

    if (playerName && difficultyLevel) {
        startGame(playerName);
    } else {
        alert('Please enter your name and select a difficulty level.');
    }
});

function startGame(playerName) {
    currentRound = 0;
    document.querySelector('.game-container').innerHTML = `
        <h2>Hello ${playerName},</h2>
        <p>Get ready for a thrilling detective mission. Solve cases for 5 passengers!</p>
        <div id="gameArea"></div>
    `;
    nextRound();
}

async function fetchCountryData() {
    const url = `https://restcountries.com/v3.1/all`;
    try {
        const response = await fetch(url);
        const data = await response.json();
        // easy guessing countries
        return data.filter(country =>
            popularCountryNames.includes(country.name.common)
        );
    } catch (error) {
        console.error('Error fetching country data:', error);
        return null;
    }
}
// easy fun facts cuz the api ones are too hard sometimes
function generateFunFacts(country) {
    const funFacts = [];
    const predefinedFacts = {
        "Canada": [
            "Famous for maple syrup.",
            "Known for its stunning national parks.",
            "Home to the Rocky Mountains."
        ],
        "Japan": [
            "Famous for sushi and ramen.",
            "Home to Mount Fuji.",
            "Known for cherry blossoms."
        ],
        "Italy": [
            "Known for pizza and pasta.",
            "Home to the Colosseum.",
            "Famous for its art and Renaissance history."
        ],
        "France": [
            "Known for the Eiffel Tower.",
            "Famous for croissants and baguettes.",
            "Home to the Louvre Museum."
        ],
        "India": [
            "Home to the Taj Mahal.",
            "Famous for its spicy curries and chai tea.",
            "Known for Bollywood movies."
        ],
        "Brazil": [
            "Known for the Amazon rainforest.",
            "Famous for its Carnival festival.",
            "Home to Christ the Redeemer statue."
        ],
        "United States": [
            "Known for the Statue of Liberty.",
            "Famous for hamburgers and hot dogs.",
            "Home to the Grand Canyon."
        ],
        "China": [
            "Home to the Great Wall of China.",
            "Famous for its pandas and bamboo.",
            "Known for its delicious dumplings."
        ]
    };

    // cheker of predifined facts for countries
    if (predefinedFacts[country.name.common]) {
        funFacts.push(...predefinedFacts[country.name.common]);
    }

    // api genertaed facts
    if (country.capital?.length) funFacts.push(`Its capital city is ${country.capital[0]}.`);
    if (country.languages) {
        const languageNames = Object.values(country.languages).join(', ');
        funFacts.push(`People here speak ${languageNames}.`);
    }
    if (country.currencies) {
        const currencyNames = Object.values(country.currencies).map(curr => curr.name).join(', ');
        funFacts.push(`Its currency is the ${currencyNames}.`);
    }

    // Shoffules the facts so they dont repeat
    for (let i = funFacts.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [funFacts[i], funFacts[j]] = [funFacts[j], funFacts[i]];
    }

    while (funFacts.length < 5) {
        funFacts.push('No more hints available!');
    }

    return funFacts;
}

async function nextRound() {
    if (currentRound >= maxRounds) {
        endGame();
        return;
    }

    currentRound++;
    currentPassenger = passengers[Math.floor(Math.random() * passengers.length)];
    const countries = await fetchCountryData();
    if (!countries || countries.length === 0) {
        alert('Could not fetch country data. Please check your internet connection.');
        return;
    }

    currentCountry = countries[Math.floor(Math.random() * countries.length)];
    const funFacts = generateFunFacts(currentCountry);

    attempts = difficultyLevel === "easy" ? 5 : difficultyLevel === "medium" ? 3 : 2;

    const gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = `
        <h3>Round ${currentRound} of ${maxRounds}</h3>
        <p>Passenger Details:</p>
        <ul>
            <li><strong>Name:</strong> ${currentPassenger.firstName} ${currentPassenger.lastName}</li>
            <li><strong>Age:</strong> ${currentPassenger.age}</li>
            <li><strong>Destination Airport:</strong> ${currentPassenger.destinationAirport}</li>
            <li><strong>Luggage Code:</strong> ${currentPassenger.luggageCode}</li>
        </ul>
        <p>Can you guess the country based on these facts?</p>
        <p><strong>Fact:</strong> ${funFacts[0]}</p>
        <input type="text" id="countryGuess" placeholder="Guess the country">
        <button id="submitGuess">Submit Guess</button>
        <p id="attemptsLeft">Attempts left: ${attempts}</p>
        <p id="gameStatus"></p>
    `;

    document.getElementById('submitGuess').addEventListener('click', () => handleGuess(funFacts));
}

function handleGuess(funFacts) {
    const guess = document.getElementById('countryGuess').value.trim().toLowerCase();
    const correctAnswer = currentCountry.name.common.toLowerCase();

    if (guess === correctAnswer) {
        document.getElementById('gameStatus').innerHTML = `
            <strong>Correct!</strong> You found the luggage for ${currentPassenger.firstName}.
        `;
        setTimeout(nextRound, 2000); //little delay in round
    } else {
        attempts--;

        if (attempts <= 0) {
            document.getElementById('gameStatus').innerHTML = `
                <strong>Game Over for this round!</strong> The correct answer was <strong>${currentCountry.name.common}</strong>.
            `;
            setTimeout(nextRound, 2000);
        } else {
            const nextHint = funFacts[funFacts.length - attempts] || 'No more hints available!';
            document.getElementById('gameStatus').innerHTML = `
                <strong>Wrong guess!</strong> Try again.
                <p><strong>Hint:</strong> ${nextHint}</p>
            `;
        }

        document.getElementById('attemptsLeft').innerText = `Attempts left: ${attempts}`;
    }
}

function endGame() {
    const gameArea = document.getElementById('gameArea');
    gameArea.innerHTML = `
        <h3>Congratulations!</h3>
        <p>You completed all ${maxRounds} rounds. Thank you for playing Luggage Detective.</p>
        <button onclick="location.reload()">Play Again</button>
        <button onclick="window.location.href='main.html'">Exit to Home</button>
    `;
}

