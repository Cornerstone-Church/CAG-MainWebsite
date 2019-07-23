var videos = [document.getElementById('default-video'), document.getElementById('video-1'), document.getElementById('video-2'), document.getElementById('video-3'), document.getElementById('video-4')];
var errorVideo = document.getElementById('video-error')
var thumbs = [document.getElementById('thumb-1'), document.getElementById('thumb-2'), document.getElementById('thumb-3'), document.getElementById('thumb-4'), document.getElementById('thumb-5'), document.getElementById('thumb-6'), document.getElementById('thumb-7'), document.getElementById('thumb-8'), document.getElementById('thumb-9')];
var thumbsBackground = [document.getElementById('thumb-1--background'), document.getElementById('thumb-2--background'), document.getElementById('thumb-3--background'), document.getElementById('thumb-4--background'), document.getElementById('thumb-5--background'), document.getElementById('thumb-6--background'), document.getElementById('thumb-7--background'), document.getElementById('thumb-8--background'), document.getElementById('thumb-9--background')];

function pageLoad() {
    videos[0].style.display = 'inline';
}

function thumbSelector(index) {
    // Remove all borders on selected elements
    thumbs.forEach(function(item) {
        item.classList.remove('selected');
    });

    // Add border on indexed item
    thumbs[index - 1].classList.add('selected');

    // Remove all videos
    videos.forEach(function(item) {
        item.style.display = 'none';
    })

    // Select Video
    try {
        videos[index].style.display = 'inline';
    } catch (error) {
        errorVideo.style.display = 'inline';
    }
}