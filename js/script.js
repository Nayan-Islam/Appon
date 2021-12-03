$(".banner-slider").slick({
    arrows: false,
    dots: true,
})

$(".img-slider").slick({
    arrows: false,
    dots: true,
    slidesToShow:5,
})

$(".text-slider").slick({
    arrows: false,
    dots: false,
    slidesToShow:1,
    asNavFor:".feedback-img-slider",
    fade: false,
})
$(".feedback-img-slider").slick({
    arrows: false,
    dots: false,
    slidesToShow:3,
    centerMode: true,
    centerPadding: "0",
    asNavFor:".text-slider",
    dots: true,
    autoplay: true,
})


$('.venobox').venobox(); 