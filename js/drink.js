window.onscroll = function() {
    if (document.documentElement.scrollTop > 50) {
        document.getElementById("header").style.height = "70px";
        document.getElementById("header").style.fontSize = "18px";
    } else {
        document.getElementById("header").style.height = "150px";
        document.getElementById("header").style.fontSize = "18px";
    }
}