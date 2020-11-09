
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


const stars = document.querySelectorAll("i");
for (i=0; i<stars.length; i++) {
    if (i%3 === 0) {
        let x = Math.floor(Math.random()*100);
        stars[i].style.width = x + 'px';
    };
};

createStars();
window.addEventListener("click", function() {
    const stars = document.querySelectorAll("i");
    for (i=0; i<stars.length; i++) {
        if (i%19 === 0) {
            let duration = Math.random() * 7;
            stars[i].classList.toggle("change-location");
            stars[i].style.animationDuration = duration +'s'; 
        };
        
    }
});
