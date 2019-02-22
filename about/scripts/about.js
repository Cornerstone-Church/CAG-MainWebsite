
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

var buttonOne = document.getElementById('section1');
var buttonTwo = document.getElementById('section2');
var buttonThree = document.getElementById('section3');

function showSection(elementIndex) {
    switch (elementIndex) {
        case 0:
            hideAllElements();
            displayElement(elementOne);
            buttonSelect(buttonOne);
            break;
        case 1:
            hideAllElements();
            displayElement(elementTwo);
            buttonSelect(buttonTwo);
            break;
        case 2:
            hideAllElements();
            displayElement(elementThree)
            buttonSelect(buttonThree);
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

function buttonSelect(element) {
    // Remove the selected class from all buttons
    buttonOne.classList.remove('selected');
    buttonTwo.classList.remove('selected');
    buttonThree.classList.remove('selected');

    // Add it to the clicked button
    element.classList.add('selected');
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