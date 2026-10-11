// 기본 내장 데이터. 구글 시트를 연결하면 시트 내용이 우선해요 (config.js 참고).
// 이 파일은 sheet-csv/ 폴더의 CSV와 같은 내용이에요.
window.DEFAULT_DATA = {
 "groups": [
  {
   "id": "f_p",
   "title": "f 와 p",
   "emoji": "🌬️",
   "core": true,
   "tip": "f는 윗니를 아랫입술에 살짝 대고 바람을 '후—' 내보내요. p는 두 입술을 붙였다가 '프' 하고 터뜨려요. 한국어 'ㅍ'은 f가 아니라 p에 가까워요."
  },
  {
   "id": "v_b",
   "title": "v 와 b",
   "emoji": "📳",
   "core": true,
   "tip": "v는 f와 같은 입 모양에서 목을 '부르르' 울려요. 손을 목에 대 보세요. b는 두 입술을 붙였다가 터뜨려요."
  },
  {
   "id": "l_r",
   "title": "l 과 r",
   "emoji": "👅",
   "core": true,
   "tip": "l은 혀끝을 윗잇몸에 딱 붙여요. r은 혀끝이 어디에도 닿지 않게 뒤로 살짝 말고, 입술을 조금 오므려요."
  },
  {
   "id": "i_ee",
   "title": "짧은 i 와 긴 ee",
   "emoji": "🐑",
   "core": false,
   "tip": "ship의 i는 힘을 빼고 짧게 '이'. sheep의 ee는 입꼬리를 옆으로 당기고 길게 '이이—'."
  },
  {
   "id": "th_s",
   "title": "th 와 s",
   "emoji": "🦷",
   "core": false,
   "tip": "th는 혀끝을 윗니와 아랫니 사이로 살짝 내밀고 바람을 내보내요. s는 혀를 안에 두고 '스—' 해요."
  },
  {
   "id": "ae_e",
   "title": "a 와 e (bad / bed)",
   "emoji": "🛏️",
   "core": false,
   "tip": "bad의 a는 입을 크게 벌려 '애'에 가깝게. bed의 e는 입을 덜 벌려 '에' 해요."
  }
 ],
 "pairs": [
  {
   "g": "f_p",
   "a": "fan",
   "aKo": "선풍기, 팬",
   "aEx": "",
   "b": "pan",
   "bKo": "프라이팬",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "fork",
   "aKo": "포크",
   "aEx": "Could I get a fork, please?",
   "b": "pork",
   "bKo": "돼지고기",
   "bEx": "Is this pork?"
  },
  {
   "g": "f_p",
   "a": "coffee",
   "aKo": "커피",
   "aEx": "Can I get a coffee, please?",
   "b": "copy",
   "bKo": "복사본",
   "bEx": "Can I get a copy, please?"
  },
  {
   "g": "f_p",
   "a": "fast",
   "aKo": "빠른",
   "aEx": "Sorry, that was too fast.",
   "b": "past",
   "bKo": "지난, ~지나서",
   "bEx": "It's past three o'clock."
  },
  {
   "g": "f_p",
   "a": "fine",
   "aKo": "괜찮은",
   "aEx": "I'm fine, thanks.",
   "b": "pine",
   "bKo": "소나무",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "leaf",
   "aKo": "나뭇잎",
   "aEx": "",
   "b": "leap",
   "bKo": "뛰어오르다",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "very",
   "aKo": "매우",
   "aEx": "Thank you very much!",
   "b": "berry",
   "bKo": "베리(딸기류)",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "vest",
   "aKo": "조끼",
   "aEx": "",
   "b": "best",
   "bKo": "최고의",
   "bEx": "This one is the best."
  },
  {
   "g": "v_b",
   "a": "van",
   "aKo": "밴(승합차)",
   "aEx": "",
   "b": "ban",
   "bKo": "금지",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "vote",
   "aKo": "투표하다",
   "aEx": "",
   "b": "boat",
   "bKo": "배",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "curve",
   "aKo": "곡선, 커브",
   "aEx": "",
   "b": "curb",
   "bKo": "도로 가장자리 턱",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "light",
   "aKo": "빛, 전등",
   "aEx": "Turn off the light.",
   "b": "right",
   "bKo": "오른쪽, 맞는",
   "bEx": "Turn right at the corner."
  },
  {
   "g": "l_r",
   "a": "lock",
   "aKo": "잠그다",
   "aEx": "Please lock the door.",
   "b": "rock",
   "bKo": "바위",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "long",
   "aKo": "긴",
   "aEx": "How long will it take?",
   "b": "wrong",
   "bKo": "틀린",
   "bEx": "I think this is wrong."
  },
  {
   "g": "l_r",
   "a": "glass",
   "aKo": "유리잔",
   "aEx": "Can I get a glass of water?",
   "b": "grass",
   "bKo": "풀, 잔디",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "play",
   "aKo": "놀다, 연주하다",
   "aEx": "",
   "b": "pray",
   "bKo": "기도하다",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "collect",
   "aKo": "찾아가다, 모으다",
   "aEx": "I'm here to collect a package.",
   "b": "correct",
   "bKo": "맞는, 정확한",
   "bEx": "That's correct."
  },
  {
   "g": "i_ee",
   "a": "ship",
   "aKo": "배송하다, 배",
   "aEx": "I'd like to ship this to Korea.",
   "b": "sheep",
   "bKo": "양",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "sit",
   "aKo": "앉다",
   "aEx": "Please sit down.",
   "b": "seat",
   "bKo": "자리",
   "bEx": "Is this seat taken?"
  },
  {
   "g": "i_ee",
   "a": "fill",
   "aKo": "채우다",
   "aEx": "Can you fill this out?",
   "b": "feel",
   "bKo": "느끼다",
   "bEx": "I don't feel well."
  },
  {
   "g": "i_ee",
   "a": "hit",
   "aKo": "치다",
   "aEx": "",
   "b": "heat",
   "bKo": "열, 난방",
   "bEx": "Turn on the heat, please."
  },
  {
   "g": "i_ee",
   "a": "bit",
   "aKo": "조금",
   "aEx": "",
   "b": "beat",
   "bKo": "이기다, 두드리다",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "think",
   "aKo": "생각하다",
   "aEx": "I think so.",
   "b": "sink",
   "bKo": "가라앉다, 싱크대",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "thank",
   "aKo": "감사하다",
   "aEx": "Thank you so much!",
   "b": "sank",
   "bKo": "가라앉았다",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "three",
   "aKo": "셋",
   "aEx": "",
   "b": "free",
   "bKo": "무료, 자유로운",
   "bEx": "Is it free?"
  },
  {
   "g": "th_s",
   "a": "mouth",
   "aKo": "입",
   "aEx": "",
   "b": "mouse",
   "bKo": "쥐, 마우스",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "path",
   "aKo": "길",
   "aEx": "",
   "b": "pass",
   "bKo": "지나가다, 통과",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "bad",
   "aKo": "나쁜",
   "aEx": "I have a bad headache.",
   "b": "bed",
   "bKo": "침대",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "man",
   "aKo": "남자",
   "aEx": "",
   "b": "men",
   "bKo": "남자들",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "pan",
   "aKo": "팬",
   "aEx": "",
   "b": "pen",
   "bKo": "펜",
   "bEx": "Can I borrow a pen?"
  },
  {
   "g": "ae_e",
   "a": "bat",
   "aKo": "방망이, 박쥐",
   "aEx": "",
   "b": "bet",
   "bKo": "내기",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "sat",
   "aKo": "앉았다",
   "aEx": "",
   "b": "set",
   "bKo": "설정하다",
   "bEx": ""
  }
 ],
 "phrases": [
  {
   "id": "again",
   "en": "Sorry, could you say that again?",
   "ko": "죄송한데, 다시 한 번 말씀해 주시겠어요?",
   "when": "상대 말을 못 알아들었을 때. 병원·은행·마트 어디서든 쓸 수 있어요.",
   "sound": "쏘리, 쿠쥬 세이 댓 어겐?"
  },
  {
   "id": "slow",
   "en": "Could you speak a little slower, please?",
   "ko": "조금만 천천히 말씀해 주시겠어요?",
   "when": "상대가 너무 빨리 말할 때. 웃으면서 말하면 더 부드러워요.",
   "sound": "쿠쥬 스피크 어 리를 슬로워, 플리즈?"
  },
  {
   "id": "catch",
   "en": "Sorry, I didn't catch that.",
   "ko": "죄송해요, 못 알아들었어요.",
   "when": "한 번 듣고 놓쳤을 때. 가장 짧고 자연스러운 표현이에요.",
   "sound": "쏘리, 아이 디든 캐치 댓."
  },
  {
   "id": "write",
   "en": "Could you write that down for me?",
   "ko": "그거 좀 적어 주시겠어요?",
   "when": "주소, 전화번호, 약 이름처럼 중요한 걸 들었을 때. 적어 달라고 하면 틀릴 일이 없어요.",
   "sound": "쿠쥬 라잇 댓 다운 포 미?"
  },
  {
   "id": "mean",
   "en": "Sorry, what does that mean?",
   "ko": "죄송한데, 그게 무슨 뜻이에요?",
   "when": "모르는 단어가 나왔을 때. 그 단어를 가리키며 말해도 돼요.",
   "sound": "쏘리, 왓 더즈 댓 민?"
  }
 ],
 "missions": [
  "이번 주 안에 'Sorry, could you say that again?'을 실제로 한 번 써 보세요. 마트, 카페, 전화 어디서든 좋아요.",
  "계산을 마친 뒤 점원에게 'Have a good one!'이라고 말해 보세요.",
  "엘리베이터나 복도에서 이웃에게 'How's it going?'이라고 먼저 인사해 보세요.",
  "길을 묻거나 도움이 필요할 때 'Excuse me, do you know where ___ is?'를 써 보세요.",
  "택배나 우체국에서 'I'm here to pick up a package.'를 말해 보세요."
 ]
};
