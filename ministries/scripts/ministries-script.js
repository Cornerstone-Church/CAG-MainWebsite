// Container imports
var containerElements = [document.getElementById('be-ministered--bigButton'), document.getElementById('find-fellowship--bigButton'), document.getElementById('find-freedom--bigButton'), document.getElementById('serve--bigButton')];

// Title and Content elements
var titleElements = [document.getElementById('be-ministered--title'), document.getElementById('find-fellowship--title'), document.getElementById('find-freedom--title'), document.getElementById('serve--title')];
var contentElements = [document.getElementById('be-ministered--content'), document.getElementById('find-fellowship--content'), document.getElementById('find-freedom--content'), document.getElementById('serve--content')];

// A variable to hold if an section is open
var isOpen = false;

/* 
    Function accepts an index for the element to expand. If the 
    section is already open, the next click will close all sections.

    Use this function with onclick on each element.
*/

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
    // Set the title delay to 0s so it fades out instantly
    titleElements[index].style.transitionDelay = '0s';
    // Expand the element
    containerElements[index].style.height = 'var(--expanded-button--height)';
    // Hide title
    titleElements[index].style.opacity = '0';
    // Remove any hideSection classes that could be in the elemnt
    contentElements[index].classList.remove('hideSection');
    // Add the showSection class to move and fade in the element
    contentElements[index].classList.add('showSection');
    
    // TODO: Isn't working right??
    // containerElements[index].scrollIntoView({
    //     behavior: 'smooth'
    // });
}

function closeAll() {
    for (i = 0; i < titleElements.length; i++) {
        // Set the title delay to .5s so it comes in after the inner elements fade away
        titleElements[i].style.transitionDelay = '.5s';
        // Fade in the title
        titleElements[i].style.opacity = '1';
        // Shrink the element
        containerElements[i].style.height = 'var(--default-button--height)';
        // Remove the showSection class
        contentElements[i].classList.remove('showSection');
        // Add the hideSection class to move and hide the element
        contentElements[i].classList.add('hideSection');
    }
}