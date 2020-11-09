
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
        let x = Math.floor(Math.random()*100);
        stars[i].style.width = x + 'px';
        stars[i].style.transitionProperty = "width";
        stars[i].style.transformOrigin = "top left"
        stars[i].style.transitionDuration ="3s";
        stars[i].style.transform = "rotate(60deg)";
        // stars[i].style.transition = "4s";
    };
    
};
function defaultWidth() {
    const stars = document.querySelectorAll("i");
    for (i=0; i<stars.length; i++) {
        stars[i].style.transitionProperty = "width";
        stars[i].style.transitionDuration ="10s";
        let starNum = stars[i].style.width.replace(/[^0-9]/g,'');
        starNum -=(starNum-1);
        stars[i].style.width = starNum +"px";
        console.log(stars[i].style.width)
    };
}
createStars();
window.addEventListener("click",changeStarWidth);


// window.addEventListener("click",defaultWidth);/
