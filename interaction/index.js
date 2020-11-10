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

createStars();

function shootingStars() {
    const stars = document.querySelectorAll("i");
    for (i=0; i<stars.length; i++) {
        if (i%19 === 0) {
            let duration = Math.random() * 2;
            stars[i].classList.toggle("change-location");
            stars[i].style.animationDuration = duration +'s'; 
        };
        
    };
};


window.addEventListener("click", shootingStars);

const earth = document.querySelector(".earth");

earth.addEventListener("mouseover", function() {
    earth.classList.remove("rotation");
});

earth.addEventListener("mouseleave", function() {
    earth.classList.add("rotation");
});