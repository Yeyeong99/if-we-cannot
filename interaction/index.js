const earth = document.querySelector(".earth"),
 earthContainer = document.querySelector(".earth-container"),
 author = document.querySelector(".author-container"),
 scene = document.querySelector(".scene"),
 authorBtn = document.querySelector(".author-btn"),
 emotionBtn = document.querySelector(".emotion-btn"),
 symbioBtn = document.querySelector(".symbiosis-btn"),
 lostBtn = document.querySelector(".lost-btn"),
 heroBtn = document.querySelector(".hero-btn"),
 hero = document.querySelector(".hero"),
 emotion = document.querySelector(".emotion"),
 lost = document.querySelector(".lost"),
 symbio = document.querySelector(".symbiosis");

//star animation
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

function shiningStars() { //css width 없애기 - 그냥 반짝 거리게 - mobile에서
    const stars = document.querySelectorAll("i");
    for (i=0; i<stars.length; i++) {
        let random = Math.floor(Math.random()*100)
        if (i%random === 0) {
            let duration = Math.random() * 2;
            stars[i].classList.toggle("change-location");
            stars[i].style.animationDuration = duration +'s'; 
        };
        
    };
};

function shootingStars() {
    const stars = document.querySelectorAll("i");
    for (i=0; i<stars.length; i++) {
        let random = Math.floor(Math.random()*100)
        if (i%random === 0) {
            let duration = Math.random() * 3;
            // stars[i].style.width = Math.random()*200 + "px";
            stars[i].classList.toggle("change-location");
            stars[i].style.animationDuration = duration +'s'; 
        };
    };
};

createStars();
window.addEventListener("click", shootingStars);
window.addEventListener("resize", function (){
    document.removeChild("i");
    createStars}
    );


//earth animation
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
    const buttons = document.querySelectorAll("button");
    for (i=0; i<buttons.length; i++) {
        buttons[i].classList.add("hide");
    }; 
});

authorBtn.addEventListener("click", function() {
    author.classList.toggle("show");
});

heroBtn.addEventListener("click",function() {
    hero.classList.toggle("hide");
    emotion.classList.add("hide");
    symbio.classList.add("hide");
    lost.classList.add("hide");

});

emotionBtn.addEventListener("click", function() {
    emotion.classList.toggle("hide");
    hero.classList.add("hide");
    symbio.classList.add("hide");
    lost.classList.add("hide");

});

lostBtn.addEventListener("click", function() {
    lost.classList.toggle("hide");
    hero.classList.add("hide");
    symbio.classList.add("hide");
    emotion.classList.add("hide");

});

symbioBtn.addEventListener("click", function() {
    symbio.classList.toggle("hide");
    hero.classList.add("hide");
    emotion.classList.add("hide");
    lost.classList.add("hide");

});
