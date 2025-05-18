// Make sure this script is loaded after your HTML elements exist,
// typically by placing it at the end of your <body> or using DOMContentLoaded.

document.addEventListener('DOMContentLoaded', function () {

    // 1. Get a reference to the burger menu button.
    const burgerMenuButton = document.querySelector('.burger-menu');

    // 2. Get a reference to the mobile navigation menu.
    const mobileNav = document.querySelector('.mobile-nav');

    // 3. Check if both elements were actually found in your HTML.
    //    This is a common point of failure.
    if (burgerMenuButton && mobileNav) {

        // 4. Add an event listener to the burger menu button.
        //    This function will run every time the burger menu is clicked.
        burgerMenuButton.addEventListener('click', function () {
            // 5. Toggle the 'is-active' class on the mobile navigation menu.
            //    - If 'mobile-nav' does NOT have 'is-active', it will be ADDED.
            //    - If 'mobile-nav' DOES have 'is-active', it will be REMOVED (closing the menu).
            mobileNav.classList.toggle('is-active');

            // OPTIONAL: If your burger icon itself changes (e.g., to an 'X'),
            // you would also toggle a class on it here:
            // burgerMenuButton.classList.toggle('is-active');

            // For debugging: Log to the console when the menu should be toggling.
            console.log("Burger clicked. Mobile nav 'is-active' class toggled.");
            console.log("Mobile nav classes:", mobileNav.classList);
        });

    } else {
        // If the elements aren't found, log an error.
        // This helps you find out if your class names in JS match your HTML.
        if (!burgerMenuButton) {
            console.error("ERROR: The element with class 'burger-menu' was not found.");
        }
        if (!mobileNav) {
            console.error("ERROR: The element with class 'mobile-nav' was not found.");
        }
    }

});

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