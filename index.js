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
    clickBtn.classList.add("hide");
    for (i=0;i<=array.length;i++) {
        array[i].classList.add("show");
    }
    clickBtn.classList.remove("click");
});

function changeTitle () {
    const windowWidth = window.innerWidth,
    title = document.querySelectorAll(".title"),
    footer = document.querySelector("footer");
    if (windowWidth < 800) {
        for(i=0; i<=title.length; i++) {
            title[i].innerText = "우리가 빛의 속도로\n갈 수 없다면";
            footer.innerText = "ⓒ 김초엽 |\n우리가 빛의 속도로\n 갈 수 없다면";
        }
    } else {
        for(i=0; i<=title.length; i++) {
            title[i].innerText = "우리가 빛의 속도로 갈 수 없다면";
            footer.innerText = "ⓒ 김초엽 | 우리가 빛의 속도로 갈 수 없다면"
        }
    }
};

window.addEventListener("resize", changeTitle);