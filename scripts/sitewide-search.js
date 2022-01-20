var initialDownload = false;

function openSearchBar() {
    var searchBar = document.getElementById('globalSearchBar');

    searchBar.classList.add('open');

    if (!initialDownload) {
        var db = firebase.firestore();

        db.collection('website-search').get().then((querySnapshot) => {
            querySnapshot.forEach((doc) => {
                createSearchItem(doc.data().action, doc.data().title, doc.data().keywords, doc.data().description);
            });
            initialDownload = true;
        })
    } else {
        if (searchBar.value != "") {
            showSearchResults();
        }
    }
}

function closeSearchBar() {
    var searchBar = document.getElementById('globalSearchBar');

    if (searchBar.value == "") {
        searchBar.classList.remove('open');

        hideSearchResults();
    }
}

function searchBarKeyDetect(e) {
    switch (e.key) {
        case 'Enter':
            e.preventDefault();

            var items = document.querySelectorAll('#siteSearchResult li');

            for (var i = 0; i < items.length; i++) {
                if (items[i].style.display != "none") {
                    items[i].querySelector('a').click();
                    break;
                }
            }
            break;
        case 'Escape':
            e.preventDefault();

            e.target.value = "";
            closeSearchBar();
            break;
        default:
            break;
    }
}

function querySearchResults() {
    var items = document.querySelectorAll('#siteSearchResult li');
    var searchBar = document.getElementById('globalSearchBar');
    var searchBarResults = searchBar.value.toUpperCase();
    var results = document.querySelector('#siteSearchResult');
    var noResultError = document.getElementById('no-results--error');

    var hiddenItems = 0;

    if (searchBarResults != "") {
        showSearchResults();
        for (var i = 0; i < items.length; i++) {
            var title = items[i].querySelector('.item-title').innerHTML;
            var keywords = items[i].querySelector('.item-keywords').innerHTML;

            if ((keywords.toUpperCase().indexOf(searchBarResults) > -1) || (title.toUpperCase().indexOf(searchBarResults) > -1)) {
                items[i].style.display = "";
            } else {
                items[i].style.display = "none";
                hiddenItems++;
            }
        }

        // Shows no results message
        if (hiddenItems >= items.length) {
            noResultError.style.display = 'inline';
        } else {
            noResultError.style.display = 'none';
        }
    } else {
        hideSearchResults();
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

function hideSearchResults() {
    var results = document.querySelector('#siteSearchResult');

    results.style.display = "none";
}

function showSearchResults() {
    var results = document.querySelector('#siteSearchResult');
    results.style.display = "inline";
}