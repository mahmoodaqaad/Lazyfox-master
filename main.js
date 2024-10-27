document.addEventListener("scroll", Headers)
let header = document.querySelector("header")
function Headers() {

    if (window.scrollY >= 79) {
        header.classList.add("active")

    }
    else {

        header.classList.remove("active")
    }
}
let x = true;
// if ()
// function owl() {
window.onresize = () => {
    if (window.innerWidth <= 767) {
        x = false
    }
    else {
        x = true
    }
}

let owl = document.querySelectorAll(".owls span")
owl.forEach(e => {
    e.onclick = () => {


        // remove all class active form owl 
        owl.forEach(e => {
            e.classList.remove("active")
        })

        // add clas active form owl 
        e.classList.add("active")


        if (window.innerWidth > 767) {

            document.querySelector(".content").scrollLeft = e.getAttribute("data-place")
        }


        else if (window.innerWidth > 511 && window.innerWidth <= 767) {
            document.querySelector(".content").scrollLeft = e.getAttribute("data-place2")
        }
        else {
            document.querySelector(".content").scrollLeft = e.getAttribute("data-place3")
            // document.querySelector(".content").scrollLeft =

        }


        // if(window.innerWidth)
        // window.addEventListener("re\", () => {

    }
})

// header 
let manu = document.querySelector("header .manu")
manu.onclick = (e) => {
    document.querySelector("nav").classList.toggle("active")
    manu.classList.toggle("active")
}