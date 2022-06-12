// javascript for navigation bar effect n scroll

window.addEventListener("scroll",function() {
    const header = this.document.querySelector("header");
    header.classList.toggle('sticky', this.window.scrollY > 0);
});

// javascript for responstive navigation sidebar menu

const menuBtn = document.querySelector(".menu-btn");
const navigation = document.querySelector(".navigation");
const navigationIterms = document.querySelectorAll(".navigation a")
menuBtn.addEventListener("click", () => {
    menuBtn.classList.toggle("active");
    navigation.classList.toggle("active");

});

navigationIterms.forEach((navigationIterms) => {
    navigationIterms.addEventListener("click", () => {
        menuBtn.classList.remove("active");
        navigation.classList.remove("active");
    });
});

// javascript for scoll to top button
const scrollToTopbtn = document.querySelector(".scrollToTop-btn");

window.addEventListener("scroll", function() {
    scrollToTopbtn.classList.toggle("active", window.scrollY > 500);

});

// javascript for scroll back to top on click the scrollToTop-btn
scrollToTopbtn.addEventListener("click", () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

// javascript fo reveal website elements on scroll to top 

window.addEventListener("scroll" , reveal);

function reveal() {
    var reveals = document.querySelectorAll(".reveal");

    for(var i=0; i< reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var revealTop = reveals[i].getBoundingClientRect().top;
        var revealPoint = 50;

        if(revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add("active");
        }
    }
}