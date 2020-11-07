gsap.registerPlugin(ScrollTrigger);

// ------------------------------- Home -------------------------------

var home_image = document.getElementById("home-image");
gsap.timeline({
    scrollTrigger: {
        trigger: home_image,
    },
    repeatDelay: 1
}).from(home_image, {
    x: -300,
    opacity: 0,
    ease: Linear.easeNone,
    duration: 1.2
});
ScrollTrigger.refresh();



// ------------------------ about-transmission ------------------------

var transmission = document.getElementsByClassName("transmission");
var trans_01 = document.getElementById("tans-01");
var trans_02 = document.getElementById("tans-02");
var trans_03 = document.getElementById("tans-03");

gsap.timeline({
    scrollTrigger: {
        trigger: transmission,
        toggleActions: "play none none none",
    },
    repeatDelay: 1
}).to(trans_01, 2, {
    rotation: 360,
    duration: 2,
}, "-=1").to(trans_02, 2, {
    rotation: 360,
    duration: 2,
}, "-=1").to(trans_03, 2, {
    rotation: 360,
    duration: 2,
}, "-=1");
ScrollTrigger.refresh();


// ---------------------------- symptoms ----------------------------

var symptoms_image = document.getElementById("symptoms-image");

gsap.timeline({
    scrollTrigger: {
        trigger: symptoms_image,
        toggleActions: "restart pause none reset",
    },
    repeatDelay: 1
}).from(symptoms_image, {
    x: -300,
    opacity: 0,
    ease: Linear.easeNone,
    duration: 1.2
});
ScrollTrigger.refresh();


// ----------------------- Prevention & Advice -----------------------

var symptoms_trans = document.getElementById("symptoms-trans");

var advice_text_01 = document.getElementById("advice-text-01");
var advice_text_02 = document.getElementById("advice-text-02");
var advice_text_03 = document.getElementById("advice-text-03");

var advice_img_01 = document.getElementById("advice-img-01");
var advice_img_02 = document.getElementById("advice-img-02");
var advice_img_03 = document.getElementById("advice-img-03");

gsap.timeline({
        scrollTrigger: {
            trigger: symptoms_trans,
            toggleActions: "play none none none",
        },
        repeatDelay: 1
    }).from(advice_text_01, {
        scale: 1.5,
        ease: Linear.easeNone,
        repeat: 2,
        yoyo: true
    }).to(advice_img_01, {
        rotation: 360,
        duration: 2,
    }, "-=1")
    // 02
    .from(advice_text_02, {
        scale: 1.5,
        ease: Linear.easeNone,
        repeat: 2,
        yoyo: true

    }).to(advice_img_02, {
        rotation: 360,
        duration: 2,

    }, "-=1")
    // 03
    .from(advice_text_03, {
        scale: 1.5,
        ease: Linear.easeNone,
        repeat: 2,
        yoyo: true
    }).to(advice_img_03, {
        rotation: 360,
        duration: 2,

    }, "-=1");
ScrollTrigger.refresh();


// ------------------------- section-protect -------------------------

var protect_image_left = document.getElementById("protect-image-left");
var protect_image_right = document.getElementById("protect-image-right");

gsap.timeline({
    scrollTrigger: {
        trigger: protect_image_left,
        toggleActions: "restart pause none reset",

    },
    repeatDelay: 1
}).from(protect_image_left, {
    x: -300,
    opacity: 0,
    ease: Linear.easeNone,
    duration: 1.2
});
ScrollTrigger.refresh();

gsap.timeline({
    scrollTrigger: {
        trigger: protect_image_right,

        toggleActions: "restart pause none reset",
    },
    repeatDelay: 1
}).from(protect_image_right, {
    x: -300,
    ease: Linear.easeNone,
    duration: 1.2
});
ScrollTrigger.refresh();


// -------------------------- Protect Others --------------------------

var protect_others = document.getElementById("protect-others");

var protect_text_01 = document.getElementById("protect-text-01");
var protect_text_02 = document.getElementById("protect-text-02");
var protect_text_03 = document.getElementById("protect-text-03");

var protect_img_01 = document.getElementById("protect-img-01");
var protect_img_02 = document.getElementById("protect-img-02");
var protect_img_03 = document.getElementById("protect-img-03");

gsap.timeline({
        scrollTrigger: {
            trigger: protect_others,
            toggleActions: "play none none none",
        },
        repeatDelay: 1
    }).
    // 01
from(protect_text_01, {
        scale: 1.5,
        ease: Linear.easeNone,
        repeat: 2,
        yoyo: true
    }).to(protect_img_01, {
        rotation: 360,
        duration: 2,
    }, "-=1")
    // 02
    .from(protect_text_02, {
        scale: 1.5,
        ease: Linear.easeNone,
        repeat: 2,
        yoyo: true

    }).to(protect_img_02, {
        rotation: 360,
        duration: 2,

    }, "-=1")
    // 03
    .from(protect_text_03, {
        scale: 1.5,
        ease: Linear.easeNone,
        repeat: 2,
        yoyo: true
    }).to(protect_img_03, {
        rotation: 360,
        duration: 2,

    }, "-=1");
ScrollTrigger.refresh();