let replay = document.getElementById('replay');
let replayIcon = document.getElementById('icon');


let tl = new TimelineMax({
    // paused: true,
    onUpdate: updateSlider
});

let tl2 = new TimelineMax({
    // paused: true,
    onUpdate: updateSlider
});

let tl3 = new TimelineMax({
    // paused: true
});

let animation_ease = Linear.easeNone;



let oculos = [".mustache1 .oculos", ".mustache2 .oculos", ".mustache3 .oculos", ".mustache4 .oculos", ".mustache5 .oculos", ".mustache6 .oculos"];
let bigodes = [".mustache1 .bigode", ".mustache2 .bigode", ".mustache3 .bigode", ".mustache4 .bigode", ".mustache5 .bigode", ".mustache6 .bigode"];
let slider = document.getElementById('slider');
let sliderOculos = document.getElementById('sliderOculos');


let chapeu = document.querySelector('.chapeu');



tl.timeScale(1.5);
tl2.timeScale(1.5);

tl3.set(chapeu, { visibility: "visible" } ).fromTo(chapeu, 1, { fill:"#FFF3D3", stroke:"#1E1817" }, { fill:"#1E1817", stroke:"none" }, "-=0.2");


for (let i = 0, n = oculos.length; i < n; i++) {
    tl2.set(oculos[i], { x: 100, visibility: "visible" }, "-=0.1")
    .to(oculos[i], 1, { x: 0, opacity: 1})
    .fromTo(oculos[i], 1, { fill: "#FFF3D3", stroke: "#1E1817"}, {fill: "#1E1817", stroke: "none" }, "-=0.1")
    .to(oculos[i], 0.5, { x: -100, opacity: 0, delay: 0.5});
}


for (let i = 0, n = bigodes.length; i < n; i++) {
    tl.set(bigodes[i], { x: -100, visibility: "visible" }, "-=0.1")
    .to(bigodes[i], 1, { x: 0, opacity: 1 })
    .fromTo(bigodes[i], 1, { fill: "#FFF3D3", stroke: "#1E1817"}, { fill: "#1E1817", stroke: "none" }, "-=0.1")
    .to(bigodes[i], 0.5, { x: 100, opacity: 0, delay: 0.5});
}


// Controllers



function updateSlider() {

}



replay.addEventListener('click', function() {

    TweenLite.to(replayIcon, 0.4, { rotation: "+=360", transformOrigin: "50% 50%" });

    tl.restart();
    tl2.restart();
    tl3.restart();
});
