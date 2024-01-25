
var navibar_toggle = document.getElementById('navibar-toggle');
navibar_toggle.onclick = function () {
    navibar_toggle.classList.toggle('open');
    toggleMenu();
}
function toggleMenu() {
    var menuBox = document.getElementById('main-menu');
    if (menuBox.style.display == "block") { // if is menuBox displayed, hide it
        menuBox.style.display = "none";
        $('#logo').fadeIn();
    } else { // if is menuBox hidden, display it
        menuBox.style.display = "block";
        document.getElementById('logo').style.display="none";
        alert("AA");
    }
}
$(document).ready(function () {

    $(window).scroll(function () {
        if ($(window).width() > 768) {
            if ($(this).scrollTop() == 0) {
                $('#header').fadeIn();
            }
            else {
                if ($(this).scrollTop() > 100) {
                    $("#header").css({ position: 'fixed', backgroundColor: '#bdc3c7' });
                    $('#header').fadeIn();
                } else {
                    $('#header').fadeOut();
                    $("#header").css({ position: 'static', backgroundColor: 'transparent' });
                }
            }
        }

    });
});
function onscrolltop(){
    window.scrollTo(0, 0);
}
