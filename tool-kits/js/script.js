// disable scrolling
window.addEventListener('scroll', () => window.scrollTo(0, 0));

let index = 0;
let divs = document.getElementsByClassName("show");

// defualt: display the first element
for (i = 1; i < divs.length; i++) {
    divs[i].style.display = "none";  
    // divs[i].style.opacity = "0";  
}

document.onkeydown = (e) => {
    if (e.key == "ArrowLeft") {
        next(-1);
    } else if (e.key == "ArrowRight") {
        next(1);
    }
}

const next = (direction) => {
    index += direction;
    if (index >= divs.length) {
        index = 0;
    } else if (index < 0) {
        index = divs.length - 1;
    }
    showDivs(index);
}

const showDivs = (index) => {
    for (i = 0; i < divs.length; i++) {
        divs[i].style.display = "none";  
        // divs[i].style.opacity = "0";  
    }
    divs[index].style.display = "block";
    // divs[index].style.opacity = "1";  
}

let showMenu = false;

const navClick = nav => {
    nav.classList.toggle("change");
    if (!showMenu) {
        document.getElementsByClassName("nav-menu-overlay")[0].style.height = "200vh";
        document.getElementsByClassName("nav-menu-overlay")[0].style.width = "200vw";
        showMenu = true;
    } else {
        document.getElementsByClassName("nav-menu-overlay")[0].style.height = "0";
        document.getElementsByClassName("nav-menu-overlay")[0].style.width = "0";
        showMenu = false;
    }
}