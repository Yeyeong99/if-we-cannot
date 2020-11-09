
function createStars() {
    const scene = document.querySelector(".scene");
    for (i=0; i<=500; i++) {
        const star = document.createElement("i");
        let size = Math.random() *2;
        let x = Math.floor(Math.random()*window.innerWidth);
        let y = Math.floor(Math.random()*window.innerHeight);
        
        star.style.left = x + 'px';
        star.style.top = y + 'px';
        star.style.width = 1 + size + 'px';
        star.style.height = 1 + size + 'px'; 
        
        scene.appendChild(star);
    }
};

function defultWidth() {
    const stars = document.querySelectorAll("i");
    for (i=0; i<=stars.length; i++) {
        stars[i].style.width = 0 + 'px';
    };
};

function changeStarWidth() {
    const stars = document.querySelectorAll("i");
    for (i=0; i<=stars.length; i++) {
        if (i%2 === 0) {
            let x = Math.floor(Math.random()*100);
            stars[i].style.width = x + 'px';
            stars[i].classList.toggle("change-angle");
            stars[i].classList.toggle("change-width");
        };
    };
};


createStars();
window.addEventListener("click", changeStarWidth);