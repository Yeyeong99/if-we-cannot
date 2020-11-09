const author = document.querySelector(".author");
const moon = document.querySelector("div.moon");

const cloud = document.querySelector(".cloud"),
cloudOver = document.querySelector(".cloud-over"),
titleContainer = document.querySelector(".title-container"),
title = document.querySelectorAll(".title"),
lineContainer = document.querySelector(".line-container"),
clickBtn = document.querySelector(".click");

const array = [moon,cloud,cloudOver,titleContainer,lineContainer]

moon.addEventListener("click", function() {
    author.classList.toggle("author");
    author.classList.toggle("show");

});

window.addEventListener("click", function(){
    clickBtn.classList.add("hide");
    for (i=0;i<=array.length;i++) {
        array[i].classList.add("show");
    }
    clickBtn.classList.remove("click");
});

function changeTitle () {
    console.log(title)
    const windowWidth = window.innerWidth;
    if (windowWidth < 800) {
        for(i=0; i<=title.length; i++) {
            title[i].innerText= "우리가 빛의 속도로\n갈 수 없다면";
        }
    } else {
        for(i=0; i<=title.length; i++) {
            title[i].innerText= "우리가 빛의 속도로 갈 수 없다면";
        }
    }
}

window.addEventListener("resize", changeTitle);