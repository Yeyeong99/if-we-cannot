const author = document.querySelector(".author");
const moon = document.querySelector("div.moon");

moon.addEventListener("click", function() {
    author.classList.toggle("author");
    author.classList.toggle("show");

});
