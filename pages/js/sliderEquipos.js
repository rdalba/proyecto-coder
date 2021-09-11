const sliderEquipos = document.querySelector("#sliderEquipos");
let sliderEquiposSection = document.querySelectorAll(".sliderEquipos__section");
let sliderEquiposSectionLast = sliderEquiposSection[sliderEquiposSection.length -1];
/*
const btnEquiposLeft = document.querySelector("#btnEquipos-left");
const btnEquiposRight = document.querySelector("#btnEquipos-right");
*/
sliderEquipos.insertAdjacentElement('afterbegin', sliderEquiposSectionLast);

function Next() {
    let sliderEquiposSectionFirst = document.querySelectorAll(".sliderEquipos__section")[0];
    sliderEquipos.style.marginLeft = "-200%";
    sliderEquipos.style.transition = "all 0.3s";
    setTimeout(function(){
        sliderEquipos.style.transition = "none";
        sliderEquipos.insertAdjacentElement('beforeend', sliderEquiposSectionFirst);
        sliderEquipos.style.marginLeft = "-100%";
    }, 300);
}

function Prev() {
    let sliderEquiposSection = document.querySelectorAll(".sliderEquipos__section");
    let sliderEquiposSectionLast = sliderEquiposSection[sliderEquiposSection.length -1];
    sliderEquipos.style.marginLeft = "0";
    sliderEquipos.style.transition = "all 0.3s";
    setTimeout(function(){
        sliderEquipos.style.transtion = "none";
        sliderEquipos.insertAdjacentElement ('afterbegin', sliderEquiposSectionLast);
        sliderEquipos.style.marginLeft = "-100%";
    }, 300);
}
/*
btnEquiposRight.addEventListener('click', function(){
    Next();
});

btnEquiposLeft.addEventListener('click', function(){
    Prev();
})
*/
setInterval (function(){
    Next();
}, 1000);