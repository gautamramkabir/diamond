$(document).ready(function(){
      $('.tab-1').trigger('click');
    });




//portfolio Carousel
if ($('.portfolio-carousel').length) {
      $('.portfolio-carousel').owlCarousel({
            loop:true,
            margin:0,
            nav:true,
            smartSpeed: 700,
            autoplayTimeout:10000,
            startPosition: 'URLHash',
            URLhashListener:true,
            autoplay: false,
            navText: [ '<span class="fa fa-angle-left"></span>', '<span class="fa fa-angle-right"></span>' ],
            responsive:{
                  0:{
                        items:1
                  },
                  768:{
                        items:1
                  },
                  1024:{
                        items:1
                  }
            }
      });    		
}


    function  tabOnClick(id){
        $('.tab-1').removeClass('individual');
        $('.tab-2').removeClass('individual');
        $('.tab-3').removeClass('individual');
        $('.tab-4').removeClass('individual');
        $('.tab-'+id).addClass('individual');
    }


