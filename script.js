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
// --- NEW: LOST STORIES GALLERY INTERACTIVITY (Icon-Based View) ---
document.addEventListener('DOMContentLoaded', () => {
    // ... (Existing DOMContentLoaded content) ...

    const iconToggleBtns = document.querySelectorAll('.icon-toggle-btn');
    const writingsView = document.getElementById('writings-content-view');
    const artView = document.getElementById('art-content-view');
    const storyBlocks = document.querySelectorAll('.story-block');
    const artPieces = document.querySelectorAll('.art-piece');

    function toggleContentView(targetId) {
        // Hide/deactivate all elements
        writingsView.classList.add('is-hidden');
        artView.classList.add('is-hidden');
        iconToggleBtns.forEach(btn => btn.classList.remove('active'));

        // Show/activate the target
        const targetView = document.getElementById(`${targetId}-content-view`);
        const targetBtn = document.querySelector(`.icon-toggle-btn[data-target="${targetId}"]`);

        if (targetView) {
            targetView.classList.remove('is-hidden');
            targetBtn.classList.add('active');
            window.scrollTo({ top: targetView.offsetTop, behavior: 'smooth' }); // Scrolls to the content area
        }
    }

    // Set 'writings' as default active view on load
    if (writingsView && artView) {
         // Initialize: writings should be visible, art hidden
        writingsView.classList.remove('is-hidden');
        artView.classList.add('is-hidden');
        document.querySelector('.icon-toggle-btn[data-target="writings"]').classList.add('active');
    }


    // 1. Add listeners to the icons to toggle the views
    iconToggleBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const targetViewId = this.getAttribute('data-target');
            toggleContentView(targetViewId);

            // On view switch, clear previous highlights in the art gallery
            artPieces.forEach(art => art.classList.remove('is-active'));
        });
    });

    // 2. Click-to-highlight logic: Click a story to show and highlight the art piece
    storyBlocks.forEach(block => {
        block.addEventListener('click', function() {
            const targetStoryId = this.getAttribute('data-story-id');

            // 2a. Switch the view to the Art Gallery
            toggleContentView('art');

            // 2b. Remove 'is-active' class from all art pieces
            artPieces.forEach(art => {
                art.classList.remove('is-active');
            });

            // 2c. Find the matching art piece and activate it
            const targetArt = document.querySelector(`#art-content-view .art-piece[data-story-id="${targetStoryId}"]`);

            if (targetArt) {
                targetArt.classList.add('is-active');

                // 2d. Scroll the Art View to the highlighted art piece
                targetArt.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        });
    });
});
