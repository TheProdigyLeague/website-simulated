document.addEventListener('DOMContentLoaded', () => {
    // --- Chatroom Link Logic (remains the same) ---
    const openChatroomLinkDesktop = document.getElementById('openChatroomLink');
    const openChatroomLinkMobile = document.getElementById('openMobileChatroomLink');

    const openChatWindow = (event) => {
        event.preventDefault();
        const chatroomUrl = 'chatroom.html';
        const windowFeatures = 'width=500,height=700,resizable=yes,scrollbars=yes';
        const chatWindow = window.open(chatroomUrl, 'ChatroomWindow', windowFeatures);
        if (chatWindow) {
            chatWindow.focus();
        } else {
            alert('The chatroom window was blocked by a popup blocker. Please allow popups for this site.');
        }
    };

    if (openChatroomLinkDesktop) {
        openChatroomLinkDesktop.addEventListener('click', openChatWindow);
    }
    if (openChatroomLinkMobile) {
        openChatroomLinkMobile.addEventListener('click', openChatWindow);
    }

    // --- Game Room Link Logic (Updated) ---
    const openGameroomLinkDesktop = document.getElementById('openGameroomLink');
    const openGameroomLinkMobile = document.getElementById('openMobileGameroomLink'); // Ensure this ID matches your HTML

    const openGameWindow = (event) => {
        event.preventDefault(); // Prevent default anchor link behavior

        // *** THIS IS THE KEY CHANGE: Point to your gameroom.html file ***
        const gameroomUrl = 'gameroom.html';

        // Define the window features (size, scrollbars, etc.)
        const windowFeatures = 'width=800,height=600,resizable=yes,scrollbars=yes';

        // Open the new window
        const gameWindow = window.open(gameroomUrl, 'GameRoomWindow', windowFeatures);

        // Check if the window was successfully opened
        if (gameWindow) {
            gameWindow.focus(); // Bring the new window to the front
        } else {
            // Inform the user if the popup was blocked
            alert('The game room window was blocked by a popup blocker. Please allow popups for this site.');
        }
    };

    // Attach the event listener to the desktop game room link
    if (openGameroomLinkDesktop) {
        openGameroomLinkDesktop.addEventListener('click', openGameWindow);
    }

    // Attach the event listener to the mobile game room link
    if (openGameroomLinkMobile) {
        openGameroomLinkMobile.addEventListener('click', openGameWindow);
    }
});