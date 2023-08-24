/* a링크 누르면 준비중 이미지 */
/* a링크 href="#" 준비중 */
var img =
  "<div class='alert'><img src='./images/alert.png' alt='준비중 알림창'></div>";
$("body").append(img);
// 이벤트
$('a[href="#"]').click(function (e) {
  e.preventDefault();
  $(".alert").stop().fadeIn(500);
  $("#dimmed").stop().fadeIn(300);

  setTimeout(function () {
    $(".alert").stop().fadeOut(500);
    $("#dimmed").stop().fadeOut(300);
  }, 3000);
});

// 제이쿼리방식
$(document).ready(function () {
  // 햄버거 토글
  $("#menu_toggle_btn").on("click", function () {
    $(".gnb").stop().slideToggle();
  });

  // 박스슬라이더 플러그인
  $(".slide_gallery").bxSlider({
    speed: 1500,
    pause: 3000,
    mode: "horizontal",
    auto: true,
    pager: true,
  });
});
