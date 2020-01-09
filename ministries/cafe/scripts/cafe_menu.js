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
        // Grab snapshot data
        const fetchedData = doc.data();
        // Fetch Date
        wednesdayDate.innerHTML = fetchedData['date'];

        // List all elements in the items array
        fetchedData['items'].forEach((item) => {
            wednesdayMenu.innerHTML += item + '<br>';
        });
    });


    //// Code not used
    // saturdayDocRef.onSnapshot(function (doc) {
    //     // Grab snapshot data
    //     const fetchedData = doc.data();
    //     // Fetch Date
    //     saturdayDate.innerHTML = fetchedData['date'];

    //     // List all elements in the items array
    //     fetchedData['items'].forEach((item) => {
    //         saturdayMenu.innerHTML += item + '<br>';
    //     });
    // });
}