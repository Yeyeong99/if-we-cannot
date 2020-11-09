
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

function changeStarPosition() {
    const stars = document.querySelectorAll("i");
    for (i=0; i<=stars.length; i++) {
        stars[i].classList.toggle("change-position");
    };
};
createStars();

window.addEventListener("click", changeStarPosition);