document.addEventListener('DOMContentLoaded', () => {
    const simulatedFeedContainer = document.getElementById('simulatedFeed');

    // --- Option 1: Using Twitter's Official Embed ---
    // The HTML part in blogfeed.html with <a class="twitter-timeline"... and widgets.js script
    // will automatically embed a Twitter timeline. No extra JS needed for this part here
    // unless you want to dynamically change the embedded timeline's source.

    // --- Option 2: Simulated Feed with Visual-Only Interactions ---
    const mockTweets = [
        {
            id: 'tweet1',
            avatar: 'https://via.placeholder.com/48/0000FF/FFFFFF?Text=U1', // Placeholder avatar
            author: 'User One',
            handle: '@userone',
            content: 'This is a simulated tweet! Exploring client-side feed creation. #javascript #webdev',
            likes: 15,
            retweets: 3,
            replies: 1
        },
        {
            id: 'tweet2',
            avatar: 'https://via.placeholder.com/48/FF0000/FFFFFF?Text=U2',
            author: 'Dev Guru',
            handle: '@devguru',
            content: 'Client-side interactions are fun for demos, but remember backend is key for real apps. Check out Twitter API docs for more.',
            likes: 42,
            retweets: 10,
            replies: 5
        },
        {
            id: 'tweet3',
            avatar: 'https://via.placeholder.com/48/008000/FFFFFF?Text=U3',
            author: 'CyberSec News',
            handle: '@securefeed',
            content: 'New CVE announced: CVE-2024-XXXX. Stay updated and patch your systems!' // Added more content here
        } // Closed the object
    ]; // Closed the array

    if (simulatedFeedContainer) {
        // Function to create and append a single tweet element
        function createTweetElement(tweetData) {
            const tweetElement = document.createElement('div');
            tweetElement.classList.add('tweet'); // Add a class for styling
            tweetElement.id = tweetData.id;

            tweetElement.innerHTML = `
                <div class="tweet-header">
                    <img src="${tweetData.avatar}" alt="${tweetData.author} avatar" class="tweet-avatar">
                    <div class="tweet-author-info">
                        <span class="tweet-author">${tweetData.author}</span>
                        <span class="tweet-handle">${tweetData.handle}</span>
                    </div>
                </div>
                <p class="tweet-content">${tweetData.content}</p>
                <div class="tweet-actions">
                    <span>Likes: ${tweetData.likes}</span>
                    <span>Retweets: ${tweetData.retweets}</span>
                    <span>Replies: ${tweetData.replies}</span>
                </div>
            `;
            return tweetElement;
        }

        // Clear any existing content (e.g., placeholder text)
        simulatedFeedContainer.innerHTML = '';

        // Create and append each tweet
        mockTweets.forEach(tweet => {
            const tweetNode = createTweetElement(tweet);
            simulatedFeedContainer.appendChild(tweetNode);
        });

    } else {
        console.error('Error: simulatedFeed container not found in the DOM.');
    }
});