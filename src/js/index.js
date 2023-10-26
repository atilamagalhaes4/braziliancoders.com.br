const search = document.getElementById("botaoSearch");
const formSearch = document.getElementById("formSearch");



formSearch.addEventListener("submit", function (e) {
    e.preventDefault();
    console.log(search.value);

});