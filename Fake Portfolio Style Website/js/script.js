/*global $ */

$(document).ready(function () {
    function checkSize() {
        if ($(window).width() <= 972) {
            $('.description').removeClass('imgDescription');
            $('.description').addClass('imgDescription-mobile');
        } else if ($(window).width() > 972) {
            $('.description').addClass('imgDescription');
            $('.description').removeClass('imgDescription-mobile');
        }
    }
    checkSize();
    $(window).resize(function () {
        checkSize();
    });
    /* Code taken from stackoverflow [1] changes so that it only activates on certain screen sizes */
    $(window).scroll(function () {
        if ($(window).scrollTop() > 0 && $(window).width() > 700) {
            $('#my-navbar').addClass('navbar-fixed');
        }
        if ($(window).scrollTop() > 0 && $(window).width() <= 700) {
            $('#my-navbar').removeClass('navbar-fixed');
        }
    });
    /* End of code taken from stackoverflow [1] changes so that it only activates on certain screen sizes */
    /* Code taken from stackoverflow [3] no changes here */
    $('.bar').click(function () {
        $('.collapsed').toggleClass('closed');
    });
    /* End of code taken from stackoverflow [3] no changes here */
    $('#tab1').click(function () {
        $('#tab1').addClass('activated');
        $('#tab2').removeClass('activated');
        $('#tab3').removeClass('activated');
        $('.tab1').addClass('activated');
        $('.tab2').removeClass('activated');
        $('.tab3').removeClass('activated');
    });
    $('#tab2').click(function () {
        $('#tab1').removeClass('activated');
        $('#tab2').addClass('activated');
        $('#tab3').removeClass('activated');
        $('.tab1').removeClass('activated');
        $('.tab2').addClass('activated');
        $('.tab3').removeClass('activated');
    });
    $('#tab3').click(function () {
        $('#tab1').removeClass('activated');
        $('#tab2').removeClass('activated');
        $('#tab3').addClass('activated');
        $('.tab1').removeClass('activated');
        $('.tab2').removeClass('activated');
        $('.tab3').addClass('activated');
    });
    $('.div1').click(function () {
        document.getElementById("placeholder-img").src = "images/placeholder-red.png";
    });
    $('.div2').click(function () {
        document.getElementById("placeholder-img").src = "images/placeholder-orange.png";
    });
    $('.div3').click(function () {
        document.getElementById("placeholder-img").src = "images/placeholder-yellow.png";
    });
    $('.div4').click(function () {
        document.getElementById("placeholder-img").src = "images/placeholder-green.png";
    });
    $('.div5').click(function () {
        document.getElementById("placeholder-img").src = "images/placeholder-blue.png";
    });
});