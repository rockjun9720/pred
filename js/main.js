//모바일메뉴
//.ham을 클릭했을 때
// .mgnb_wrap {left:0} animate 되어라
$(".ham").click(function () {
  $(".mgnb_wrap").animate({
    left: "0"
  });
});

$(".mgnb_close").click(function () {
  $(".mgnb_wrap").animate({
    left: "100%"
  });
});

$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings().find(".mdepth2").slideUp();
});


// 2차메뉴
$(".gnb > li").hover(function () {
  $(this).find(".depth2").stop().slideToggle();
});

// 배너 슬라이드
const banner_list = new Swiper('.banner_list', {
  // autoplay: { // 자동재생
  //   delay: 3000, // 3초
  //   disableOnInteraction: false,
  // },
  loop: true, // 기본값 false, 슬라이드 반복
  navigation: {
    nextEl: ".swiper-button-next", // 다음
    prevEl: ".swiper-button-prev", // 이전
  },
  pagination: {
    el: ".swiper-pagination",
    type: "progressbar",
  },
});

// 메뉴 슬라이드
const menu_list = new Swiper('.menu_list', {
  centeredSlides: true, // 활성화된 슬라이드가 가운데
  loop: true, // 슬라이드 반복
  autoplay: { // 자동재생
    delay: 3000, // 3초
    disableOnInteraction: false,
  },
  speed: 1000,
  // 반응형 슬라이드 옵션
  breakpoints: {
    0: { // 640픽셀 이상에서 min-width
      slidesPerView: 1.5,
    },
    768: { // 768픽셀 이상에서
      slidesPerView: 2.5,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});