// disable scrolling
window.addEventListener('scroll', () => window.scrollTo(0, 0));

let index = 0;
let divs = document.getElementsByClassName("show-cards");

let pagination = document.getElementsByClassName("pagination")[0];
let dots = document.getElementsByClassName("dot");

// add pagination:
pagination.innerHTML += "<span class='dot dot--active' onclick='setIndex(0)'></span>";
for (var i = 1; i < divs.length; i++) {
    pagination.innerHTML += "<span class='dot' onclick='setIndex(" + i + ")'></span>";
}

// defualt: display the first element
for (var i = 1; i < divs.length; i++) {
    divs[i].style.display = "none";   
    divs[i].style.opacity = "0";  
}

document.onkeydown = (e) => {
    if (e.key == "ArrowLeft") {
        next(-1);
    } else if (e.key == "ArrowRight") {
        next(1);
    }
}

const setIndex = (i) => {
    let previous = index;
    index = i;
    dots[previous].classList.remove("dot--active");
    dots[index].classList.add("dot--active");
    showDivs(index-previous, previous, index);
}

const next = (direction) => {
    let previous = index;
    index += direction;
    if (index >= divs.length) {
        index = 0;
    } else if (index < 0) {
        index = divs.length - 1;
    }
    showDivs(direction, previous, index);

    // handle pagination:
    dots[previous].classList.remove("dot--active");
    dots[index].classList.add("dot--active");
}

const showDivs = (direction, previous, index) => {
    divs[previous].style.opacity = "0";  
    if (direction > 0) {
        divs[previous].style.transform = "translateX(-16rem) scale(0.8)";
    } else {
        divs[previous].style.transform = "translateX(16rem) scale(0.8)";
    }
    setTimeout(() => {
        if (direction > 0) {
            divs[previous].style.transform = "translateX(0rem) scale(1)";
        } else {
            divs[previous].style.transform = "translateX(0rem) scale(1)";
        }
        divs[previous].style.display = "none";
    }, 300)
    divs[index].style.display = "block";
    divs[index].style.opacity = "1";  
}

let showMenu = false;

// displaying the nav menu
const navClick = nav => {
    nav.classList.toggle("change");
    if (!showMenu) {
        document.getElementsByClassName("nav-menu-overlay")[0].style.display = "block";
        setTimeout(()=> {
            document.getElementsByClassName("nav-menu-overlay")[0].style.height = "200vh";
            document.getElementsByClassName("nav-menu-overlay")[0].style.width = "200vw";
        }, 200)
        setTimeout(()=> {
            document.getElementsByClassName("nav-menu")[0].style.opacity = "1";
        }, 300)
        
        showMenu = true;
    } else {
        setTimeout(()=> {
            document.getElementsByClassName("nav-menu-overlay")[0].style.height = "0";
            document.getElementsByClassName("nav-menu-overlay")[0].style.width = "0";
        }, 250)
        setTimeout(()=> {
            document.getElementsByClassName("nav-menu-overlay")[0].style.display = "none";
        }, 800)
        document.getElementsByClassName("nav-menu")[0].style.opacity = "0";
        showMenu = false;
    }
}

const choose = types => {
    navClick(document.getElementsByClassName("nav-icon")[0]);

}