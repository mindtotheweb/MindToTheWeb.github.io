    $(document).ready(function(){
      $('.slickSlider').slick({
  centerMode: true,
  centerPadding: '60px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 768,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 3
      }
    },
    {
      breakpoint: 480,
      settings: {
        arrows: false,
        centerMode: true,
        centerPadding: '40px',
        slidesToShow: 1
      }
    }
  ]
});
    });


var switcher = 1;

$('.clickable').on('click', function() {
  if (switcher == 1) {
    $(this).find(".hidden").show();
    console.log(switcher);
    switcher = 2;
  }else{
    $('.hidden').hide();
    $(this).find(".hidden").show();
    switcher = 2;
  }
})
