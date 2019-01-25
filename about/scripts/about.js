
/*
    Element index to show/
    0 = What We Believe
    1 = Meet Our Staff
    2 = Partner Churches
*/
var defaultElement = document.querySelectorAll('.defaultElement');
var elementOne = document.querySelectorAll('.element1');
var elementTwo = document.querySelectorAll('.element2');
var elementThree = document.querySelectorAll('.element3');

function showSection(elementIndex) {
    switch (elementIndex) {
        case 0:
            hideAllElements();
            displayElement(elementOne);
            break;
        case 1:
            hideAllElements();
            displayElement(elementTwo);
            break;
        case 2:
            hideAllElements();
            displayElement(elementThree)
            break;
    }
}

function displayElement(element) {
    // Create an index variable
    var i;
    for (i = 0; i < defaultElement.length; i++) {
        element[i].style.display = "block";
    }
}

function hideElement(element) {
    // Create an index variable
    var i;
    for (i = 0; i < element.length; i++) {
        element[i].style.display = "none";
    }
}

function hideAllElements() {
    hideElement(defaultElement);
    hideElement(elementOne);
    hideElement(elementTwo);
    hideElement(elementThree);
}