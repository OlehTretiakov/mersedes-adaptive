$(function(){
    $('.design-slider').slick({
        dots: false,
        slidesToShow: 1,
        variableWidth: true,
        prevArrow: '<img src="images/arrow-left.svg" alt="" class="arrow arrow-left slick-prev">',
        nextArrow: '<img src="images/arrow-right.svg" alt="" class="arrow arrow-right slick-next">'
    })
});