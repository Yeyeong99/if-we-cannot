const author = document.querySelector(".author");
const moon = document.querySelector("div.moon");

moon.addEventListener("click", function() {
    author.classList.toggle("author");
    if(author.classList.contains("show")){
        author.classList.remove("show");
        author.classList.add("out");
    }else if(author.classList.contains("out")){
        author.classList.remove("out");
        author.classList.add("show");
    }
});
