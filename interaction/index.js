
function createStars() {
    const scene = document.querySelector(".scene");
    for (i=0; i<=500; i++) {
        const star = document.createElement("i");
        let size = Math.random() *2;
        let x = Math.floor(Math.random()*window.innerWidth);
        let y = Math.floor(Math.random()*window.innerHeight);
        star.className="star"
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px'; 
        
        scene.appendChild(star);
    }
};

function changeStarWidth() {
    const stars = document.querySelectorAll("i");
    for (i=0; i<stars.length; i++) {
        if (i%3 === 0) {
            let x = Math.floor(Math.random()*100);
            stars[i].style.width = x + 'px';
            stars[i].style.transitionProperty = "width";
            stars[i].style.transformOrigin = "top left"
            stars[i].style.transitionDuration ="0.5s";
            stars[i].style.transform = "rotate(-120deg) translate(50px)";
        };
        }
    
};
function defaultWidth() {
    const stars = document.querySelectorAll("i");
    for (i=0; i<stars.length; i++) {
        stars[i].style.transitionProperty = "width";
        stars[i].style.transitionDuration ="1s";
        stars[i].style.width=1+"px";
    };
}
;
createStars();
window.addEventListener("click", defaultWidth);
const stars = document.querySelectorAll("i");
for (i=0; i<stars.length; i++) {
    stars[i].addEventListener("mouseover", changeStarWidth);
};

// window.addEventListener("click",defaultWidth);/
