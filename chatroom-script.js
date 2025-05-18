document.addEventListener('DOMContentLoaded', () => {
    const messageList = document.getElementById('messageList');
    const messageInput = document.getElementById('messageInput');
    const sendMessageBtn = document.getElementById('sendMessageBtn');
    const usernameDisplay = document.getElementById('usernameDisplay'); // Get the username span

    // Function to add a message to the chat list
    function addMessageToChat(sender, text, isUserMessage) {
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message');
        if (isUserMessage) {
            messageDiv.classList.add('user');
        } else {
            messageDiv.classList.add('bot'); // For later bot messages
        }

        const senderSpan = document.createElement('span');
        senderSpan.classList.add('sender');
        senderSpan.textContent = sender + ":"; // Add colon after sender name

        const textSpan = document.createElement('span');
        textSpan.classList.add('text');
        textSpan.textContent = text;

        messageDiv.appendChild(senderSpan);
        messageDiv.appendChild(textSpan);
        messageList.appendChild(messageDiv);

        // Scroll to the bottom of the message list
        messageList.scrollTop = messageList.scrollHeight;
    }

    // Function to handle sending a message
    function sendMessage() {
        const messageText = messageInput.value.trim(); // Get text and remove whitespace

        if (messageText !== "") { // Only send if there's actual text
            const currentUsername = usernameDisplay.textContent || "User"; // Get username
            addMessageToChat(currentUsername, messageText, true); // True for user message
            messageInput.value = ""; // Clear the input field
            messageInput.focus(); // Keep focus on the input field
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

    // --- Placeholder for Bot Simulation (we'll add this next) ---
    // Example: Simulate a bot message after a delay
    // setTimeout(() => {
    //     addMessageToChat("ChatBot", "Welcome to the chatroom!", false);
    // }, 1500);
});