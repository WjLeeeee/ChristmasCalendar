// 모달을 생성하고 설정하는 함수
function showModal(imageUrl, text) {
  // 기존에 모달이 있다면 제거합니다.
  const existingModal = document.querySelector('.modal');
  if (existingModal) {
    existingModal.remove();
  }

  // 모달 요소를 생성합니다.
  const modal = document.createElement('div');
  modal.className = 'modal hidden';

  // 모달 내용을 담는 컨테이너를 생성합니다.
  const modalContent = document.createElement('div');
  modalContent.className = 'modal-content zoomIn';

  // 이미지를 표시할 요소를 생성합니다.
  const image = document.createElement('div');
  image.style.backgroundImage = `url(${imageUrl})`;
  image.alt = 'Door Image';
  image.style.backgroundSize = 'cover';
  image.style.width = '100%';
  image.style.height = '300px';  // 이미지의 세로 크기를 조절

  // 텍스트를 표시할 요소를 생성합니다.
  const textElement = document.createElement('p');
  textElement.textContent = text;

  // 모달 컨텐트에 이미지와 텍스트를 추가합니다.
  modalContent.appendChild(image);
  modalContent.appendChild(textElement);

  // 모달에 모달 컨텐트를 추가합니다.
  modal.appendChild(modalContent);

  // 모달에 클릭 이벤트 리스너를 추가하여 닫을 수 있도록 합니다.
  modal.addEventListener('click', () => {
    modal.remove(); // 모달을 문서에서 제거합니다.
  });

  // 모달 컨텐트의 크기를 조절합니다. 원하는 크기로 수정하세요.
  modalContent.style.width = '80%';
  modalContent.style.maxWidth = '500px';
  modalContent.style.height = '400px';  // 모달의 세로 크기를 조절

  // 문서에 모달을 추가합니다.
  document.body.appendChild(modal);
  // 모달을 표시합니다.
  setTimeout(() => modal.classList.remove('hidden'), 0);
}



const modalMessageList = [
  { "number": 1, "message": "남산 존예녀 깋졍!" },
  { "number": 2, "message": "어.. 나 혼나겠다 ㅜㅜ" },
  { "number": 3, "message": "보드매니아가 돼버린 깋졍이" },
  { "number": 4, "message": "감자밭..! 피곤해 죽을라하는 이우진.." },
  { "number": 5, "message": "나 여행왔어요~ 행복한깋졍" },
  { "number": 6, "message": "도비와 한강~~ 좋았었다정말!" },
  { "number": 7, "message": "혜화역! 들기름국수였나? 빛났던 현정이와..!" },
  { "number": 8, "message": "우리의 하늘공원은 최고였지!" },
  { "number": 9, "message": "우진's픽 하늘공원 베스트 깋졍이!" },
  { "number": 10, "message": "공방 너무 재밌었는데 그치!" },
  { "number": 11, "message": "케베! 총총 펭귄깋졍이" },
  { "number": 12, "message": "강릉에서 앵두같은 입술이 귀여운여자!" },
  { "number": 13, "message": "아르떼뮤지움! 벼락맞는 현정이~" },
  { "number": 14, "message": "아몰라 그냥 사랑스러움" },
  { "number": 15, "message": "물왕저수지두 생각보다 괜찮았어!" },
  { "number": 16, "message": "우리의 야구장데이트! 코 빨개진거봐 ㅜ" },
  { "number": 17, "message": "내얼굴 찌부 하지마 ㅡㅡ" },
  { "number": 18, "message": "여기두 대형카페! 앞머리 내리고 내 눈 하트로 바뀐날..!" },
  { "number": 19, "message": "대형카페! 였지! 이때 진짜 연애인포스 미쳤었다.." },
  { "number": 20, "message": "77ㅑ악! 귀여워.. 하트하투" },
  { "number": 21, "message": "이거 우리 초반! 나 점빼구 ㅋㅋㅋ" },
  { "number": 22, "message": "이제는 사라진 버터부에서. 우리좀 닮았나요!?" },
  { "number": 23, "message": "난 못생겼지만 날 쳐다보는 눈빛이 이뿌다" },
  { "number": 24, "message": "사랑하는 깋졍이 생일날! 사랑해♥" }
];