const earth = document.querySelector(".earth"),
 earthContainer = document.querySelector(".earth-container"),
 author = document.querySelector(".author-container"),
 scene = document.querySelector(".scene"),
 authorBtn = document.querySelector(".author-btn");
 
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

earth.addEventListener("mouseover", function() {
    earth.style.transform = "scale(1.2)";
    author.style.bottom = "17%";
    const buttons = document.querySelectorAll("button");
    for (i=0; i<buttons.length; i++) {
        buttons[i].classList.remove("hide");
    };
});

earth.addEventListener("mouseleave", function() {
    author.style.bottom = "";
    earth.style.transform="";
});

authorBtn.addEventListener("click", function() {
    author.classList.toggle("show");
});