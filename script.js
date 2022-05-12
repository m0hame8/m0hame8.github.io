gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from('.content', {
    y: '-30%',
    opacity: 0,
    duration: 2,
    ease: Power4.easeOut
})
tl.from('.stagger1', {
    opacity: 0,
    y: -50,
    stagger: .3,
    ease: Power4.easeOut,
    duration: 2
}, "-=1.5")
tl.from('.hero-design', {
    opacity: 0, y: 50, ease: Power4.easeOut, duration: 1
}, "-=2")

gsap.from(".square-anim", {
    stagger: .2,
    scale: 0.1,
    duration: 1,
    ease: Back.easeOut.config(1.7)
})

gsap.from(".transition2", {
    scrollTrigger: {
        trigger: '.transition2',
        start: "top bottom"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .3
})

gsap.from(".transition3", {
    scrollTrigger: {
        trigger: ".transition3",
        start: "top center"
    },
    y: 50,
    opacity: 0,
    duration: 1.2,
    stagger: .6
});

gsap.from(".transition4", {
    scrollTrigger: {
        trigger: ".transition4",
        start: "center center"
    },
    y: 0,
    opacity: 0.01,
    duration: 3,
    stagger: 1
});

function sendEmail() {
Email.send({
    Host : "smtp.elasticemail.com",
    Username : "mahin.7462@gmail.com",
    Password : '87DC37947633DBAD463E3C6F511ACA2F05F6',
    To : 'mahin.7462@gmail.com',
    From : document.getElementById("email").value,
    Subject : "This is the subject",
    Body : "Name: " + document.getElementById("name").value
        + "<br>Email : " + document.getElementById("email").value
        + "<br>number : " + document.getElementById("phone").value
        + "<br>MEssage : " + document.getElementById("message").value
}).then(
  message => alert("Thanks, I'll Contact You Soon!")
);
}

const scroll = new SmoothScroll('a[href*="#"]');