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
            video2: "https://tankie.tube/videos/embed/8ec714bf-eaec-4ff6-93d3-13f495fccfc5",
            video3: "https://tankie.tube/videos/embed/8bd6d7f3-cac4-4554-a306-687f65eedb67",
            video4: "https://tankie.tube/videos/embed/097744e8-e5ec-45c0-8092-4c8e0af3867a",
            video5: "https://tankie.tube/videos/embed/18d7ca10-f19a-48b8-bb47-8ce39b098e0e"
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
