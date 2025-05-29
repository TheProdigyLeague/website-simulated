document.addEventListener('DOMContentLoaded', () => {
    const simulatedFeedContainer = document.getElementById('simulatedFeed');

    // --- Option 1: Using Twitter's Official Embed ---
    // (No changes needed here if you're using the HTML embed)

    // --- Option 2: Simulated Feed with Visual-Only Interactions ---
    const mockTweets = [
        // Cybersecurity Tweets
        {
            id: 'tweet_cs1',
            // Assuming your images are in an 'imgs' folder relative to your HTML file
            avatar: 'images/cybersec_avatar.png', // Example: Replace with your actual image path
            author: 'CyberSec News',
            handle: '@securefeed',
            content: 'New critical vulnerability (CVE-2024-XXXX) discovered in popular web server software. Patch immediately! #cybersecurity #vulnerability',
            likes: 125,
            retweets: 60,
            replies: 12
        },
        {
            id: 'tweet_cs2',
            avatar: 'images/threatintel_avatar.png', // Example
            author: 'Threat Intel Weekly',
            handle: '@ThreatIntel',
            content: 'Phishing attacks are on the rise, targeting remote workers. Be vigilant and verify all requests for sensitive information. #phishing #infosec',
            likes: 98,
            retweets: 45,
            replies: 8
        },
        {
            id: 'tweet_cs3',
            avatar: 'images/dataprotect_avatar.png', // Example
            author: 'DataGuard Pro',
            handle: '@DataProtect',
            content: 'Reminder: Regularly back up your important data and test your recovery process. Data loss can be catastrophic. #databackup #datasecurity',
            likes: 77,
            retweets: 30,
            replies: 5
        },
        {
            id: 'tweet_cs4',
            avatar: 'images/zerodayalert_avatar.png', // Example
            author: 'ZeroDayAlerts',
            handle: '@0DayWatch',
            content: 'We are tracking a new zero-day exploit affecting enterprise VPN solutions. Details are still emerging. Stay tuned. #zeroday #exploit',
            likes: 210,
            retweets: 95,
            replies: 25
        },

        // Stock Market Analysis Tweets
        {
            id: 'tweet_sm1',
            avatar: 'images/marketmaven_avatar.png', // Example
            author: 'Market Maven',
            handle: '@MarketMaven',
            content: 'Tech stocks showing strong bullish signals this week after positive earnings reports. $AAPL $MSFT looking particularly strong. #stocks #investing #tech',
            likes: 250,
            retweets: 75,
            replies: 30
        },
        {
            id: 'tweet_sm2',
            avatar: 'images/financewiz_avatar.png', // Example
            author: 'Finance Wiz',
            handle: '@FinanceWiz',
            content: 'The Fed\'s recent comments on inflation could lead to increased market volatility in the coming weeks. Diversification is key. #FederalReserve #inflation #economy',
            likes: 180,
            retweets: 65,
            replies: 15
        },
        {
            id: 'tweet_sm3',
            avatar: 'images/tradertalk_avatar.png', // Example
            author: 'TraderTalk Daily',
            handle: '@TraderTalk',
            content: 'Keep an eye on the energy sector. Geopolitical tensions are causing oil prices to fluctuate. $XOM $CVX #oil #energy #trading',
            likes: 155,
            retweets: 50,
            replies: 10
        },
        {
            id: 'tweet_sm4',
            avatar: 'images/valueinvestor_avatar.png', // Example
            author: 'Value Investor Insights',
            handle: '@ValueFocus',
            content: 'Finding undervalued gems in this market requires patience and thorough research. Looking at small-cap industrials for potential long-term growth. #valueinvesting #stocks',
            likes: 130,
            retweets: 40,
            replies: 7
        },

        // Original Tweets (can be kept or modified)
        {
            id: 'tweet_orig1',
            avatar: 'images/userone_avatar.png', // Example
            author: 'User One',
            handle: '@userone',
            content: 'This is a simulated tweet! Exploring client-side feed creation. #javascript #webdev',
            likes: 15,
            retweets: 3,
            replies: 1
        },
        {
            id: 'tweet_orig2',
            avatar: 'images/devguru_avatar.png', // Example
            author: 'Dev Guru',
            handle: '@devguru',
            content: 'Client-side interactions are fun for demos, but remember backend is key for real apps. Check out Twitter API docs for more.',
            likes: 42,
            retweets: 10,
            replies: 5
        }
    ];

    if (simulatedFeedContainer) {
        // Function to create and append a single tweet element
        function createTweetElement(tweetData) {
            const tweetElement = document.createElement('div');
            tweetElement.classList.add('tweet');
            tweetElement.id = tweetData.id;

            // Default values for missing properties to prevent 'undefined'
            const likes = tweetData.likes !== undefined ? tweetData.likes : 0;
            const retweets = tweetData.retweets !== undefined ? tweetData.retweets : 0;
            const replies = tweetData.replies !== undefined ? tweetData.replies : 0;
            // Ensure you have a default_avatar.png in your imgs folder or use a placeholder URL
            const avatar = tweetData.avatar || 'imgs/default_avatar.png';

            tweetElement.innerHTML = `
                <div class="tweet-header">
                    <img src="${avatar}" alt="${tweetData.author} avatar" class="tweet-avatar">
                    <div class="tweet-author-info">
                        <span class="tweet-author">${tweetData.author}</span>
                        <span class="tweet-handle">${tweetData.handle}</span>
                    </div>
                </div>
                <p class="tweet-content">${tweetData.content}</p>
                <div class="tweet-actions">
                    <span><i class="fas fa-comment"></i> ${replies}</span>
                    <span><i class="fas fa-retweet"></i> ${retweets}</span>
                    <span><i class="fas fa-heart"></i> ${likes}</span>
                </div>
            `;
            // Note: For the icons (fas fa-heart etc.) to work, you need to include Font Awesome
            // or a similar icon library in your HTML file.
            // Example: <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css">

            return tweetElement;
        }

        // Clear any existing content (e.g., placeholder text from HTML)
        simulatedFeedContainer.innerHTML = '';

        // Create and append each tweet
        mockTweets.forEach(tweet => {
            const tweetNode = createTweetElement(tweet);
            simulatedFeedContainer.appendChild(tweetNode);
        });

    } else {
        console.error('Error: simulatedFeed container (element with ID "simulatedFeed") not found in the DOM.');
    }
});
