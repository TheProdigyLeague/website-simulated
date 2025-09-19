document.addEventListener('DOMContentLoaded', () => {
    const gameGallery = document.getElementById('gameGallery');

    // --- GAME DATA ---
    // This is where you'll list your games.
    // For each game, provide:
    // - id: A unique identifier (can be a string)
    // - title: The name of the game
    // - description: A short description (optional)
    // - imageUrl: Path to the game's preview image
    // - gameUrl: The URL or path to the HTML file that runs the game
    const games = [
        {
            id: 'game1',
            title: 'Text Adventure',
            description: 'No Socks Gaming..',
            imageUrl: 'images/txtad.png',
            gameUrl: 'https://theprodigyleague.github.io/game/'
        },
        {
            id: 'game2',
            title: 'Conquest Simulator',
            description: 'Interactive Map...',
            imageUrl: 'images/oldkingdomoldworld.png',
            gameUrl: ' https://theprodigyleague.github.io/g4m3/'
        },
        {
            id: 'game3',
            title: 'Chess Mod',
            description: 'Modulus Chess....',
            imageUrl: 'images/chess.png', // Create this image
            gameUrl: 'https://theprodigyleague.github.io/gameMockChess' // Can also be an external URL
        },
        {
            id: 'game4',
            title: 'Picture Game',
            description: 'Choose your own adventure!',
            imageURL: 'images/cardgame.png',
            gameURL: ' https://theprodigyleague.github.io/pictureGame/'
        },
        {
            id: 'game5',
            title: 'In-game Lobby',
            description: 'Microtransactions!!',
            iamgeURL: 'images/lobbysim.png',
            gameURL: 'https://theprodigyleague.github.io/codespaces-mockGame/',
        }
        
        // Add more game objects here...
        // {
        //     id: 'yourGameId',
        //     title: 'Your Game Title',
        //     description: 'A brief description of your game.',
        //     imageUrl: 'path/to/your/game_preview_image.png',
        //     gameUrl: 'path/to/your/game.html'
        // }
    ];

    // Function to create and display game items
    function displayGames() {
        if (!gameGallery) {
            console.error("Game gallery element not found!");
            return;
        }
        gameGallery.innerHTML = ''; // Clear any existing content

        games.forEach(game => {
            const gameItem = document.createElement('div');
            gameItem.classList.add('game-item');
            gameItem.setAttribute('data-game-url', game.gameUrl); // Store game URL for click handling

            const gameImage = document.createElement('img');
            gameImage.src = game.imageUrl;
            gameImage.alt = game.title + " Preview";

            const gameTitle = document.createElement('h3');
            gameTitle.textContent = game.title;

            const gameDescription = document.createElement('p');
            gameDescription.textContent = game.description || ''; // Use description or empty string

            gameItem.appendChild(gameImage);
            gameItem.appendChild(gameTitle);
            gameItem.appendChild(gameDescription);

            // Event listener to open game in a new window when clicked
            gameItem.addEventListener('click', () => {
                // You can customize window features
                const windowFeatures = 'width=800,height=600,resizable=yes,scrollbars=yes,menubar=no,toolbar=no,location=no,status=no';
                const gameWindow = window.open(game.gameUrl, game.id + '_Window', windowFeatures); // Use game.id for unique window name
                if (gameWindow) {
                    gameWindow.focus();
                } else {
                    alert('Please allow pop-ups for this website to open the game.');
                }
            });

            gameGallery.appendChild(gameItem);
        });
    }

    // Initialize the gallery
    displayGames();
});
