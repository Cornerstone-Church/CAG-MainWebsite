<?php
try {
    $channelId = 'UCx-bgFNkwgq1c_42gy-BNrw';
    $videoId = getLiveVideoID($channelId);
    $chatURL = "https://www.youtube.com/live_chat?v=".$videoId."&embed_domain=cag.org";
} catch(Exception $e) {
    // Echo the generated error
    echo '<div id="offline-error"></div>';
}

// The method which finds the video ID
function getLiveVideoID($channelId)
{
    $videoId = null;

    // Fetch the livestream page
    if($data = file_get_contents('https://www.youtube.com/embed/live_stream?channel='.$channelId))
    {
        // Find the video ID in there
        if(preg_match('/\'VIDEO_ID\': \"(.*?)\"/', $data, $matches))
            $videoId = $matches[1];
        else
            throw new Exception('Couldn\'t find video ID');
    }
    else
        throw new Exception('Couldn\'t fetch data');

    return $videoId;
}
?>

<!DOCTYPE html>
<html lang="en">

<head>
    <title>Live Service | Cornerstone Church</title>
    <meta charset="utf8">

    <!-- Search Engine Information -->
    <meta name="title" content="Cornerstone Church Live Service | Bowie MD">
    <meta name="description"
        content="Building an Authentic Community, Lifting up Jesus, Growing in Him, and Touching our World. Cornerstone Church is located in Bowie, Maryland. Experience God through services and activities on Saturday, Sunday, and throughout the week.">

    <meta name="viewport" content="width=device-width">
    <link rel="stylesheet" href="/styles/style.css?version=20021101">
    <link rel="stylesheet" href="/styles/debug.css">
    <link rel="stylesheet" type="text/css" href="./styles/style.css?version=20031901">

    <!-- Fav Icons -->
    <link rel="apple-touch-icon" sizes="180x180" href="/fav_icons/apple-touch-icon.png">
    <link rel="icon" type="image/png" sizes="32x32" href="/fav_icons/favicon-32x32.png">
    <link rel="icon" type="image/png" sizes="16x16" href="/fav_icons/favicon-16x16.png">
    <link rel="manifest" href="/fav_icons/site.webmanifest">
    <link rel="mask-icon" href="/fav_icons/safari-pinned-tab.svg" color="#ecf0f1">
    <meta name="msapplication-TileColor" content="#ecf0f1">
    <meta name="theme-color" content="#242424">

    <!-- Preview Elements -->
    <meta property="og:image" content="https://cag.org/ref/thumbnails/Website_Thumbnail.jpg">
    <meta property="og:description"
        content="Building an Authentic Community, Lifting up Jesus, Growing in Him and Touching our World. Check Cornerstone Church located in Bowie MD. Experience God through our services and activities on Saturday, Sunday, and through the week.">

    <!-- Global site tag (gtag.js) - Google Analytics -->
    <script async src="https://www.googletagmanager.com/gtag/js?id=UA-138079008-1"></script>
    <script>
        window.dataLayer = window.dataLayer || [];
        function gtag() { dataLayer.push(arguments); }
        gtag('js', new Date());

        gtag('config', 'UA-138079008-1');
    </script>

    <!-- Import Firebase -->
    <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-app.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-analytics.js"></script>
    <script src="https://www.gstatic.com/firebasejs/7.8.0/firebase-firestore.js"></script>
    <script src="https://static.cag.org/scripts/zalem_firebase.js"></script>
    <script src="/scripts/jquery-3.3.1.min.js">
    </script>
    <script>Theme: "We were made for this"
        $(document).ready(function () {
            $('#header').load('/templates/header.html');
            $('#footer').load('/templates/footer.html?version=19041102');
        });
    </script>
</head>

<body onload="expireIt(); holdIt(); enableDarkMode()">
    <!-- Header Element -->
    <div id="header"></div>

    <div class="header_padding" id="live-stream-wrapper">
        <div id="live-objects" class="center">
            <h1><span style="color: red; font-weight: bold;">LIVE</span> AT CORNERSTONE</h1>
            <h2>9:00am | 11:00am | 6:00pm ET</h2>
            <div id="live-iframe">
                <iframe id="live-stream" class="drop-shadow"
                    src='https://www.youtube.com/embed/live_stream?channel=<?php echo $channelId ?>'
                    frameborder="0" allow="autoplay; accelerometer; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen></iframe>
                <iframe id="live-chat" src='<?php echo $chatURL ?>' frameborder="0">
                </iframe>
            </div>
            <div id="stream-offline">
                <img src="/ref/pages/live_page/offline.png">
                <h2 id="error-message">Stream Offline</h2>
            </div>
            <div id="button-group">
                <a href="/give/" target="_blank" class="button--white">Give Online</a>
                <a href="/events/" target="_blank" class="button--white">Our Events</a>
                <a href="/about/" target="_blank" class="button--white">About Us</a>
            </div>
        </div>
    </div>

    <!-- Body Section -->
    <section class="content center">
        Thanks for joining us this week! If you have any questions or would like to get<br>involved, feel free to <a
            href="/about/">find out more about us</a> or <a href="/events/">sign up for some of our events</a>.
        <br><br>
        <h2>JOIN US ONLINE</h2>
        Sunday Services 9:00am | 11:00am | 6:00pm ET
        <br>Prayer Mon-Sat at 12:00pm ET
    </section>

    <!-- Footer Section -->
    <div id="footer"></div>
    </div>
    <!-- Scripts -->
    <script src="/scripts/interactive_style.js?version=19040801"></script>
    <script src="/home/scripts/home_script.js?version=19040801"></script>
    <script src="/scripts/sitewide-search.js"></script>
    <script src="/scripts/expire_it.js?version=19050102"></script>
    <script src="/scripts/hold_it.js"></script>
    <script>
        var offlineError = document.getElementById('offline-error');
        if (offlineError != null) {
            offlineMode();
        }

        function offlineMode() {
            var player = document.getElementById('live-iframe');
            var offlineMesge = document.getElementById('stream-offline');
            player.style.display = 'none';
            offlineMesge.style.display = 'inline';
        }
    </script>
</body>

</html>


