var swiper = new Swiper(".team__swiper", {
    slidesPerView: 4,
    spaceBetween: 30,
    navigator: {
        nextEl: ".team__next",
        prevEl: ".team__prev",
    },
    autoplay:{
        deplay:2000
    },
    loop:true
  });

  $(function() {
  
    $('ul.benefits__list').on('click', 'li:not(.active)', function() {
      $(this)
        .addClass('active').siblings().removeClass('active')
        .closest('div.tabs').find('div.benefits__content').removeClass('active').eq($(this).index()).addClass('active');
    });
    
  });