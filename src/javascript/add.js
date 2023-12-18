document.addEventListener("DOMContentLoaded",function(){
    var aboutButton=document.querySelector(".homepage__button");
    aboutButton.addEventListener("click",function(event){
        event.preventDefault();
        navChange();
        setTimeout(function(){
            window.location.href="about.html"
        }, 500);
    })
    function navChange(){
        var nav=document.querySelector(".nav1");
        nav.classList.toggle("active");
    }
})

const home=document.getElementById("home");
const slides=document.querySelectorAll(".slide");
const leftarr=document.getElementById("left");
const rightarr=document.getElementById("right");

let activeSlide=0;
rightarr.addEventListener("click",()=>{
    activeSlide++
    if(activeSlide>slides.length-1){
        activeSlide=0;
    }
    setBgToBody()
    
})

leftarr.addEventListener("click",()=>{
    activeSlide--
    if(activeSlide<0){
        activeSlide=slides.length-1;
    }
    setBgToBody()
    
})


function setBgToBody(){
    home.style.backgroundImage=slides[activeSlide].style.backgroundImage
}

setBgToBody()





function description(projectId){
    var project=document.getElementById(projectId);
    project.classList.toggle("show")

}









