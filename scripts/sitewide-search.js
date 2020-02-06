var initalDownload = false;

function downloadSearchResults() {
    if (!initalDownload) {
        var db = firebase.firestore();

        db.collection('website-search').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                createSearchItem(doc.data().action, doc.data().title, doc.data().keywords, doc.data().description);
            });
            initalDownload = true;
        })
    }
}

function querySearchResults() {
    var items = document.querySelectorAll('#siteSearchResult li');
    var searchBar = document.getElementById('globalSearchBar');
    var searchBarResults = searchBar.value.toUpperCase();
    var results = document.querySelector('#siteSearchResult ul');

    for (i = 0; i < items.length; i++) {
        var title = items[i].querySelector('.item-title').innerHTML;
        var keywords = items[i].querySelector('.item-keywords').innerHTML;
        
        if((keywords.toUpperCase().indexOf(searchBarResults) > -1) || (title.toUpperCase().indexOf(searchBarResults) > -1)) {
            items[i].style.display = "";
        } else {
            items[i].style.display = "none";
        }
    }
}

function createSearchItem(link, title, keywords, description) {
    var resultWrapper = document.querySelector('#siteSearchResult ul');

    var listItem = document.createElement('li');

    var actionLink = document.createElement('a');
    actionLink.setAttribute('href', link);

    var titleDiv = document.createElement('div');
    titleDiv.setAttribute('class', 'item-title');
    titleDiv.innerHTML = title;

    var keywordsDiv = document.createElement('div');
    keywordsDiv.setAttribute('class', 'item-keywords');
    keywordsDiv.innerHTML = keywords;

    var descriptionDiv = document.createElement('div');
    descriptionDiv.setAttribute('class', 'item-description');
    descriptionDiv.innerHTML = description;

    actionLink.appendChild(titleDiv);
    actionLink.appendChild(keywordsDiv);
    actionLink.appendChild(descriptionDiv);

    listItem.appendChild(actionLink);

    resultWrapper.appendChild(listItem);
}