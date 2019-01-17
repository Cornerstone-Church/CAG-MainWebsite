
/*
    Element index to show/
    0 = What We Believe
    1 = Meet Our Staff
    2 = Partner Churches
*/
function showSection(elementIndex) {
    var elementOne = document.getElementById("element1");
    var elementTwo = document.getElementById("element2");
    var elementThree = document.getElementById("element3");
    var elementDefault = document.getElementById("defaultElement");
    var aboutSection = document.getElementById("about-sections");

    var selectorOne = document.getElementById("selector1");
    var selectorTwo = document.getElementById("selector2");
    var selectorThree = document.getElementById("selector3");
    
    if (elementIndex == 1) {
        // Display the second element
        elementOne.style.display = "none";
        elementTwo.style.display = "inline";
        elementThree.style.display = "none";
        elementDefault.style.display = "none";

        // Show the selector
        selectorOne.style.color = "var(--theme-primary-color)";
        selectorTwo.style.color = "var(--theme-activation-color)";
        selectorThree.style.color = "var(--theme-primary-color)";
    } else if (elementIndex == 2) {
        // Display the third Element
        elementOne.style.display = "none";
        elementTwo.style.display = "none";
        elementThree.style.display = "inline";
        elementDefault.style.display = "none";

        // Show the selector
        selectorOne.style.color = "var(--theme-primary-color)";
        selectorTwo.style.color = "var(--theme-primary-color)";
        selectorThree.style.color = "var(--theme-activation-color)";
    } else {
        // Display the first element
        elementOne.style.display = "inline";
        elementTwo.style.display = "none";
        elementThree.style.display = "none";
        elementDefault.style.display = "none";

        // Show the selector
        selectorOne.style.color = "var(--theme-activation-color)";
        selectorTwo.style.color = "var(--theme-primary-color)";
        selectorThree.style.color = "var(--theme-primary-color)";
    }
}