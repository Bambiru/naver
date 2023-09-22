// a링크 href="#" 준비중
const img = document.createElement("div"); // div 엘리먼트 생성
img.className = "alert"; // 클래스명을 설정
const imgElement = document.createElement("img"); // img 엘리먼트 생성
imgElement.src = "./images/alert.png"; // 이미지 소스 설정
imgElement.alt = "준비중 알림창"; // 이미지 대체 텍스트 설정
img.appendChild(imgElement); // div 안에 img를 자식으로 추가.
document.body.appendChild(img); // body에 준비중 이미지를 추가

// 이벤트
// href 속성이 "#"인 모든 a링크에 클릭 이벤트를 등록
document.querySelectorAll('a[href="#"]').forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault(); // 기본 클릭 동작 막기

    const alertBox = document.querySelector(".alert"); // 준비중 이미지 엘리먼트를 가져오기.
    const dimmed = document.querySelector("#dimmed");
    alertBox.style.display = "block"; // 준비중 이미지를 화면에 보이도록 설정
    dimmed.style.display = "block";

    setTimeout(() => {
      alertBox.style.display = "none";
      dimmed.style.display = "none";
    }, 3000);
  });
});

// 햄버거 토글
document.querySelector("#menu_toggle_btn").addEventListener("click", () => {
  const gnb = document.querySelector(".gnb");

  // gnb가 보이면 숨기고, 숨겨져 있으면 보이도록 토글.
  if (gnb.style.display === "block") {
    gnb.style.display = "none";
  } else {
    gnb.style.display = "block";
  }
});

// 박스슬라이더 플러그인
let slideIndex = 0; // 현재 보여지고 있는 슬라이드의 순서
let slideTimer; // 슬라이드를 자동으로 넘기는 기능을 구현할 때 사용할 타이머
let dotContainer = document.querySelector("#dotContainer"); // 도트를 저장할 컨테이너
const slides = document.querySelectorAll(".slide_gallery li");
const galleryWrap = document.querySelector(".gallery_wrap");
for (let i = 0; i < slides.length; i++) {
  // 각각의 슬라이드에 대응하는 도트를 생성
  const dot = document.createElement("span");
  dot.classList.add("dot");
  dotContainer.appendChild(dot); // 생성한 도트를 컨테이너 요소에 추가

  /* 각각의 도트 클릭 시, 해당 index로 바로 이동하고,
   * 이미 진행 중인 타임아웃을 초기화한 후 다시 시작 */
  dot.addEventListener("click", function () {
    clearTimeout(slideTimer); // 현재 설정된 setTimeout 제거
    slideIndex = i; // 클릭한 도트에 해당하는 인덱스로 변경
    showSlides(); // 변경된 인덱스에 맞게 슬라이드 표시 보여주기
  });
}

showSlides(); // 웹 페이지 로딩 완료 시, 슬라이드 쇼 시작

function showSlides() {
  const dots = document.querySelectorAll(".dot");

  // 모든 슬라이드와 도트 초기화
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none"; // 모든 슬라이드 숨김
    dots[i].style.backgroundColor = "#bbb"; // 모든 도트 색상 회색으로.
  }

  // 만약 현재 표시해야 할 슬라이드 인덱스가 전체 슬라이드 수보다 큰 경우, 첫 번째 슬라이드로
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }

  // 현재 표시해야 할 슬라이드와 해당하는 도트
  slides[slideIndex].style.display = "block";
  dots[slideIndex].style.backgroundColor = "#717171";

  /* 일정 시간이 지난 후 코드 블록 내부의 함수를 실행하도록 예약하고, 매번 다음 이미지로 넘어가게 설정. */
  slideTimer = setTimeout(function () {
    slideIndex++;
    showSlides();
  }, 4000);
}

// 마우스가 .gallery_wrap 요소 위에 있으면 setTimeout 지움
galleryWrap.addEventListener("mouseenter", () => {
  clearTimeout(slideTimer);
});

// 마우스가 .gallery_wrap 요소 밖으로 나가면 showSlides()
galleryWrap.addEventListener("mouseleave", () => {
  showSlides();
});
