const author = document.querySelector(".author");
const moon = document.querySelector("div.moon");

const cloud = document.querySelector(".cloud"),
cloudOver = document.querySelector(".cloud-over"),
titleContainer = document.querySelector(".title-container"),
lineContainer = document.querySelector(".line-container"),
clickBtn = document.querySelector(".click");

const array = [moon,cloud,cloudOver,titleContainer,lineContainer]

moon.addEventListener("click", function() {
    author.classList.toggle("author");
    author.classList.toggle("show");

});

window.addEventListener("click", function(){
    for (i=0;i<=array.length;i++) {
        array[i].classList.add("show")
    }
});