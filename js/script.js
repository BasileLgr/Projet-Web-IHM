var menuBurger = document.querySelector(".menu-burger");
var burger = document.querySelector(".burger");

burger.addEventListener("click", () => {
    menuBurger.classList.toggle("invisible");
})
window.addEventListener("resize", () => {
    if (window.innerWidth >= 1150){
        if (!menuBurger.classList.contains("invisible")){
            menuBurger.classList.toggle("invisible");
        }
    }
});