var layer1 = document.getElementById("layer1");
var layer2 = document.getElementById("layer2");
var layer3 = document.getElementById("layer3");
var layer4 = document.getElementById("layer4");

var sections = document.getElementsByClassName("section");

var navAboutButton = document.getElementById("about-button");
var navResumeButton = document.getElementById("resume-button");
var navWorkButton = document.getElementById("work-button");
var navContactButton = document.getElementById("contact-button");

var translateZAmount = [0.3, 0.2, 0.1, 0.0, -1, -2, -3];
var blurAmount = [3, 2, 1, 0.0, 1, 2, 3];
var brightnessAmount = [1.3, 1.2, 1.1, 1.0, 0.9, 0.8, 0.7];
var opacityAmount = [0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0];

var transformIndex = 3;

windowScroll();

window.onscroll = event => windowScroll();

function tick() {
    for (var i = 0; i < sections.length; i++) {
        var sectionBox = sections[i].getBoundingClientRect();
        var sectionPosition = sectionBox.top + (sectionBox.height / 2.0) - (window.innerHeight / 2.0);
        sections[i].style.transform = "perspective(10rem) rotateX(" + (sectionPosition / window.innerHeight) * 1 + "deg)";
    }
}
setInterval(tick, 100);

function windowScroll() {
    layer1.style.transform = "perspective(1rem) translateZ(" + translateZAmount[transformIndex] + "rem)";
    layer1.style.filter = "blur(" + blurAmount[transformIndex] + "rem) brightness(" + brightnessAmount[transformIndex] + ") opacity(" + opacityAmount[transformIndex] + ")";
    layer2.style.transform = "perspective(1rem) translateZ(" + translateZAmount[transformIndex + 1] + "rem)";
    layer2.style.filter = "blur(" + blurAmount[transformIndex + 1] + "rem) brightness(" + brightnessAmount[transformIndex + 1] + ") opacity(" + opacityAmount[transformIndex + 1] + ")";
    layer3.style.transform = "perspective(1rem) translateZ(" + translateZAmount[transformIndex + 2] + "rem)";
    layer3.style.filter = "blur(" + blurAmount[transformIndex + 2] + "rem) brightness(" + brightnessAmount[transformIndex + 2] + ") opacity(" + opacityAmount[transformIndex + 2] + ")";
    layer4.style.transform = "perspective(1rem) translateZ(" + translateZAmount[transformIndex + 3] + "rem)";
    layer4.style.filter = "blur(" + blurAmount[transformIndex + 3] + "rem) brightness(" + brightnessAmount[transformIndex + 3] + ") opacity(" + opacityAmount[transformIndex + 3] + ")";
    switch (transformIndex) {
        case 3:
            layer1.style.transition = "transform 500ms, filter 500ms";
            layer2.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer3.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer4.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer1.style.translate = "0px " + window.scrollY * -1.0 + "px";
            layer2.style.translate = "0px 0px";
            layer3.style.translate = "0px 0px";
            layer4.style.translate = "0px 0px";
            break;
        case 2:
            layer1.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer2.style.transition = "transform 500ms, filter 500ms";
            layer3.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer4.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer1.style.translate = "0px 0px";
            layer2.style.translate = "0px " + window.scrollY * -1.0 + "px";
            layer3.style.translate = "0px 0px";
            layer4.style.translate = "0px 0px";
            break;
        case 1:
            layer1.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer2.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer3.style.transition = "transform 500ms, filter 500ms";
            layer4.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer1.style.translate = "0px 0px";
            layer2.style.translate = "0px 0px";
            layer3.style.translate = "0px " + window.scrollY * -1.0 + "px";
            layer4.style.translate = "0px 0px";
            break;
        case 0:
            layer1.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer2.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer3.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer4.style.transition = "transform 500ms, filter 500ms";
            layer1.style.translate = "0px 0px";
            layer2.style.translate = "0px 0px";
            layer3.style.translate = "0px 0px";
            layer4.style.translate = "0px " + window.scrollY * -1.0 + "px";
            break;
    }
}

navAboutButton.onclick = event => {
    transformIndex = 3;
    windowScroll();
    window.scrollTo({
        top: 0
    });
}

navResumeButton.onclick = event => {
    transformIndex = 2;
    windowScroll();
    window.scrollTo({
        top: 0
    });
}

navWorkButton.onclick = event => {
    transformIndex = 1;
    windowScroll();
    window.scrollTo({
        top: 0
    });
}

navContactButton.onclick = event => {
    transformIndex = 0;
    windowScroll();
    window.scrollTo({
        top: 0
    });
}
