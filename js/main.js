// open and close menu (source: https://www.w3schools.com/howto/howto_js_sidenav.asp)

function openNav() {
    document.getElementById("sidenav").style.width = "100%";
}
function closeNav() {
    document.getElementById("sidenav").style.width = "0";
}

// back to top button (source: https://www.w3schools.com/howto/howto_js_scroll_to_top.asp)

var mybutton = document.getElementById("topBtn");
window.onscroll = function () { scrollFunction() };

function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

function topFunction() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}