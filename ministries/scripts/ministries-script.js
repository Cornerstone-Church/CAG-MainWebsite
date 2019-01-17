// Container imports
var containerElements = [document.getElementById('be-ministered--bigButton'), document.getElementById('find-fellowship--bigButton'), document.getElementById('find-freedom--bigButton'), document.getElementById('serve--bigButton'), document.getElementById('education--bigButton')];

// Title and Content elements
var titleElements = [document.getElementById('be-ministered--title'), document.getElementById('find-fellowship--title'), document.getElementById('find-freedom--title'), document.getElementById('serve--title'), document.getElementById('education--title')];
var contentElements = [document.getElementById('be-ministered--content'), document.getElementById('find-fellowship--content'), document.getElementById('find-freedom--content'), document.getElementById('serve--content'), document.getElementById('education--content')];

var isOpen = false;


function sectionExpand(index) {

    if (!isOpen) {
        switch (index) {
            case 0:
                closeAll();
                openElement(0);
                break;
            case 1:
                closeAll();
                openElement(1);
                break;
            case 2:
                closeAll();
                openElement(2);
                break;
            case 3:
                closeAll();
                openElement(3);
                break;
            case 4:
                closeAll();
                openElement(4);
                break;
            default:
                closeAll();
                break;
        }
        isOpen = true;
    } else {
        closeAll();
        isOpen = false;
    }
}

function openElement(index) {
    // Set up delays
    titleElements[index].style.transitionDelay = '0s';
    contentElements[index].style.transitionDelay = '.5s';

    // Open and fade up
    containerElements[index].style.height = 'var(--expanded-button--height)';
    titleElements[index].style.opacity = '0';
    contentElements[index].style.opacity = '1';
    // Isn't working right??
    // containerElements[index].scrollIntoView({
    //     behavior: 'smooth'
    // });
}

function closeAll() {
    for (i = 0; i < titleElements.length; i++) {
        // Set up the transition delays
        titleElements[i].style.transitionDelay = '.5s';
        contentElements[i].style.transitionDelay = '0s';

        // Fade up elements
        titleElements[i].style.opacity = '1';
        contentElements[i].style.opacity = '0';
        containerElements[i].style.height = 'var(--default-button--height)';
    }
}