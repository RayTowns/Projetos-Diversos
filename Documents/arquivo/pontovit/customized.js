$(document).ready(function(){
    var owl = $(".owl-carousel");
        owl.owlCarousel({
        items:2,
        loop:true,
        margin:0,
        nav:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2
            },
            1000:{
                items:4
            }
        }
    })

$('.owl-next').click(() => owl.trigger('next.owl.carousel'))
  
  $('.owl-prev').click(() => owl.trigger('prev.owl.carousel'))
})