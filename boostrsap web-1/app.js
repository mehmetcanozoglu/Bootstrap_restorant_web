
//action navbar
let nav = document.querySelector(".navigation-wrap")
window.onscroll = function () {
    if (document.documentElement.scrollTop > 20){
        nav.classList.add("scroll-on")
    }else{
        nav.classList.remove("scroll-on")
    }
}
//counter design
let displayValue = document.querySelectorAll(".count")
let interval = 4000

displayValue.forEach((displayValue) => {
    let startvalue = 0
    let endvalue = parseInt(displayValue.getAttribute("data-val"))
    
    let duration = Math.floor(interval / endvalue)
    let counter = setInterval(function () {
        startvalue +=1;
        displayValue.textContent = startvalue
        if(startvalue == endvalue) {
            clearInterval(counter)
        }
    },duration)
})  