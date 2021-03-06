TweenMax.from(".logo", 3, {
    delay: .4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".button", 3, {
    delay: .4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});



TweenMax.from(".bottom-text", 3, {
    delay: .7,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".copyright", 3, {
    delay: .9,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.staggerFrom(".media ul li", 2, {
    delay: .7,
    opacity: 0,
    y: 20,
    ease: Power3.easeInOut
}, 0.1);

TweenMax.from(".menu", 3, {
    delay: .8,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".p1", 3, {
    delay: 1,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from(".p2", 3, {
    delay: 1.2,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});

TweenMax.from("#one", 3, {
    delay: 1.4,
    opacity: 0,
    y: 20,
    ease: Expo.easeInOut
});



var t1 = new TimelineMax();

t1.from(".gif", 2, {
    y: "-100%",
    opacity: 0,
    duration: 1
});
var textWrapper = document.querySelector('.ml7 .letters');
textWrapper.innerHTML = textWrapper.textContent.replace(/([^\x00-\x80]|\w)/g, "<span class='letter'>$&</span>");

anime.timeline({ loop: false })
    .add({
        targets: '.ml7 .letter',
        translateY: ["1.1em", 0],
        translateX: ["0.55em", 0],
        translateZ: 0,
        rotateZ: [180, 0],
        duration: 450,
        easing: "easeOutExpo",
        delay: function(el, i) {
            return 4000 + 50 * i;
        }
    });