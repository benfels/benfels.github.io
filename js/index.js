var layer1 = document.getElementById("layer1");
var layer2 = document.getElementById("layer2");
var layer3 = document.getElementById("layer3");
var layer4 = document.getElementById("layer4");
var layer5 = document.getElementById("layer5");

var body = document.getElementById("body");
var sections = document.getElementsByClassName("section");

var navPanel = document.getElementById("nav-section");
var navAboutButton = document.getElementById("about-button");
var navResumeButton = document.getElementById("resume-button");
var navWorkButton = document.getElementById("work-button");
var navSXSEWrappedButton = document.getElementById("sxse-wrapped-button");
var navContactButton = document.getElementById("contact-button");

var translateZAmount = [0.4, 0.3, 0.2, 0.1, 0.0, -1, -2, -3, -4];
var blurAmount = [4, 3, 2, 1, 0.0, 1, 2, 3, 4];
var brightnessAmount = [1.4, 1.3, 1.2, 1.1, 1.0, 0.9, 0.8, 0.7, 0.6];
var opacityAmount = [0.0, 0.0, 0.0, 0.0, 1.0, 1.0, 1.0, 1.0, 1.0];

var transformIndex = 4;

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
    layer5.style.transform = "perspective(1rem) translateZ(" + translateZAmount[transformIndex + 4] + "rem)";
    layer5.style.filter = "blur(" + blurAmount[transformIndex + 4] + "rem) brightness(" + brightnessAmount[transformIndex + 4] + ") opacity(" + opacityAmount[transformIndex + 4] + ")";
    switch (transformIndex) {
        case 4:
            layer1.style.transition = "transform 500ms, filter 500ms";
            layer2.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer3.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer4.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer5.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer1.style.translate = "0px " + window.scrollY * -1.0 + "px";
            layer2.style.translate = "0px 0px";
            layer3.style.translate = "0px 0px";
            layer4.style.translate = "0px 0px";
            layer5.style.translate = "0px 0px";
            break;
        case 3:
            layer1.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer2.style.transition = "transform 500ms, filter 500ms";
            layer3.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer4.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer5.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer1.style.translate = "0px 0px";
            layer2.style.translate = "0px " + window.scrollY * -1.0 + "px";
            layer3.style.translate = "0px 0px";
            layer4.style.translate = "0px 0px";
            layer5.style.translate = "0px 0px";
            break;
        case 2:
            layer1.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer2.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer3.style.transition = "transform 500ms, filter 500ms";
            layer4.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer5.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer1.style.translate = "0px 0px";
            layer2.style.translate = "0px 0px";
            layer3.style.translate = "0px " + window.scrollY * -1.0 + "px";
            layer4.style.translate = "0px 0px";
            layer5.style.translate = "0px 0px";
            break;
        case 1:
            layer1.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer2.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer3.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer4.style.transition = "transform 500ms, filter 500ms";
            layer5.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer1.style.translate = "0px 0px";
            layer2.style.translate = "0px 0px";
            layer3.style.translate = "0px 0px";
            layer4.style.translate = "0px " + window.scrollY * -1.0 + "px";
            layer5.style.translate = "0px 0px";
            break;
        case 0:
            layer1.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer2.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer3.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer4.style.transition = "translate 500ms, transform 500ms, filter 500ms";
            layer5.style.transition = "transform 500ms, filter 500ms";
            layer1.style.translate = "0px 0px";
            layer2.style.translate = "0px 0px";
            layer3.style.translate = "0px 0px";
            layer4.style.translate = "0px 0px";
            layer5.style.translate = "0px " + window.scrollY * -1.0 + "px";
            break;
    }
}

navAboutButton.onclick = event => {
    if (transformIndex != 4) {
        transformIndex = 4;
        windowScroll();
        window.scrollTo({
            top: 0
        });
        layer1.style.zIndex = 0;
        layer2.style.zIndex = -10;
        layer3.style.zIndex = -20;
        layer4.style.zIndex = -30;
        layer5.style.zIndex = -40;
        navPanel.style.display = "none";
        setTimeout(() => {
            layer1.style.zIndex = 0;
            layer2.style.zIndex = -10;
            layer3.style.zIndex = -20;
            layer4.style.zIndex = -30;
            layer5.style.zIndex = -40;
            navPanel.style.display = "grid";
        }, 500);
    }
}

navResumeButton.onclick = event => {
    if (transformIndex != 3) {
        transformIndex = 3;
        windowScroll();
        window.scrollTo({
            top: 0
        });
        layer1.style.zIndex = 0;
        layer2.style.zIndex = -10;
        layer3.style.zIndex = -20;
        layer4.style.zIndex = -30;
        layer5.style.zIndex = -40;
        navPanel.style.display = "none";
        setTimeout(() => {
            layer1.style.zIndex = -10;
            layer2.style.zIndex = 0;
            layer3.style.zIndex = -20;
            layer4.style.zIndex = -30;
            layer5.style.zIndex = -40;
            navPanel.style.display = "grid";
        }, 500);
    }
}

navWorkButton.onclick = event => {
    if (transformIndex != 2) {
        transformIndex = 2;
        windowScroll();
        window.scrollTo({
            top: 0
        });
        layer1.style.zIndex = 0;
        layer2.style.zIndex = -10;
        layer3.style.zIndex = -20;
        layer4.style.zIndex = -30;
        layer5.style.zIndex = -40;
        navPanel.style.display = "none";
        setTimeout(() => {
            layer1.style.zIndex = -10;
            layer2.style.zIndex = -20;
            layer3.style.zIndex = 0;
            layer4.style.zIndex = -30;
            layer5.style.zIndex = -40;
            navPanel.style.display = "grid";
        }, 500);
    }
}

navSXSEWrappedButton.onclick = event => {
    if (transformIndex != 1) {
        transformIndex = 1;
        windowScroll();
        window.scrollTo({
            top: 0
        });
        layer1.style.zIndex = 0;
        layer2.style.zIndex = -10;
        layer3.style.zIndex = -20;
        layer4.style.zIndex = -30;
        layer5.style.zIndex = -40;
        navPanel.style.display = "none";
        setTimeout(() => {
            layer1.style.zIndex = -10;
            layer2.style.zIndex = -20;
            layer3.style.zIndex = -30;
            layer4.style.zIndex = 0;
            layer5.style.zIndex = -40;
            navPanel.style.display = "grid";
        }, 500);
    }
    
}

navContactButton.onclick = event => {
    if (transformIndex != 0) {
        transformIndex = 0;
        windowScroll();
        window.scrollTo({
            top: 0
        });
        layer1.style.zIndex = 0;
        layer2.style.zIndex = -10;
        layer3.style.zIndex = -20;
        layer4.style.zIndex = -30;
        layer5.style.zIndex = -40;
        navPanel.style.display = "none";
        setTimeout(() => {
            layer1.style.zIndex = -10;
            layer2.style.zIndex = -20;
            layer3.style.zIndex = -30;
            layer4.style.zIndex = -40;
            layer5.style.zIndex = 0;
            navPanel.style.display = "grid";
        }, 500);
    }
    
}
