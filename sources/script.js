const ham = document.querySelector(".hamburger");
const nav = document.querySelector(".nav-items")

ham.onclick = function(){
    nav.classList.toggle("active");
}

//galería

document.querySelectorAll(".gal").forEach(item => {
    item.addEventListener('click', func => {
        item.classList.toggle("big");
    })
})


