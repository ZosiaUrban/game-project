

const countries = [
    {
        code: "AE",
        name: "United Arab Emirates",
        continent: "AS",
        facts: [
            "Home of Dubai.",
            "Known for luxury shopping.",
            "Famous for the Burj Khalifa."
        ]
    },
    {
        code: "AR",
        name: "Argentina",
        continent: "SA",
        facts: [
            "Famous for tango dancing.",
            "Home of Patagonia.",
            "Known for its beef."
        ]
    },
    {
        code: "AT",
        name: "Austria",
        continent: "EU",
        facts: [
            "Birthplace of Mozart.",
            "Known for its classical music heritage.",
            "Home of the Alps."
        ]
    },
    {
        code: "BR",
        name: "Brazil",
        continent: "SA",
        facts: [
            "Home of the Amazon rainforest.",
            "Known for Carnival.",
            "Famous for football (soccer)."
        ]
    },
    {
        code: "CH",
        name: "Switzerland",
        continent: "EU",
        facts: [
            "Famous for chocolate.",
            "Home of the Alps.",
            "Known for its neutrality."
        ]
    },
    {
        code: "EG",
        name: "Egypt",
        continent: "AF",
        facts: [
            "Home of the pyramids.",
            "Located along the Nile River.",
            "Known for ancient history."
        ]
    },
    {
        code: "IN",
        name: "India",
        continent: "AS",
        facts: [
            "Known for the Taj Mahal.",
            "Home of diverse cultures.",
            "Famous for its spices."
        ]
    },
    {
        code: "IT",
        name: "Italy",
        continent: "EU",
        facts: [
            "Known for its Roman history.",
            "Home of the Colosseum.",
            "Famous for pizza and pasta."
        ]
    },
    {
        code: "JP",
        name: "Japan",
        continent: "AS",
        facts: [
            "Known for sushi and ramen.",
            "Famous for cherry blossoms.",
            "Home of Mount Fuji."
        ]
    },
    {
        code: "US",
        name: "United States",
        continent: "NA",
        facts: [
            "Known for its national parks.",
            "Home of Hollywood.",
            "Has 50 states."
        ]
    },
    {
        code: "FR",
        name: "France",
        continent: "EU",
        facts: [
            "Known for the Eiffel Tower.",
            "Famous for wine and cheese.",
            "Home of the Louvre Museum."
        ]
    },
    {
        code: "CN",
        name: "China",
        continent: "AS",
        facts: [
            "Known for the Great Wall.",
            "Famous for its ancient history.",
            "World's most populous country."
        ]
    },
    {
        code: "AU",
        name: "Australia",
        continent: "OC",
        facts: [
            "Home of the Sydney Opera House.",
            "Known for unique wildlife.",
            "Famous for the Great Barrier Reef."
        ]
    },
    {
        code: "CA",
        name: "Canada",
        continent: "NA",
        facts: [
            "Second-largest country in the world.",
            "Famous for maple syrup.",
            "Known for its stunning national parks."
        ]
    },
    {
        code: "RU",
        name: "Russia",
        continent: "EU/AS",
        facts: [
            "Largest country in the world.",
            "Known for the Red Square.",
            "Home of the Trans-Siberian Railway."
        ]
    },
    {
        code: "ZA",
        name: "South Africa",
        continent: "AF",
        facts: [
            "Known for its wildlife safaris.",
            "Has three capital cities.",
            "Famous for Table Mountain."
        ]
    },
    {
        code: "MX",
        name: "Mexico",
        continent: "NA",
        facts: [
            "Known for its ancient Mayan ruins.",
            "Famous for tacos and tequila.",
            "Home of vibrant festivals like Día de Muertos."
        ]
    },
    {
        code: "DE",
        name: "Germany",
        continent: "EU",
        facts: [
            "Known for Oktoberfest.",
            "Famous for its engineering and cars.",
            "Home of the Berlin Wall."
        ]
    },
    {
        code: "TH",
        name: "Thailand",
        continent: "AS",
        facts: [
            "Known for its tropical beaches.",
            "Famous for temples and street food.",
            "Home of Bangkok, the vibrant capital."
        ]
    },
    {
        code: "NZ",
        name: "New Zealand",
        continent: "OC",
        facts: [
            "Known for its breathtaking landscapes.",
            "Famous for The Lord of the Rings filming locations.",
            "Home of Maori culture."
        ]
    }
];

const passengers = [
    { id: 1, firstName: "John", lastName: "Doe", age: 28, gender: "Male", destinationAirport: "CDG", luggageCode: "LUG001" },
    { id: 2, firstName: "Jane", lastName: "Smith", age: 34, gender: "Female", destinationAirport: "KEF", luggageCode: "LUG002" },
    { id: 3, firstName: "Michael", lastName: "Johnson", age: 45, gender: "Male", destinationAirport: "FRA", luggageCode: "LUG003" },
    { id: 4, firstName: "Emily", lastName: "Davis", age: 22, gender: "Female", destinationAirport: "AMS", luggageCode: "LUG004" },
    { id: 5, firstName: "Chris", lastName: "Wilson", age: 37, gender: "Male", destinationAirport: "DUB", luggageCode: "LUG005" },
    { id: 6, firstName: "Sarah", lastName: "Lee", age: 29, gender: "Female", destinationAirport: "DXB", luggageCode: "LUG006" },
    { id: 7, firstName: "David", lastName: "Brown", age: 33, gender: "Male", destinationAirport: "GRU", luggageCode: "LUG007" },
    { id: 8, firstName: "Sophia", lastName: "Martinez", age: 25, gender: "Female", destinationAirport: "FCO", luggageCode: "LUG008" },
    { id: 9, firstName: "James", lastName: "Anderson", age: 41, gender: "Male", destinationAirport: "NRT", luggageCode: "LUG009" },
    { id: 10, firstName: "Olivia", lastName: "Garcia", age: 26, gender: "Female", destinationAirport: "CAI", luggageCode: "LUG010" },
    { id: 11, firstName: "Liam", lastName: "Rodriguez", age: 30, gender: "Male", destinationAirport: "DEL", luggageCode: "LUG011" },
    { id: 12, firstName: "Emma", lastName: "Clark", age: 38, gender: "Female", destinationAirport: "LAX", luggageCode: "LUG012" },
    { id: 13, firstName: "Benjamin", lastName: "Lopez", age: 32, gender: "Male", destinationAirport: "ZRH", luggageCode: "LUG013" },
    { id: 14, firstName: "Mia", lastName: "Hernandez", age: 24, gender: "Female", destinationAirport: "EZE", luggageCode: "LUG014" },
    { id: 15, firstName: "William", lastName: "Moore", age: 36, gender: "Male", destinationAirport: "VIE", luggageCode: "LUG015" }
];

export { countries, passengers };
