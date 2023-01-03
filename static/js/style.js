// mo nav
$(document).on('click','.mo-menu-btns', function(){
  $('header nav').slideDown();
  $('body').css('overflow','hidden');
});
$(document).on('click','.close-btn', function(){
  $('header nav').slideUp();
  $('body').css('overflow','initial');
});


$(document).on('click','header nav .swiper-pagination-bullet', function(){
  if(window.innerWidth <= 900) {
    $('header nav').slideUp();
    $('body').css('overflow','initial');
  }
});

$(window).resize(function(){
  if(window.innerWidth >= 900) {
    $('header nav').slideDown();
    $('body').css('overflow','initial');
  }
  if(window.innerWidth <= 780) {
    let li_h = $('#sub-sec5 .content ul li').width();
    console.log(li_h);
    $('#sub-sec5 .content ul li .img-box').css({
      'height': li_h,
    }) 
  }
  // console.log(slideH);
}); 

// 한글체크
const korean = /([ㄱ-ㅎ]|[ㅏ-ㅣ]|[가-힣])/;
let body_text = $('body').text();
if(korean.test(body_text)){
  $('body').css('font-family',"\'Noto Sans KR\'", "!important");
}

// 기타 체크 박스
let direct_chk = $('.free-form_box form ul li .input-box.item3 input[type="checkbox"]');

$(direct_chk).on('click', function(){
  console.log($(this).is(':checked'));
  if($(this).is(':checked')== true){
    $(this).siblings('.direct_input').attr('disabled', false);
  }else{
    $(this).siblings('.direct_input').attr('disabled', true);
  }
});

// file upload


$(document).on("change", "#file", function(){
  let uploadInput = $('.upload-box input[type="file"]');
  let uploadV = uploadInput.val();
  console.log(uploadV);
  $(this).siblings('.file-input_box').find('input[type="text"]').attr('value',uploadV);
});

// admin 아코디언 토글
$('.arrow').on('click', function(){
  $(this).toggleClass('on').parent('.tit-box').siblings('.content').slideToggle();
});