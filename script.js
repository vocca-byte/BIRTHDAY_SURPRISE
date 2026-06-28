function nextScene(current,next){
    document
    .getElementById(`scene${current}`)
    .classList.remove("active");

    document
    .getElementById(`scene${next}`)
    .classList.add("active");

    window.scrollTo({
        top:0,
        behavior:"smooth"
    });
}

function turnOnLights(){

    document.body.classList.add("lights-on");

    startHearts();

    nextScene(4,5);

}

function playMusic(){

    document
    .getElementById("birthdayMusic")
    .play();

    nextScene(5,6);

}

function startHearts(){

    setInterval(()=>{

        let heart =
        document.createElement("div");

        heart.className="heart";

        heart.innerHTML="❤️";

        heart.style.left =
        Math.random()*100+"vw";

        heart.style.fontSize =
        (20+Math.random()*30)+"px";

        heart.style.animationDuration =
        (4+Math.random()*3)+"s";

        document
        .getElementById("hearts-container")
        .appendChild(heart);

        setTimeout(()=>{
            heart.remove();
        },7000);

    },300);

}

function flyBalloons(){

    const container =
    document.getElementById(
        "balloonContainer"
    );

    const colors = [
        "red",
        "blue",
        "yellow",
        "pink",
        "white"
    ];

    for(let i = 0; i < 60; i++){

        const balloon =
        document.createElement("div");

        balloon.classList.add(
            "balloon"
        );

        balloon.classList.add(
            colors[
                Math.floor(
                    Math.random() *
                    colors.length
                )
            ]
        );

        balloon.style.left =
        Math.random()*100 + "vw";

        balloon.style.animationDuration =
        (4 + Math.random()*4) + "s";

        balloon.style.animationDelay =
        (Math.random()*1.5) + "s";

        container.appendChild(
            balloon
        );

        setTimeout(()=>{
            balloon.remove();
        },10000);
    }

    setTimeout(()=>{

        nextScene(6,7);

    },6000);

}

const curtainSound =
new Audio(
"assets/music/curtain.mp3"
);

curtainSound.play();

createGoldParticles();

function showCurtains(){

    nextScene(7,8);

    setTimeout(()=>{

        document
        .getElementById("curtainLeft")
        .classList.add("open-left");

        document
        .getElementById("curtainRight")
        .classList.add("open-right");

    },1000);

    setTimeout(()=>{

        document
        .getElementById("hiddenLetter")
        .style.opacity="1";

        document
        .getElementById("curtainLeft")
        .remove();

        document
        .getElementById("curtainRight")
        .remove();

    },3500);
}

document
.getElementById("scene10")
.addEventListener(
"click",
function(){

    confetti({

        particleCount:250,

        spread:180,

        origin:{
            y:0.6
        }
    });

});