
// Scroll To Top

let scrollToTop = document.querySelector(".scroll-to-top");

window.onscroll = function() {
    if(window.scrollY >= 800) {
        scrollToTop.style.display = "block";
    } else { 
        scrollToTop.style.display = "none";
    }
}; 

scrollToTop.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
};


// Active Hover 

/*


let box = document.getElementById("pay1"),
    dollarSign = document.querySelector(".dollar"),
    price = document.querySelector(".price"),
    duration = document.querySelector(".duration"),
    p = document.querySelector(".feau");


    box.onmouseover = function() {
        box.style.backgroundColor = "#6C55F9";
        dollarSign.style.color = "white";
        price.style.color = "white";
        this.style.transition = "0.5s";
        duration.style.color = "white";
        p.style.color = "white"
    }

    box.onmouseleave = function() {
        box.style.backgroundColor = "#fff";
        dollarSign.style.color = "black";
        price.style.color = "black";
        this.style.transition = "0.5s";
        duration.style.color = "#6C55F9";
        p.style.color = "black"
    }


*/


