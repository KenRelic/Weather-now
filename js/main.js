const searchBar = document.getElementById('search-bar');
const searchBtn = document.getElementById('search-icon');

searchBtn.addEventListener('click', showSearchBar);
searchBar.addEventListener('blur', hideSearchBar);

function showSearchBar() {
  if (searchBar.style.width === "" || searchBar.style.width === "0px") {
    searchBar.style = `padding: 0.5em 0.5em 0.5em 1em; 
    border: 1px solid #727272b3; 
    width: 220px;`;
    searchBar.focus();
    searchBtn.removeEventListener('click', showSearchBar);
    return searchBtn.addEventListener('click', searchLocation);
  }
}

function searchLocation() {
  if (searchBar.style.width !== "" && searchBar.style.width !== "0px") {
    if (searchBar.value !== "") {
      //make the API call
      return console.log('...fetching data')
    }
  }
}

function hideSearchBar() {
  if (searchBar.style.width !== "" || searchBar.style.width !== "0px") {
    if (searchBar.value == "") {
      searchBar.style = `padding: 0; 
                        border: none; 
                        width: 0px;`;
      searchBtn.removeEventListener('click', searchLocation);
      return searchBtn.addEventListener('click', showSearchBar);
    }
  }
}


//http://api.openweathermap.org/data/2.5/weather?q=port,fr&appid=c26a58507549b2bd7daaa1223c14fe3c
