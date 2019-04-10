// Imports from HTML doc
const wednesdayDate = document.querySelector("#wednesday-menu-date");
const wednesdayMenu = document.querySelector("#wednesday-menu");
const saturdayDate = document.querySelector("#saturday-menu-date");
const saturdayMenu = document.querySelector("#saturday-menu");

var firestore = firebase.firestore();

// Reference where the data is stored in the database
const wednesdayDocRef = firestore.doc("cafe-menu/wednesday");
const saturdayDocRef = firestore.doc("cafe-menu/saturday");

getRealtimeUpdate();

function getRealtimeUpdate() {
    wednesdayDocRef.onSnapshot(function (doc) {
        const fetchedData = doc.data();
        wednesdayDate.innerHTML = fetchedData.date;
        wednesdayMenu.innerHTML = fetchedData.menu;
    });

    saturdayDocRef.onSnapshot(function (doc) {
        const fetchedData = doc.data();
        saturdayDate.innerHTML = fetchedData.date;
        saturdayMenu.innerHTML = fetchedData.menu;
    });
}