// script.js

// Function to get query parameters from the URL
function getQueryParam(param) {
    let params = new URLSearchParams(window.location.search);
    return params.get(param);
}

// On the video page, load the correct video
document.addEventListener("DOMContentLoaded", function() {
    // Only run this code if we're on the video.html page
    if (window.location.pathname.includes('video.html')) {
        let videoParam = getQueryParam('video');

        // Map the video parameter to a YouTube embed URL or any other video link
        let videoUrls = {
            video1: "https://tankie.tube/videos/embed/234b185f-c8cb-40f3-a48e-9072b53bad9f",
            video2: "https://www.youtube.com/embed/9bZkp7q19f0",
            video3: "https://www.youtube.com/embed/3JZ_D3ELwOQ",
            video4: "https://www.youtube.com/embed/LjhWHffIx5E"
        };

        // If the videoParam exists and has a corresponding URL, load it
        if (videoUrls[videoParam]) {
            document.getElementById('video-iframe').src = videoUrls[videoParam];
        } else {
            // If the videoParam doesn't exist, load a default video or show an error
            document.getElementById('video-iframe').src = "https://www.youtube.com/embed/invalid";
        }
    }
});
