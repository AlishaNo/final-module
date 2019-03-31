$(document).ready(function(){
    $('.first').click(function (){ //от кого скролл, цель клика
        $('html, body').animate({
            scrollTop: $('.home').offset().top //к кому скроллит
        }, 2000);
    });
    $('.second').click(function (){ //от кого скролл, цель клика
        $('html, body').animate({
            scrollTop: $('.about').offset().top //к кому скроллит
        }, 2000);
    });
    $('.third').click(function (){ //от кого скролл, цель клика
        $('html, body').animate({
            scrollTop: $('.catalog').offset().top //к кому скроллит
        }, 2000);
    });
    $('.fourth').click(function (){ //от кого скролл, цель клика
        $('html, body').animate({
            scrollTop: $('.contact-us').offset().top //к кому скроллит
        }, 2000);
    });

    $('.show-modal').click(function () {
        $('.modal-overlay').addClass('active');
        $(document.body).addClass('modal-opened');
        var top = $(document).scrollTop();
        $('.modal-overlay').css('top', top);
    });
    $('[data-close]').click(':not(.modal-body)', function () {
        $('.modal-overlay').removeClass('active');
        $(document.body).removeClass('modal-opened');
    });

    $('.modal-body').click(function (event) { // убираем закрытие попапа по картинке, чтоб он закрывался только кликом по кнопке и фону
        event.stopPropagation();
        event.preventDefault();
    });
    $('.slider-for').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-nav'
    });
    $('.slider-nav').slick({
        slidesToShow: 3,
        slidesToScroll: 1,
        asNavFor: '.slider-for',
        dots: true,
        centerMode: true,
        variableWidth: true,
        focusOnSelect: true
    });


});