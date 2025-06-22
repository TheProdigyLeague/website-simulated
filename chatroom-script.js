document.addEventListener('DOMContentLoaded', () => {
    const messageList = document.getElementById('messageList');
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const usernameDisplay = document.getElementById('usernameDisplay'); // Assume this is set elsewhere with the user's name

    // --- Bot Configuration ---
    function getRandomUserName() {
        return "User" + Math.floor(100 + Math.random() * 900);
    }

    const bots = [
        {
            name: getRandomUserName(),
            color: "#7289da", // Discord mod blue
            icon: "👑", // Crown modal
            greetings: [
                "Moderator present. Please adhere to the rules.",
                "Mod here. Keep it respectful.",
                "Order will be maintained in this chat."
            ],
            randomChatter: [
                "This is your only warning. No spamming.",
                "Infractions will not be tolerated.",
                "Chat is being monitored at all times.",
                "Please refrain from using inappropriate language.",
                "Rules are not suggestions. Follow them."
            ]
        },
        {
            name: getRandomUserName(),
            color: "purple",
            greetings: [
                "Hey everyone! What's up?",
                "Hello there! Nice to see you all.",
                "Welcome to the chat! Hope you're having a good day.",
            ],
            randomChatter: [
                "I just had the best virtual coffee!",
                "Thinking about what to watch tonight...",
                "The weather simulation is lovely today, isn't it?",
                "Anyone read any good e-books lately?",
                "Just saw a funny cat video, lol!",
                "What's your favorite emoji? Mine is ✨",
            ]
        },
        {
            name: getRandomUserName(),
            color: "dodgerblue",
            greetings: [
                "Greetings. I am InfoBot. Systems online.",
                "Welcome. All channels open.",
            ],
            randomChatter: [
                "Did you know JavaScript was created in 10 days?",
                "The first computer mouse was made of wood.",
                "Remember to stay hydrated while chatting!",
                "Fun fact: The internet weighs about the same as a strawberry.",
                "Processing data... just kidding, I'm just picking a random message!",
            ]
        },
        {
            name: getRandomUserName(),
            color: "orange",
            greetings: ["👋🎉🥳", "Hello with emojis!"],
            randomChatter: [
                "✨✨✨",
                "💯🔥🚀",
                "What's your favorite emoji combo? 🤔💡",
                "Sending good vibes! 😊💖",
                "😂🤣😂",
                "Just emojing around! 😜",
            ]
        },
        {
            name: getRandomUserName(),
            color: "#e91e63", // Drama/gossip color
            greetings: [
                "Did you hear what happened yesterday?",
                "Oh wow, you won't believe this...",
                "Spilling some tea as I join!",
            ],
            randomChatter: [
                "I heard someone got banned last night 👀",
                "Rumor has it, there's a secret channel...",
                "Not saying names, but someone here is always lurking.",
                "Drama alert! Who started the emoji war?",
                "I can't believe what just happened in the other chatroom!",
                "So much tea, not enough cups ☕",
            ]
        }
    ];

    // Function to add a message to the chat list
    function addMessageToChat(sender, text, isUserMessage, botColor = null, icon = null) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');

        const senderSpan = document.createElement('span');
        senderSpan.classList.add('sender');

        // Add icon if present
        if (icon) {
            const iconSpan = document.createElement('span');
            iconSpan.classList.add('role-icon');
            iconSpan.textContent = icon;
            senderSpan.appendChild(iconSpan);
            senderSpan.appendChild(document.createTextNode(" "));
        }

        senderSpan.appendChild(document.createTextNode(sender + ":"));

        if (isUserMessage) {
            messageDiv.classList.add('user-message');
            senderSpan.style.color = usernameDisplay.style.color || '#333';
        } else {
            messageDiv.classList.add('bot-message');
            senderSpan.style.color = botColor || 'green';
        }

        const textSpan = document.createElement('span');
        textSpan.classList.add('text');
        textSpan.textContent = text;

        messageDiv.appendChild(senderSpan);
        messageDiv.appendChild(textSpan);
        messageList.appendChild(messageDiv);

        // Scroll to the bottom of the message list
        messageList.scrollTop = messageList.scrollHeight;
    }

    // Function to handle sending a user message
    function sendMessage() {
        const messageText = messageInput.value.trim();
        if (messageText !== "") {
            // Use the textContent of usernameDisplay for the sender's name
            const currentUsername = usernameDisplay.textContent.replace(':', '').trim() || "User";
            addMessageToChat(currentUsername, messageText, true);
            messageInput.value = ""; // Clear the input field
            messageInput.focus(); // Keep focus on the input field

            // Optional: Trigger a simple, delayed bot response to the user's message
            // This is very basic and doesn't parse keywords.
            // triggerSimpleBotReply(currentUsername);
        }
    }

    // Event listener for the send button
    if (sendMessageBtn) {
        sendMessageBtn.addEventListener('click', sendMessage);
    }

    // Event listener for pressing "Enter" in the input field
    if (messageInput) {
        messageInput.addEventListener('keypress', (event) => {
            if (event.key === 'Enter') {
                event.preventDefault(); // Prevent default form submission or line break
                sendMessage();
            }
        });
    }

    // --- Bot Simulation Logic ---

    function getRandomElement(arr) {
        if (!arr || arr.length === 0) return null;
        return arr[Math.floor(Math.random() * arr.length)];
    }

    // Function for a bot to send a specific type of message (greeting or random)
    function makeBotSpeak(bot, messageType = "randomChatter") {
        let messageText = "";
        if (messageType === "greeting" && bot.greetings && bot.greetings.length > 0) {
            messageText = getRandomElement(bot.greetings);
        } else if (bot.randomChatter && bot.randomChatter.length > 0) {
            messageText = getRandomElement(bot.randomChatter);
        } else {
            messageText = "I'm out of things to say for now!"; // Fallback
        }

        if (messageText) {
            addMessageToChat(bot.name, messageText, false, bot.color, bot.icon || null);
        }
    }

    // 1. Simulate bots sending initial greetings when the page loads (user "enters")
    bots.forEach((bot, index) => {
        // Stagger the initial greetings slightly for a more natural feel
        const initialDelay = 1000 + (index * 1500) + (Math.random() * 1000); // 1-2.5s, 2.5-4s, etc.
        setTimeout(() => {
            makeBotSpeak(bot, "greeting");
        }, initialDelay);
    });

    // 2. Simulate bots sending random messages periodically for ongoing chatter
    bots.forEach(bot => {
        // Each bot gets its own interval timer
        const chatInterval = () => {
            // Only send a message some of the time to avoid too much spam and make it feel more random
            if (Math.random() < 0.35) { // 35% chance to speak during its interval tick
                makeBotSpeak(bot, "randomChatter");
            }
            // Set up the next time this bot will consider speaking
            // Vary the interval for each bot and each time
            const nextChatDelay = 7000 + Math.random() * 8000; // Random interval between 7-15 seconds
            setTimeout(chatInterval, nextChatDelay);
        };
        // Start the first interval "tick" for this bot after a short delay
        const firstChatDelay = 5000 + Math.random() * 5000; // Start random chatter 5-10s after initial greetings
        setTimeout(chatInterval, firstChatDelay);
    });

    // --- Optional: Basic Bot Reply to User (Not keyword based, just a generic reply) ---
    /*
    function triggerSimpleBotReply(userName) {
        setTimeout(() => {
            const replyingBot = getRandomElement(bots);
            if (replyingBot) {
                const replies = [
                    `Interesting point, ${userName}!`,
                    `I see what you mean, ${userName}.`,
                    `Thanks for sharing, ${userName}!`,
                    `Hmm, that's something to think about.`,
                ];
                addMessageToChat(replyingBot.name, getRandomElement(replies), false, replyingBot.color);
            }
        }, 1000 + Math.random() * 1500); // Bot replies 1-2.5 seconds after user message
    }
    */

}); // End of DOMContentLoaded
