const sliderBanner = document.querySelector("#sliderBanner");
let sliderBannerSection = document.querySelectorAll(".sliderBanner__section");
let sliderBannerSectionLast = sliderBannerSection[sliderBannerSection.length -1];

const btnBannerLeft = document.querySelector("#btnBanner-left");
const btnBannerRight = document.querySelector("#btnBanner-right");

sliderBanner.insertAdjacentElement('afterbegin', sliderBannerSectionLast);

function Next() {
    let sliderBannerSectionFirst = document.querySelectorAll(".sliderBanner__section")[0];
    sliderBanner.style.marginLeft = "-200%";
    sliderBanner.style.transition = "all 0.5s";
    setTimeout(function(){
        sliderBanner.style.transition = "none";
        sliderBanner.insertAdjacentElement('beforeend', sliderBannerSectionFirst);
        sliderBanner.style.marginLeft = "-100%";
    }, 500);
}

function Prev() {
    let sliderBannerSection = document.querySelectorAll(".sliderBanner__section");
    let sliderBannerSectionLast = sliderBannerSection[sliderBannerSection.length -1];
    sliderBanner.style.marginLeft = "0";
    sliderBanner.style.transition = "all 0.5s";
    setTimeout(function(){
        sliderBanner.style.transtion = "none";
        sliderBanner.insertAdjacentElement ('afterbegin', sliderBannerSectionLast);
        sliderBanner.style.marginLeft = "-100%";
    }, 500);
}

btnBannerRight.addEventListener('click', function(){
    Next();
});

btnBannerLeft.addEventListener('click', function(){
    Prev();
})

setInterval (function(){
    Next();
}, 5000);