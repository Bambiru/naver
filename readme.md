# 네이버

- 네이버의 회사소개 페이지를 참고하여 반응형페이지로 만들었습니다.
  <img src="https://github.com/Bambiru/naver/assets/116716953/c342e850-b0d9-4127-88be-764785df542f">
  <img src="https://github.com/Bambiru/naver/assets/116716953/221ac253-acf2-48a3-8af6-cb68f9c69255">

## 느낀 점

- jQuery를 JS로 변경하는 중, bxSlider는 jQuery에서만 지원한다는 것을 알게되었습니다.<br/>
  다른 라이브러리를 찾을까 고민하다가 기왕 이렇게 된 거 직접 만들어보기로 하였습니다.<br/>
  생각보다 코드는 복잡하고 어려웠으며,<br/>
  프로그래밍적 사고를 생각하며 정말 하나하나 모든것을 다 지정해줘야하는거구나 느끼게 되었습니다.

### 슬라이드 구현 코드

```
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

```

---

### 사이트 링크

- http://jbambi.com/ez/naver/
