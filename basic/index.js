const author = document.querySelector(".author");
const moon = document.querySelector("div.moon");

const cloud = document.querySelector(".cloud"),
cloudOver = document.querySelector(".cloud-over"),
titleContainer = document.querySelector(".title-container"),
lineContainer = document.querySelector(".line-container");

const array = [author,moon,cloud,cloudOver,titleContainer,lineContainer,moon]

moon.addEventListener("click", function() {
    author.classList.toggle("author");
    author.classList.toggle("show");

});

window.addEventListener("click", function(){

    cloud.classList.add("show");
    cloudOver.classList.add("show");
    titleContainer.classList.add("show");
    lineContainer.classList.add("show");
});