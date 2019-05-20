var videoThumbs = document.querySelectorAll('#recent-selector li');
var popup = document.getElementById('recent-videos--popup');
var popupIframe = document.querySelector('#recent-videos--popup iframe');

function openRecentVideo(index, url) {
    popup.style.animationName = 'popupEnter';
    popupIframe.src = url;
    videoThumbs[index].style.opacity = '0.2';
}

function closeAll() {
    popup.style.animationName = 'popupOut';
    videoThumbs.forEach((item) => {
        item.style.opacity = '1';
    });
}