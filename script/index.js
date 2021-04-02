const searchInput = document.getElementById("search-input");
const searchButton = document.getElementById("search-button");
const searchForm = document.getElementById("search-form");

function handleSearchBar() {
  console.log("Entar", searchButton, "Hola");
  if (searchInput.style.display === "none") {
    searchForm.style.border = "1px solid white";
    searchForm.style.marginRight = "0";

    searchButton.style.display = "block";
    searchInput.style.display = "block";
  } else if (searchButton.style.display === "block") {
    searchForm.style.border = "none";
    searchForm.style.marginRight = "-25px";

    searchButton.style.display = "none";
    searchInput.style.display = "none";
  }
}
