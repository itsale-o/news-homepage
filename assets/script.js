const openMenuButton = document.getElementById("open-menu-btn");
const closeMenuButton = document.getElementById("close-menu-btn");
const menu = document.getElementById("menu-div");
const darkEffectDiv = document.getElementById("back");

openMenuButton.addEventListener("click", openMenu);
closeMenuButton.addEventListener("click", closeMenu)

function openMenu(){
    menu.classList.remove("hidden");
    menu.className += "not-hidden";
    darkEffectDiv.style.display = "block";
}

function closeMenu(){
    menu.classList.remove("not-hidden");
    menu.className += "hidden";
    darkEffectDiv.style.display = "none";
}