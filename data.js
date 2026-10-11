// 기본 내장 데이터. 구글 시트를 연결하면 시트 내용이 우선해요 (config.js 참고).
// 이 파일은 sheet-csv/ 폴더의 CSV와 같은 내용이에요.
window.DEFAULT_DATA = {
 "groups": [
  {
   "id": "f_p",
   "title": "f 와 p",
   "core": true,
   "tip": "f는 윗니를 아랫입술에 살짝 대고 바람을 '후—' 내보내요. p는 두 입술을 붙였다가 '프' 하고 터뜨려요. 한국어 'ㅍ'은 f가 아니라 p에 가까워요."
  },
  {
   "id": "v_b",
   "title": "v 와 b",
   "core": true,
   "tip": "v는 f와 같은 입 모양에서 목을 '부르르' 울려요. 손을 목에 대 보세요. b는 두 입술을 붙였다가 터뜨려요."
  },
  {
   "id": "l_r",
   "title": "l 과 r",
   "core": true,
   "tip": "l은 혀끝을 윗잇몸에 딱 붙여요. r은 혀끝이 어디에도 닿지 않게 뒤로 살짝 말고, 입술을 조금 오므려요."
  },
  {
   "id": "y_ear",
   "title": "y 소리 (year / ear)",
   "core": false,
   "tip": "'향수'를 '항수'로 말하는 것처럼, 짧은 '이' 소리(y)가 빠지기 쉬워요. year는 혀를 입천장에 바짝 올려 '(이)이어'처럼 시작하고, ear는 힘을 빼고 바로 '이어' 해요."
  },
  {
   "id": "w_wait",
   "title": "w 소리 (wait / eight)",
   "core": false,
   "tip": "'과자'를 '가자'로 말하는 것처럼, 짧은 '우' 소리(w)가 빠지기 쉬워요. w는 입술을 '우'처럼 동그랗게 모았다가 펴면서 시작해요. 입술이 앞으로 나와야 해요."
  },
  {
   "id": "i_ee",
   "title": "짧은 i 와 긴 ee",
   "core": false,
   "tip": "ship의 i는 힘을 빼고 짧게 '이'(거의 '에'에 가까워요). sheep의 ee는 입꼬리를 옆으로 당기고 길게 '이이—'."
  },
  {
   "id": "s_sh",
   "title": "s 와 sh (see / she)",
   "core": false,
   "tip": "한국어 '시'는 영어 she에 가까워요. see는 혀끝을 윗니 뒤에 두고 '스이'처럼 바람이 새게, she는 입술을 앞으로 쭉 내밀고 '쉬' 해요."
  },
  {
   "id": "u_o",
   "title": "u 와 o (cup / cop)",
   "core": false,
   "tip": "cup의 u는 입을 조금만 벌린 짧은 '어', cop의 o는 입을 크게 벌린 '아'예요. 한국어 '어'와 '아' 차이와 비슷해요."
  },
  {
   "id": "walk_work",
   "title": "walk 와 work",
   "core": false,
   "tip": "walk는 입을 세로로 크게 벌려 '워-크'(l은 소리 안 나요). work는 입을 거의 벌리지 않고 혀를 뒤로 말아 '워-r크' 해요."
  },
  {
   "id": "o_oh",
   "title": "o 와 oh (called / cold)",
   "core": false,
   "tip": "called의 o는 입을 크게 벌린 '아'에 가까운 소리로 끝까지 모양이 안 바뀌어요. cold의 o는 '오우'처럼 끝에서 입술을 오므려요."
  },
  {
   "id": "th_s",
   "title": "th 와 s",
   "core": false,
   "tip": "th는 혀끝을 윗니와 아랫니 사이로 살짝 내밀고 바람을 내보내요. s는 혀를 안에 두고 '스—' 해요."
  },
  {
   "id": "th_d",
   "title": "th 와 d (they / day)",
   "core": false,
   "tip": "they의 th는 혀끝을 이 사이에 살짝 물고 목을 울려요('드'가 아니라 '(th)데이'). day의 d는 혀끝을 윗잇몸에 붙였다가 떼요."
  },
  {
   "id": "ae_e",
   "title": "a 와 e (bad / bed)",
   "core": false,
   "tip": "bad의 a는 입을 크게 벌려 '애'에 가깝게, 조금 길게. bed의 e는 입을 덜 벌려 짧게 '에' 해요."
  },
  {
   "id": "end_dt",
   "title": "끝소리 (bag / back)",
   "core": false,
   "tip": "영어는 끝소리로 뜻이 갈려요. bag·card·eyes처럼 끝이 울리는 소리(g·d·z)면 앞 모음을 길게, back·cart·ice처럼 끝이 t·k·s면 짧게 뚝 끊어요."
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
   "a": "fill",
   "aKo": "채우다",
   "aEx": "Can you fill this out?",
   "b": "pill",
   "bKo": "알약",
   "bEx": "Take one pill twice a day."
  },
  {
   "g": "f_p",
   "a": "fee",
   "aKo": "요금, 수수료",
   "aEx": "Is there a fee?",
   "b": "pea",
   "bKo": "완두콩",
   "bEx": ""
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
   "a": "vet",
   "aKo": "수의사",
   "aEx": "I need to take my dog to the vet.",
   "b": "bet",
   "bKo": "내기, 장담하다",
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
   "aKo": "빛, 신호등",
   "aEx": "Turn left at the light.",
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
   "a": "late",
   "aKo": "늦은",
   "aEx": "Sorry, I'm late.",
   "b": "rate",
   "bKo": "요금, 환율",
   "bEx": "What's the exchange rate today?"
  },
  {
   "g": "l_r",
   "a": "fly",
   "aKo": "날다, 파리",
   "aEx": "",
   "b": "fry",
   "bKo": "튀기다",
   "bEx": "Can I get fries with that?"
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
   "g": "y_ear",
   "a": "year",
   "aKo": "해, 년",
   "aEx": "Happy New Year!",
   "b": "ear",
   "bKo": "귀",
   "bEx": "My ear hurts."
  },
  {
   "g": "y_ear",
   "a": "yeast",
   "aKo": "이스트, 효모",
   "aEx": "",
   "b": "east",
   "bKo": "동쪽",
   "bEx": "It's on the east side."
  },
  {
   "g": "y_ear",
   "a": "yolk",
   "aKo": "노른자",
   "aEx": "",
   "b": "oak",
   "bKo": "참나무",
   "bEx": ""
  },
  {
   "g": "y_ear",
   "a": "yell",
   "aKo": "소리치다",
   "aEx": "",
   "b": "L",
   "bKo": "알파벳 L",
   "bEx": "Is that size L?"
  },
  {
   "g": "w_wait",
   "a": "wait",
   "aKo": "기다리다",
   "aEx": "Please wait here.",
   "b": "eight",
   "bKo": "8, 여덟",
   "bEx": "It's eight dollars."
  },
  {
   "g": "w_wait",
   "a": "will",
   "aKo": "~할 거예요",
   "aEx": "I will call you back.",
   "b": "ill",
   "bKo": "아픈",
   "bEx": "I feel ill."
  },
  {
   "g": "w_wait",
   "a": "wear",
   "aKo": "입다",
   "aEx": "",
   "b": "air",
   "bKo": "공기",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "wall",
   "aKo": "벽",
   "aEx": "",
   "b": "all",
   "bKo": "전부",
   "bEx": "That's all, thank you."
  },
  {
   "g": "w_wait",
   "a": "wheat",
   "aKo": "밀",
   "aEx": "",
   "b": "eat",
   "bKo": "먹다",
   "bEx": "Let's eat!"
  },
  {
   "g": "w_wait",
   "a": "win",
   "aKo": "이기다",
   "aEx": "",
   "b": "in",
   "bKo": "안에",
   "bEx": "Come on in!"
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
   "a": "live",
   "aKo": "살다",
   "aEx": "I live in Toronto.",
   "b": "leave",
   "bKo": "떠나다, 남기다",
   "bEx": "Please leave a message."
  },
  {
   "g": "i_ee",
   "a": "chip",
   "aKo": "칩, 과자",
   "aEx": "",
   "b": "cheap",
   "bKo": "싼",
   "bEx": "It's so cheap!"
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
   "aEx": "Just a little bit.",
   "b": "beat",
   "bKo": "이기다, 두드리다",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "see",
   "aKo": "보다",
   "aEx": "See you later!",
   "b": "she",
   "bKo": "그녀",
   "bEx": "She is my daughter."
  },
  {
   "g": "s_sh",
   "a": "seat",
   "aKo": "자리",
   "aEx": "Is this seat taken?",
   "b": "sheet",
   "bKo": "종이 한 장, 시트",
   "bEx": "Can I get a sheet of paper?"
  },
  {
   "g": "s_sh",
   "a": "sell",
   "aKo": "팔다",
   "aEx": "Do you sell stamps?",
   "b": "shell",
   "bKo": "조개껍데기",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "save",
   "aKo": "아끼다, 저장하다",
   "aEx": "",
   "b": "shave",
   "bKo": "면도하다",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "sort",
   "aKo": "분류하다, 종류",
   "aEx": "",
   "b": "short",
   "bKo": "짧은",
   "bEx": "Just a short walk."
  },
  {
   "g": "s_sh",
   "a": "sue",
   "aKo": "고소하다",
   "aEx": "",
   "b": "shoe",
   "bKo": "신발",
   "bEx": "Do you have these shoes in size seven?"
  },
  {
   "g": "u_o",
   "a": "cup",
   "aKo": "컵, 잔",
   "aEx": "Can I get a cup of tea?",
   "b": "cop",
   "bKo": "경찰(구어)",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "luck",
   "aKo": "운",
   "aEx": "Good luck!",
   "b": "lock",
   "bKo": "잠그다",
   "bEx": "Please lock the door."
  },
  {
   "g": "u_o",
   "a": "hut",
   "aKo": "오두막",
   "aEx": "",
   "b": "hot",
   "bKo": "뜨거운, 더운",
   "bEx": "It's so hot today!"
  },
  {
   "g": "u_o",
   "a": "nut",
   "aKo": "견과류",
   "aEx": "Does this have nuts in it?",
   "b": "not",
   "bKo": "아니다",
   "bEx": "I'm not sure."
  },
  {
   "g": "u_o",
   "a": "duck",
   "aKo": "오리",
   "aEx": "",
   "b": "dock",
   "bKo": "부두",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "walk",
   "aKo": "걷다",
   "aEx": "It's a five-minute walk.",
   "b": "work",
   "bKo": "일하다, 직장",
   "bEx": "I'm going to work."
  },
  {
   "g": "walk_work",
   "a": "ward",
   "aKo": "병동",
   "aEx": "Which ward is she in?",
   "b": "word",
   "bKo": "단어",
   "bEx": "What does this word mean?"
  },
  {
   "g": "walk_work",
   "a": "warm",
   "aKo": "따뜻한",
   "aEx": "It's warm today.",
   "b": "worm",
   "bKo": "벌레",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "born",
   "aKo": "태어난",
   "aEx": "I was born in Korea.",
   "b": "burn",
   "bKo": "데다, 타다",
   "bEx": "Careful, don't burn yourself."
  },
  {
   "g": "walk_work",
   "a": "short",
   "aKo": "짧은",
   "aEx": "",
   "b": "shirt",
   "bKo": "셔츠",
   "bEx": "Do you have this shirt in blue?"
  },
  {
   "g": "o_oh",
   "a": "called",
   "aKo": "전화했다, 불렀다",
   "aEx": "I called you yesterday.",
   "b": "cold",
   "bKo": "추운, 감기",
   "bEx": "It's so cold today!"
  },
  {
   "g": "o_oh",
   "a": "bought",
   "aKo": "샀다",
   "aEx": "I bought it here.",
   "b": "boat",
   "bKo": "배",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "law",
   "aKo": "법",
   "aEx": "",
   "b": "low",
   "bKo": "낮은",
   "bEx": "The battery is low."
  },
  {
   "g": "o_oh",
   "a": "saw",
   "aKo": "봤다",
   "aEx": "I saw it online.",
   "b": "so",
   "bKo": "그래서, 아주",
   "bEx": "Thank you so much!"
  },
  {
   "g": "o_oh",
   "a": "ball",
   "aKo": "공",
   "aEx": "",
   "b": "bowl",
   "bKo": "그릇",
   "bEx": "Can I get a bowl of soup?"
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
   "aEx": "Open your mouth, please.",
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
   "g": "th_d",
   "a": "they",
   "aKo": "그들",
   "aEx": "They're closed today.",
   "b": "day",
   "bKo": "날, 하루",
   "bEx": "Have a nice day!"
  },
  {
   "g": "th_d",
   "a": "then",
   "aKo": "그다음, 그때",
   "aEx": "See you then!",
   "b": "den",
   "bKo": "굴, 작은 방",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "those",
   "aKo": "저것들",
   "aEx": "Can I see those?",
   "b": "doze",
   "bKo": "졸다",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "though",
   "aKo": "그래도",
   "aEx": "",
   "b": "dough",
   "bKo": "반죽",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "breathe",
   "aKo": "숨 쉬다",
   "aEx": "Take a deep breath and breathe out.",
   "b": "breed",
   "bKo": "품종",
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
   "a": "had",
   "aKo": "가졌다, 먹었다",
   "aEx": "I had a cold last week.",
   "b": "head",
   "bKo": "머리",
   "bEx": "My head hurts."
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
   "bKo": "설정하다, 세트",
   "bEx": ""
  },
  {
   "g": "end_dt",
   "a": "bag",
   "aKo": "봉투, 가방",
   "aEx": "Do you need a bag?",
   "b": "back",
   "bKo": "뒤, 다시",
   "bEx": "I'll be right back."
  },
  {
   "g": "end_dt",
   "a": "card",
   "aKo": "카드",
   "aEx": "Can I pay by card?",
   "b": "cart",
   "bKo": "카트",
   "bEx": "Where are the carts?"
  },
  {
   "g": "end_dt",
   "a": "eyes",
   "aKo": "눈(두 개)",
   "aEx": "My eyes are itchy.",
   "b": "ice",
   "bKo": "얼음",
   "bEx": "No ice, please."
  },
  {
   "g": "end_dt",
   "a": "need",
   "aKo": "필요하다",
   "aEx": "I need some help.",
   "b": "neat",
   "bKo": "깔끔한, 멋진",
   "bEx": ""
  },
  {
   "g": "end_dt",
   "a": "ride",
   "aKo": "타다",
   "aEx": "Do you need a ride?",
   "b": "write",
   "bKo": "쓰다",
   "bEx": "Could you write that down?"
  },
  {
   "g": "f_p",
   "a": "fat",
   "aKo": "뚱뚱한, 지방",
   "aEx": "",
   "b": "pat",
   "bKo": "토닥이다",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "fit",
   "aKo": "꼭 맞다",
   "aEx": "",
   "b": "pit",
   "bKo": "구덩이, 씨",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "fig",
   "aKo": "무화과",
   "aEx": "",
   "b": "pig",
   "bKo": "돼지",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "file",
   "aKo": "파일, 서류철",
   "aEx": "",
   "b": "pile",
   "bKo": "더미",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "fool",
   "aKo": "바보",
   "aEx": "",
   "b": "pool",
   "bKo": "수영장",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "four",
   "aKo": "넷",
   "aEx": "Table for four, please.",
   "b": "pour",
   "bKo": "붓다",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "fun",
   "aKo": "재미",
   "aEx": "That sounds fun!",
   "b": "pun",
   "bKo": "말장난",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "fear",
   "aKo": "두려움",
   "aEx": "",
   "b": "peer",
   "bKo": "동료, 응시하다",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "feel",
   "aKo": "느끼다",
   "aEx": "I don't feel well.",
   "b": "peel",
   "bKo": "껍질을 벗기다",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "fail",
   "aKo": "실패하다",
   "aEx": "",
   "b": "pail",
   "bKo": "양동이",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "fair",
   "aKo": "공정한",
   "aEx": "That's not fair.",
   "b": "pair",
   "bKo": "한 쌍",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "face",
   "aKo": "얼굴",
   "aEx": "",
   "b": "pace",
   "bKo": "걸음 속도",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "fact",
   "aKo": "사실",
   "aEx": "",
   "b": "pact",
   "bKo": "협정",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "found",
   "aKo": "찾았다",
   "aEx": "I found it.",
   "b": "pound",
   "bKo": "파운드, 두드리다",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "fond",
   "aKo": "좋아하는",
   "aEx": "",
   "b": "pond",
   "bKo": "연못",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "fees",
   "aKo": "요금들",
   "aEx": "",
   "b": "peas",
   "bKo": "완두콩들",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "beef",
   "aKo": "소고기",
   "aEx": "",
   "b": "beep",
   "bKo": "삐 소리",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "deaf",
   "aKo": "귀가 먼",
   "aEx": "",
   "b": "deep",
   "bKo": "깊은",
   "bEx": "Take a deep breath."
  },
  {
   "g": "f_p",
   "a": "reef",
   "aKo": "암초",
   "aEx": "",
   "b": "reap",
   "bKo": "거두다",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "chief",
   "aKo": "우두머리",
   "aEx": "",
   "b": "cheap",
   "bKo": "싼",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "laugh",
   "aKo": "웃다",
   "aEx": "Don't laugh!",
   "b": "lap",
   "bKo": "무릎",
   "bEx": "Sit on my lap."
  },
  {
   "g": "f_p",
   "a": "few",
   "aKo": "몇 개의",
   "aEx": "",
   "b": "pew",
   "bKo": "교회 긴 의자",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "cuff",
   "aKo": "소맷부리",
   "aEx": "",
   "b": "cup",
   "bKo": "컵",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "fort",
   "aKo": "요새",
   "aEx": "",
   "b": "port",
   "bKo": "항구",
   "bEx": ""
  },
  {
   "g": "f_p",
   "a": "firm",
   "aKo": "단단한, 회사",
   "aEx": "",
   "b": "perm",
   "bKo": "파마",
   "bEx": "I'd like a perm."
  },
  {
   "g": "v_b",
   "a": "vase",
   "aKo": "꽃병",
   "aEx": "",
   "b": "base",
   "bKo": "기초, 기지",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "vent",
   "aKo": "환기구",
   "aEx": "",
   "b": "bent",
   "bKo": "구부러진",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "volt",
   "aKo": "전압 단위",
   "aEx": "",
   "b": "bolt",
   "bKo": "볼트, 빗장",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "vend",
   "aKo": "판매하다",
   "aEx": "",
   "b": "bend",
   "bKo": "구부리다",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "veer",
   "aKo": "방향을 틀다",
   "aEx": "",
   "b": "beer",
   "bKo": "맥주",
   "bEx": "Can I get a beer?"
  },
  {
   "g": "v_b",
   "a": "vanish",
   "aKo": "사라지다",
   "aEx": "",
   "b": "banish",
   "bKo": "추방하다",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "vowel",
   "aKo": "모음",
   "aEx": "",
   "b": "bowel",
   "bKo": "장",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "vile",
   "aKo": "몹시 불쾌한",
   "aEx": "",
   "b": "bile",
   "bKo": "담즙",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "vain",
   "aKo": "헛된, 허영심 많은",
   "aEx": "",
   "b": "bane",
   "bKo": "골칫거리",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "vie",
   "aKo": "경쟁하다",
   "aEx": "",
   "b": "buy",
   "bKo": "사다",
   "bEx": "I'd like to buy this."
  },
  {
   "g": "v_b",
   "a": "vat",
   "aKo": "큰 통",
   "aEx": "",
   "b": "bat",
   "bKo": "방망이, 박쥐",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "veil",
   "aKo": "베일",
   "aEx": "",
   "b": "bail",
   "bKo": "보석금",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "vary",
   "aKo": "달라지다",
   "aEx": "",
   "b": "bury",
   "bKo": "묻다",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "marvel",
   "aKo": "경이로워하다",
   "aEx": "",
   "b": "marble",
   "bKo": "대리석, 구슬",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "revel",
   "aKo": "흥청거리다",
   "aEx": "",
   "b": "rebel",
   "bKo": "반역자",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "rove",
   "aKo": "돌아다니다",
   "aEx": "",
   "b": "robe",
   "bKo": "가운",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "novel",
   "aKo": "소설",
   "aEx": "It's a good novel.",
   "b": "noble",
   "bKo": "고귀한",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "rover",
   "aKo": "방랑자",
   "aEx": "",
   "b": "robber",
   "bKo": "강도",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "savor",
   "aKo": "음미하다",
   "aEx": "",
   "b": "saber",
   "bKo": "사브르(칼)",
   "bEx": ""
  },
  {
   "g": "v_b",
   "a": "dove",
   "aKo": "비둘기",
   "aEx": "",
   "b": "dub",
   "bKo": "더빙하다",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "lime",
   "aKo": "라임",
   "aEx": "",
   "b": "rhyme",
   "bKo": "운율",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "lice",
   "aKo": "이",
   "aEx": "",
   "b": "rice",
   "bKo": "쌀",
   "bEx": "Can I get rice with that?"
  },
  {
   "g": "l_r",
   "a": "lamp",
   "aKo": "램프",
   "aEx": "Turn on the lamp.",
   "b": "ramp",
   "bKo": "경사로",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "lane",
   "aKo": "차선, 좁은 길",
   "aEx": "",
   "b": "rain",
   "bKo": "비",
   "bEx": "Is it going to rain?"
  },
  {
   "g": "l_r",
   "a": "law",
   "aKo": "법",
   "aEx": "",
   "b": "raw",
   "bKo": "날것의",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "lace",
   "aKo": "레이스",
   "aEx": "",
   "b": "race",
   "bKo": "경주",
   "bEx": "It's a long race."
  },
  {
   "g": "l_r",
   "a": "lap",
   "aKo": "무릎",
   "aEx": "Sit on my lap.",
   "b": "rap",
   "bKo": "랩, 두드리다",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "lent",
   "aKo": "빌려줬다",
   "aEx": "",
   "b": "rent",
   "bKo": "집세",
   "bEx": "How much is the rent?"
  },
  {
   "g": "l_r",
   "a": "lip",
   "aKo": "입술",
   "aEx": "",
   "b": "rip",
   "bKo": "찢다",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "load",
   "aKo": "짐",
   "aEx": "",
   "b": "road",
   "bKo": "길",
   "bEx": "Is this the right road?"
  },
  {
   "g": "l_r",
   "a": "lot",
   "aKo": "많음",
   "aEx": "Thanks a lot!",
   "b": "rot",
   "bKo": "썩다",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "loyal",
   "aKo": "충실한",
   "aEx": "",
   "b": "royal",
   "bKo": "왕실의",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "link",
   "aKo": "연결",
   "aEx": "",
   "b": "rink",
   "bKo": "스케이트장",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "clown",
   "aKo": "광대",
   "aEx": "",
   "b": "crown",
   "bKo": "왕관",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "cloud",
   "aKo": "구름",
   "aEx": "",
   "b": "crowd",
   "bKo": "군중",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "glow",
   "aKo": "빛나다",
   "aEx": "",
   "b": "grow",
   "bKo": "자라다",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "blush",
   "aKo": "얼굴 붉히다",
   "aEx": "",
   "b": "brush",
   "bKo": "솔",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "flame",
   "aKo": "불꽃",
   "aEx": "",
   "b": "frame",
   "bKo": "틀",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "flee",
   "aKo": "달아나다",
   "aEx": "",
   "b": "free",
   "bKo": "무료",
   "bEx": "Is it free?"
  },
  {
   "g": "l_r",
   "a": "tile",
   "aKo": "타일",
   "aEx": "",
   "b": "tire",
   "bKo": "타이어",
   "bEx": "I have a flat tire."
  },
  {
   "g": "l_r",
   "a": "towel",
   "aKo": "수건",
   "aEx": "Can I get a towel?",
   "b": "tower",
   "bKo": "탑",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "file",
   "aKo": "파일",
   "aEx": "",
   "b": "fire",
   "bKo": "불",
   "bEx": "Call 911, there's a fire!"
  },
  {
   "g": "l_r",
   "a": "wall",
   "aKo": "벽",
   "aEx": "It's on the wall.",
   "b": "war",
   "bKo": "전쟁",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "steal",
   "aKo": "훔치다",
   "aEx": "",
   "b": "steer",
   "bKo": "조종하다",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "feel",
   "aKo": "느끼다",
   "aEx": "I don't feel well.",
   "b": "fear",
   "bKo": "두려움",
   "bEx": ""
  },
  {
   "g": "l_r",
   "a": "pole",
   "aKo": "막대, 극",
   "aEx": "",
   "b": "pore",
   "bKo": "모공",
   "bEx": ""
  },
  {
   "g": "y_ear",
   "a": "yearn",
   "aKo": "갈망하다",
   "aEx": "",
   "b": "earn",
   "bKo": "벌다",
   "bEx": ""
  },
  {
   "g": "y_ear",
   "a": "yore",
   "aKo": "옛날",
   "aEx": "",
   "b": "oar",
   "bKo": "노",
   "bEx": ""
  },
  {
   "g": "y_ear",
   "a": "Yale",
   "aKo": "예일대",
   "aEx": "",
   "b": "ail",
   "bKo": "아프게 하다",
   "bEx": ""
  },
  {
   "g": "y_ear",
   "a": "yearly",
   "aKo": "매년의",
   "aEx": "",
   "b": "early",
   "bKo": "이른",
   "bEx": "I'm early."
  },
  {
   "g": "y_ear",
   "a": "years",
   "aKo": "해들",
   "aEx": "",
   "b": "ears",
   "bKo": "귀들",
   "bEx": ""
  },
  {
   "g": "y_ear",
   "a": "year",
   "aKo": "해",
   "aEx": "",
   "b": "hear",
   "bKo": "듣다",
   "bEx": "I can't hear you."
  },
  {
   "g": "y_ear",
   "a": "yell",
   "aKo": "소리치다",
   "aEx": "",
   "b": "hell",
   "bKo": "지옥",
   "bEx": ""
  },
  {
   "g": "y_ear",
   "a": "yellow",
   "aKo": "노란",
   "aEx": "The yellow one, please.",
   "b": "hello",
   "bKo": "안녕",
   "bEx": "Hello, how are you?"
  },
  {
   "g": "y_ear",
   "a": "yard",
   "aKo": "마당",
   "aEx": "",
   "b": "hard",
   "bKo": "단단한, 어려운",
   "bEx": "It's too hard."
  },
  {
   "g": "y_ear",
   "a": "young",
   "aKo": "어린",
   "aEx": "",
   "b": "hung",
   "bKo": "걸었다",
   "bEx": ""
  },
  {
   "g": "y_ear",
   "a": "yum",
   "aKo": "맛있는",
   "aEx": "",
   "b": "hum",
   "bKo": "흥얼거리다",
   "bEx": ""
  },
  {
   "g": "y_ear",
   "a": "yield",
   "aKo": "양보하다",
   "aEx": "",
   "b": "heel",
   "bKo": "발뒤꿈치",
   "bEx": ""
  },
  {
   "g": "y_ear",
   "a": "yam",
   "aKo": "얌, 고구마",
   "aEx": "",
   "b": "jam",
   "bKo": "잼",
   "bEx": "Can I get some jam?"
  },
  {
   "g": "y_ear",
   "a": "yet",
   "aKo": "아직",
   "aEx": "",
   "b": "jet",
   "bKo": "제트기",
   "bEx": ""
  },
  {
   "g": "y_ear",
   "a": "yoke",
   "aKo": "멍에",
   "aEx": "",
   "b": "joke",
   "bKo": "농담",
   "bEx": ""
  },
  {
   "g": "y_ear",
   "a": "yaw",
   "aKo": "흔들리다",
   "aEx": "",
   "b": "jaw",
   "bKo": "턱",
   "bEx": ""
  },
  {
   "g": "y_ear",
   "a": "yen",
   "aKo": "엔(일본 화폐)",
   "aEx": "",
   "b": "end",
   "bKo": "끝",
   "bEx": "That's the end."
  },
  {
   "g": "y_ear",
   "a": "yacht",
   "aKo": "요트",
   "aEx": "",
   "b": "hot",
   "bKo": "뜨거운",
   "bEx": "It's so hot today!"
  },
  {
   "g": "y_ear",
   "a": "yelp",
   "aKo": "비명",
   "aEx": "",
   "b": "help",
   "bKo": "도움",
   "bEx": "I need some help."
  },
  {
   "g": "y_ear",
   "a": "yip",
   "aKo": "짖다",
   "aEx": "",
   "b": "hip",
   "bKo": "엉덩이",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "quick",
   "aKo": "빠른",
   "aEx": "Just a quick question.",
   "b": "kick",
   "bKo": "차다",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "quit",
   "aKo": "그만두다",
   "aEx": "",
   "b": "kit",
   "bKo": "도구 세트",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "queen",
   "aKo": "여왕",
   "aEx": "",
   "b": "keen",
   "bKo": "열망하는",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "quote",
   "aKo": "인용, 견적",
   "aEx": "",
   "b": "coat",
   "bKo": "코트",
   "bEx": "Can I take your coat?"
  },
  {
   "g": "w_wait",
   "a": "quart",
   "aKo": "쿼트(액체 단위)",
   "aEx": "",
   "b": "court",
   "bKo": "법정, 코트",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "quake",
   "aKo": "지진",
   "aEx": "",
   "b": "cake",
   "bKo": "케이크",
   "bEx": "A piece of cake, please."
  },
  {
   "g": "w_wait",
   "a": "quite",
   "aKo": "꽤",
   "aEx": "",
   "b": "kite",
   "bKo": "연",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "quilt",
   "aKo": "누비 이불",
   "aEx": "",
   "b": "kilt",
   "bKo": "킬트(치마)",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "square",
   "aKo": "정사각형, 광장",
   "aEx": "",
   "b": "scare",
   "bKo": "겁주다",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "twin",
   "aKo": "쌍둥이",
   "aEx": "",
   "b": "tin",
   "bKo": "주석, 통조림통",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "swing",
   "aKo": "그네, 흔들다",
   "aEx": "",
   "b": "sing",
   "bKo": "노래하다",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "sweet",
   "aKo": "달콤한",
   "aEx": "Is it too sweet?",
   "b": "seat",
   "bKo": "자리",
   "bEx": "Is this seat taken?"
  },
  {
   "g": "w_wait",
   "a": "swell",
   "aKo": "부풀다",
   "aEx": "",
   "b": "sell",
   "bKo": "팔다",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "wake",
   "aKo": "깨다",
   "aEx": "What time do I wake up?",
   "b": "ache",
   "bKo": "아프다",
   "bEx": "I have a stomachache."
  },
  {
   "g": "w_wait",
   "a": "wage",
   "aKo": "임금",
   "aEx": "",
   "b": "age",
   "bKo": "나이",
   "bEx": "What's your age?"
  },
  {
   "g": "w_wait",
   "a": "wail",
   "aKo": "울부짖다",
   "aEx": "",
   "b": "ale",
   "bKo": "에일 맥주",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "wedge",
   "aKo": "쐐기",
   "aEx": "",
   "b": "edge",
   "bKo": "가장자리",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "wit",
   "aKo": "재치",
   "aEx": "",
   "b": "it",
   "bKo": "그것",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "wink",
   "aKo": "윙크",
   "aEx": "",
   "b": "ink",
   "bKo": "잉크",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "wore",
   "aKo": "입었다",
   "aEx": "",
   "b": "or",
   "bKo": "또는",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "wax",
   "aKo": "왁스",
   "aEx": "",
   "b": "ax",
   "bKo": "도끼",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "wheel",
   "aKo": "바퀴",
   "aEx": "It's a big wheel.",
   "b": "eel",
   "bKo": "뱀장어",
   "bEx": ""
  },
  {
   "g": "w_wait",
   "a": "wise",
   "aKo": "현명한",
   "aEx": "",
   "b": "eyes",
   "bKo": "눈들",
   "bEx": "My eyes are tired."
  },
  {
   "g": "w_wait",
   "a": "woe",
   "aKo": "슬픔",
   "aEx": "",
   "b": "oh",
   "bKo": "아",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "bin",
   "aKo": "통",
   "aEx": "",
   "b": "bean",
   "bKo": "콩",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "his",
   "aKo": "그의",
   "aEx": "",
   "b": "he's",
   "bKo": "그는 ~이다",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "it",
   "aKo": "그것",
   "aEx": "",
   "b": "eat",
   "bKo": "먹다",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "mill",
   "aKo": "방앗간",
   "aEx": "",
   "b": "meal",
   "bKo": "식사",
   "bEx": "Is a meal included?"
  },
  {
   "g": "i_ee",
   "a": "hill",
   "aKo": "언덕",
   "aEx": "",
   "b": "heal",
   "bKo": "낫다",
   "bEx": "It will heal soon."
  },
  {
   "g": "i_ee",
   "a": "rich",
   "aKo": "부유한",
   "aEx": "",
   "b": "reach",
   "bKo": "닿다",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "slip",
   "aKo": "미끄러지다",
   "aEx": "",
   "b": "sleep",
   "bKo": "자다",
   "bEx": "I can't sleep."
  },
  {
   "g": "i_ee",
   "a": "still",
   "aKo": "아직",
   "aEx": "",
   "b": "steel",
   "bKo": "강철",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "wick",
   "aKo": "심지",
   "aEx": "",
   "b": "week",
   "bKo": "주",
   "bEx": "See you next week."
  },
  {
   "g": "i_ee",
   "a": "pick",
   "aKo": "고르다",
   "aEx": "Pick one, please.",
   "b": "peak",
   "bKo": "정상",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "lick",
   "aKo": "핥다",
   "aEx": "",
   "b": "leak",
   "bKo": "새다",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "grin",
   "aKo": "활짝 웃다",
   "aEx": "",
   "b": "green",
   "bKo": "초록",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "dip",
   "aKo": "살짝 담그다",
   "aEx": "",
   "b": "deep",
   "bKo": "깊은",
   "bEx": "Take a deep breath."
  },
  {
   "g": "i_ee",
   "a": "fit",
   "aKo": "꼭 맞다",
   "aEx": "",
   "b": "feet",
   "bKo": "발",
   "bEx": "My feet hurt."
  },
  {
   "g": "i_ee",
   "a": "knit",
   "aKo": "뜨개질하다",
   "aEx": "",
   "b": "neat",
   "bKo": "깔끔한",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "chick",
   "aKo": "병아리",
   "aEx": "",
   "b": "cheek",
   "bKo": "뺨",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "sin",
   "aKo": "죄",
   "aEx": "",
   "b": "seen",
   "bKo": "본",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "tin",
   "aKo": "통조림통",
   "aEx": "",
   "b": "teen",
   "bKo": "십대",
   "bEx": "She's a teenager."
  },
  {
   "g": "i_ee",
   "a": "sick",
   "aKo": "아픈",
   "aEx": "I feel sick.",
   "b": "seek",
   "bKo": "찾다",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "grid",
   "aKo": "격자",
   "aEx": "",
   "b": "greed",
   "bKo": "탐욕",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "fist",
   "aKo": "주먹",
   "aEx": "",
   "b": "feast",
   "bKo": "잔치",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "list",
   "aKo": "목록",
   "aEx": "Is it on the list?",
   "b": "least",
   "bKo": "가장 적은",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "bid",
   "aKo": "입찰",
   "aEx": "",
   "b": "bead",
   "bKo": "구슬",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "rip",
   "aKo": "찢다",
   "aEx": "",
   "b": "reap",
   "bKo": "거두다",
   "bEx": ""
  },
  {
   "g": "i_ee",
   "a": "mitt",
   "aKo": "장갑",
   "aEx": "",
   "b": "meet",
   "bKo": "만나다",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "sip",
   "aKo": "홀짝이다",
   "aEx": "",
   "b": "ship",
   "bKo": "배",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "sin",
   "aKo": "죄",
   "aEx": "",
   "b": "shin",
   "bKo": "정강이",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "sock",
   "aKo": "양말",
   "aEx": "",
   "b": "shock",
   "bKo": "충격",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "sack",
   "aKo": "자루",
   "aEx": "",
   "b": "shack",
   "bKo": "오두막",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "sore",
   "aKo": "아픈",
   "aEx": "My throat is sore.",
   "b": "shore",
   "bKo": "해안",
   "bEx": "Let's walk along the shore."
  },
  {
   "g": "s_sh",
   "a": "so",
   "aKo": "그래서",
   "aEx": "",
   "b": "show",
   "bKo": "보여 주다",
   "bEx": "Can you show me?"
  },
  {
   "g": "s_sh",
   "a": "sigh",
   "aKo": "한숨",
   "aEx": "",
   "b": "shy",
   "bKo": "수줍은",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "self",
   "aKo": "자기",
   "aEx": "",
   "b": "shelf",
   "bKo": "선반",
   "bEx": "Is it on the shelf?"
  },
  {
   "g": "s_sh",
   "a": "sine",
   "aKo": "사인(수학)",
   "aEx": "",
   "b": "shine",
   "bKo": "빛나다",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "sake",
   "aKo": "~를 위해",
   "aEx": "",
   "b": "shake",
   "bKo": "흔들다",
   "bEx": "Let's shake hands."
  },
  {
   "g": "s_sh",
   "a": "said",
   "aKo": "말했다",
   "aEx": "",
   "b": "shed",
   "bKo": "헛간",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "sear",
   "aKo": "그슬리다",
   "aEx": "",
   "b": "sheer",
   "bKo": "완전한, 얇은",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "sift",
   "aKo": "체로 치다",
   "aEx": "",
   "b": "shift",
   "bKo": "교대 근무, 이동",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "class",
   "aKo": "수업",
   "aEx": "",
   "b": "clash",
   "bKo": "충돌",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "cast",
   "aKo": "던지다",
   "aEx": "",
   "b": "cash",
   "bKo": "현금",
   "bEx": "Do you take cash?"
  },
  {
   "g": "s_sh",
   "a": "mess",
   "aKo": "엉망",
   "aEx": "Sorry about the mess.",
   "b": "mesh",
   "bKo": "그물망",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "wise",
   "aKo": "현명한",
   "aEx": "",
   "b": "wish",
   "bKo": "바라다",
   "bEx": "I wish you the best."
  },
  {
   "g": "s_sh",
   "a": "gas",
   "aKo": "가스",
   "aEx": "Where's the gas station?",
   "b": "gash",
   "bKo": "깊은 상처",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "mass",
   "aKo": "덩어리",
   "aEx": "",
   "b": "mash",
   "bKo": "으깨다",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "lass",
   "aKo": "소녀",
   "aEx": "",
   "b": "lash",
   "bKo": "채찍, 속눈썹",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "sun",
   "aKo": "해",
   "aEx": "",
   "b": "shun",
   "bKo": "피하다",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "seen",
   "aKo": "본",
   "aEx": "",
   "b": "sheen",
   "bKo": "광택",
   "bEx": ""
  },
  {
   "g": "s_sh",
   "a": "suit",
   "aKo": "정장",
   "aEx": "Nice suit!",
   "b": "shoot",
   "bKo": "쏘다",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "cut",
   "aKo": "자르다",
   "aEx": "",
   "b": "cot",
   "bKo": "간이침대",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "bus",
   "aKo": "버스",
   "aEx": "Which bus goes downtown?",
   "b": "boss",
   "bKo": "상사",
   "bEx": "I have to call my boss."
  },
  {
   "g": "u_o",
   "a": "bug",
   "aKo": "벌레",
   "aEx": "",
   "b": "bog",
   "bKo": "늪",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "but",
   "aKo": "하지만",
   "aEx": "",
   "b": "bot",
   "bKo": "봇",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "cub",
   "aKo": "새끼 곰",
   "aEx": "",
   "b": "cob",
   "bKo": "옥수수 속대",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "gut",
   "aKo": "장",
   "aEx": "",
   "b": "got",
   "bKo": "얻었다",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "hug",
   "aKo": "포옹",
   "aEx": "",
   "b": "hog",
   "bKo": "돼지",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "mud",
   "aKo": "진흙",
   "aEx": "",
   "b": "mod",
   "bKo": "모드",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "pup",
   "aKo": "강아지",
   "aEx": "",
   "b": "pop",
   "bKo": "팝, 펑 소리",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "putt",
   "aKo": "퍼팅",
   "aEx": "",
   "b": "pot",
   "bKo": "냄비",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "rub",
   "aKo": "문지르다",
   "aEx": "",
   "b": "rob",
   "bKo": "강도질하다",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "shut",
   "aKo": "닫다",
   "aEx": "",
   "b": "shot",
   "bKo": "주사, 한 방",
   "bEx": "I got a flu shot."
  },
  {
   "g": "u_o",
   "a": "sub",
   "aKo": "샌드위치, 대체",
   "aEx": "",
   "b": "sob",
   "bKo": "흐느끼다",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "suck",
   "aKo": "빨다",
   "aEx": "",
   "b": "sock",
   "bKo": "양말",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "stuck",
   "aKo": "갇힌",
   "aEx": "",
   "b": "stock",
   "bKo": "재고, 주식",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "dug",
   "aKo": "팠다",
   "aEx": "",
   "b": "dog",
   "bKo": "개",
   "bEx": "Can I bring my dog?"
  },
  {
   "g": "u_o",
   "a": "lunch",
   "aKo": "점심",
   "aEx": "What's for lunch?",
   "b": "launch",
   "bKo": "시작하다, 발사",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "cluck",
   "aKo": "꼬꼬댁",
   "aEx": "",
   "b": "clock",
   "bKo": "시계",
   "bEx": "What's wrong with the clock?"
  },
  {
   "g": "u_o",
   "a": "dull",
   "aKo": "무딘",
   "aEx": "",
   "b": "doll",
   "bKo": "인형",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "gun",
   "aKo": "총",
   "aEx": "",
   "b": "gone",
   "bKo": "가 버린",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "color",
   "aKo": "색",
   "aEx": "What color is it?",
   "b": "collar",
   "bKo": "옷깃",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "bucks",
   "aKo": "달러(속어)",
   "aEx": "",
   "b": "box",
   "bKo": "상자",
   "bEx": "Can I get a box for this?"
  },
  {
   "g": "u_o",
   "a": "ducks",
   "aKo": "오리들",
   "aEx": "",
   "b": "docks",
   "bKo": "부두들",
   "bEx": ""
  },
  {
   "g": "u_o",
   "a": "cuss",
   "aKo": "욕하다",
   "aEx": "",
   "b": "cost",
   "bKo": "비용",
   "bEx": "How much does it cost?"
  },
  {
   "g": "walk_work",
   "a": "pause",
   "aKo": "잠깐 멈춤",
   "aEx": "",
   "b": "purse",
   "bKo": "지갑",
   "bEx": "I lost my purse."
  },
  {
   "g": "walk_work",
   "a": "pork",
   "aKo": "돼지고기",
   "aEx": "",
   "b": "perk",
   "bKo": "혜택",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "cord",
   "aKo": "줄, 코드",
   "aEx": "",
   "b": "curd",
   "bKo": "응유",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "horse",
   "aKo": "말",
   "aEx": "",
   "b": "hearse",
   "bKo": "영구차",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "torn",
   "aKo": "찢어진",
   "aEx": "",
   "b": "turn",
   "bKo": "돌다",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "sport",
   "aKo": "스포츠",
   "aEx": "",
   "b": "spurt",
   "bKo": "분출",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "hoard",
   "aKo": "비축하다",
   "aEx": "",
   "b": "heard",
   "bKo": "들었다",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "board",
   "aKo": "판자, 탑승하다",
   "aEx": "",
   "b": "bird",
   "bKo": "새",
   "bEx": "Look at that bird!"
  },
  {
   "g": "walk_work",
   "a": "form",
   "aKo": "양식",
   "aEx": "Do I need to fill out a form?",
   "b": "firm",
   "bKo": "회사, 단단한",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "course",
   "aKo": "코스, 과정",
   "aEx": "Of course!",
   "b": "curse",
   "bKo": "저주",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "shorts",
   "aKo": "반바지",
   "aEx": "",
   "b": "shirts",
   "bKo": "셔츠들",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "fawn",
   "aKo": "새끼 사슴",
   "aEx": "",
   "b": "fern",
   "bKo": "고사리",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "call",
   "aKo": "부르다",
   "aEx": "Please call me back.",
   "b": "curl",
   "bKo": "곱슬곱슬하게 하다",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "gall",
   "aKo": "뻔뻔함",
   "aEx": "",
   "b": "girl",
   "bKo": "소녀",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "lawn",
   "aKo": "잔디밭",
   "aEx": "",
   "b": "learn",
   "bKo": "배우다",
   "bEx": "I want to learn English."
  },
  {
   "g": "walk_work",
   "a": "store",
   "aKo": "가게",
   "aEx": "Is the store open?",
   "b": "stir",
   "bKo": "젓다",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "for",
   "aKo": "~를 위해",
   "aEx": "This is for you.",
   "b": "fur",
   "bKo": "털",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "sore",
   "aKo": "아픈",
   "aEx": "My throat is sore.",
   "b": "sir",
   "bKo": "선생님",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "war",
   "aKo": "전쟁",
   "aEx": "",
   "b": "were",
   "bKo": "~였다",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "lord",
   "aKo": "주인, 주님",
   "aEx": "",
   "b": "learned",
   "bKo": "배운",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "Paul",
   "aKo": "폴(이름)",
   "aEx": "",
   "b": "pearl",
   "bKo": "진주",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "haul",
   "aKo": "끌다",
   "aEx": "",
   "b": "hurl",
   "bKo": "내던지다",
   "bEx": ""
  },
  {
   "g": "walk_work",
   "a": "yawn",
   "aKo": "하품",
   "aEx": "",
   "b": "yearn",
   "bKo": "갈망하다",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "caught",
   "aKo": "잡았다",
   "aEx": "",
   "b": "coat",
   "bKo": "코트",
   "bEx": "Can I take your coat?"
  },
  {
   "g": "o_oh",
   "a": "ought",
   "aKo": "~해야 한다",
   "aEx": "",
   "b": "oat",
   "bKo": "귀리",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "pause",
   "aKo": "잠깐 멈춤",
   "aEx": "",
   "b": "pose",
   "bKo": "자세",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "flaw",
   "aKo": "결함",
   "aEx": "",
   "b": "flow",
   "bKo": "흐르다",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "gnaw",
   "aKo": "갉다",
   "aEx": "",
   "b": "no",
   "bKo": "아니요",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "tall",
   "aKo": "키가 큰",
   "aEx": "",
   "b": "toll",
   "bKo": "통행료",
   "bEx": "Is there a toll?"
  },
  {
   "g": "o_oh",
   "a": "fall",
   "aKo": "가을, 떨어지다",
   "aEx": "",
   "b": "foal",
   "bKo": "망아지",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "hall",
   "aKo": "복도",
   "aEx": "",
   "b": "hole",
   "bKo": "구멍",
   "bEx": "There's a hole here."
  },
  {
   "g": "o_oh",
   "a": "mall",
   "aKo": "쇼핑몰",
   "aEx": "Is there a mall nearby?",
   "b": "mole",
   "bKo": "점, 두더지",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "stall",
   "aKo": "가판대",
   "aEx": "",
   "b": "stole",
   "bKo": "훔쳤다",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "wall",
   "aKo": "벽",
   "aEx": "It's on the wall.",
   "b": "whole",
   "bKo": "전체의",
   "bEx": "The whole thing, please."
  },
  {
   "g": "o_oh",
   "a": "call",
   "aKo": "전화하다",
   "aEx": "Please call me back.",
   "b": "coal",
   "bKo": "석탄",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "gall",
   "aKo": "뻔뻔함",
   "aEx": "",
   "b": "goal",
   "bKo": "목표",
   "bEx": "What's your goal?"
  },
  {
   "g": "o_oh",
   "a": "lawn",
   "aKo": "잔디",
   "aEx": "",
   "b": "loan",
   "bKo": "대출",
   "bEx": "I'd like to apply for a loan."
  },
  {
   "g": "o_oh",
   "a": "sauce",
   "aKo": "소스",
   "aEx": "",
   "b": "sews",
   "bKo": "바느질한다",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "taught",
   "aKo": "가르쳤다",
   "aEx": "",
   "b": "tote",
   "bKo": "들고 다니다",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "chalk",
   "aKo": "분필",
   "aEx": "",
   "b": "choke",
   "bKo": "질식하다",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "walk",
   "aKo": "걷다",
   "aEx": "It's a five-minute walk.",
   "b": "woke",
   "bKo": "깼다",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "stalk",
   "aKo": "줄기",
   "aEx": "",
   "b": "stoke",
   "bKo": "불을 지피다",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "cord",
   "aKo": "줄",
   "aEx": "",
   "b": "code",
   "bKo": "암호",
   "bEx": "What's the code?"
  },
  {
   "g": "o_oh",
   "a": "born",
   "aKo": "태어난",
   "aEx": "",
   "b": "bone",
   "bKo": "뼈",
   "bEx": "I think I broke a bone."
  },
  {
   "g": "o_oh",
   "a": "corn",
   "aKo": "옥수수",
   "aEx": "Can I get corn with that?",
   "b": "cone",
   "bKo": "원뿔",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "fork",
   "aKo": "포크",
   "aEx": "",
   "b": "folk",
   "bKo": "사람들, 민속",
   "bEx": ""
  },
  {
   "g": "o_oh",
   "a": "lord",
   "aKo": "주인, 주님",
   "aEx": "",
   "b": "load",
   "bKo": "짐",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "thick",
   "aKo": "두꺼운",
   "aEx": "Is it too thick?",
   "b": "sick",
   "bKo": "아픈",
   "bEx": "I feel sick."
  },
  {
   "g": "th_s",
   "a": "thing",
   "aKo": "것",
   "aEx": "What is this thing?",
   "b": "sing",
   "bKo": "노래하다",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "thumb",
   "aKo": "엄지",
   "aEx": "",
   "b": "sum",
   "bKo": "합계",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "theme",
   "aKo": "주제",
   "aEx": "",
   "b": "seem",
   "bKo": "~처럼 보이다",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "thin",
   "aKo": "얇은",
   "aEx": "",
   "b": "sin",
   "bKo": "죄",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "thought",
   "aKo": "생각했다",
   "aEx": "",
   "b": "sought",
   "bKo": "찾았다",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "thaw",
   "aKo": "녹다",
   "aEx": "",
   "b": "saw",
   "bKo": "보았다",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "thigh",
   "aKo": "허벅지",
   "aEx": "",
   "b": "sigh",
   "bKo": "한숨",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "math",
   "aKo": "수학",
   "aEx": "",
   "b": "mass",
   "bKo": "덩어리",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "faith",
   "aKo": "믿음",
   "aEx": "Have some faith.",
   "b": "face",
   "bKo": "얼굴",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "worth",
   "aKo": "가치",
   "aEx": "Is it worth it?",
   "b": "worse",
   "bKo": "더 나쁜",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "moth",
   "aKo": "나방",
   "aEx": "",
   "b": "moss",
   "bKo": "이끼",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "myth",
   "aKo": "신화",
   "aEx": "",
   "b": "miss",
   "bKo": "놓치다, 그리워하다",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "truth",
   "aKo": "진실",
   "aEx": "That's the truth.",
   "b": "truce",
   "bKo": "휴전",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "booth",
   "aKo": "부스",
   "aEx": "",
   "b": "boost",
   "bKo": "북돋우다",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "tenth",
   "aKo": "열 번째",
   "aEx": "",
   "b": "tense",
   "bKo": "긴장한",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "thorn",
   "aKo": "가시",
   "aEx": "",
   "b": "sworn",
   "bKo": "맹세한",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "thinks",
   "aKo": "생각한다",
   "aEx": "",
   "b": "sinks",
   "bKo": "가라앉는다",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "both",
   "aKo": "둘 다",
   "aEx": "Both, please.",
   "b": "boast",
   "bKo": "자랑하다",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "thickness",
   "aKo": "두께",
   "aEx": "",
   "b": "sickness",
   "bKo": "병",
   "bEx": ""
  },
  {
   "g": "th_s",
   "a": "thinner",
   "aKo": "더 얇은",
   "aEx": "",
   "b": "sinner",
   "bKo": "죄인",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "there",
   "aKo": "저기",
   "aEx": "Is there a washroom?",
   "b": "dare",
   "bKo": "감히 ~하다",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "thy",
   "aKo": "너의",
   "aEx": "",
   "b": "die",
   "bKo": "죽다",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "other",
   "aKo": "다른",
   "aEx": "Do you have any other size?",
   "b": "udder",
   "bKo": "젖통",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "father",
   "aKo": "아버지",
   "aEx": "This is my father.",
   "b": "fodder",
   "bKo": "사료",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "wither",
   "aKo": "시들다",
   "aEx": "",
   "b": "wider",
   "bKo": "더 넓은",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "lather",
   "aKo": "거품",
   "aEx": "",
   "b": "ladder",
   "bKo": "사다리",
   "bEx": "Do you have a ladder?"
  },
  {
   "g": "th_d",
   "a": "loathe",
   "aKo": "몹시 싫어하다",
   "aEx": "",
   "b": "load",
   "bKo": "짐",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "worthy",
   "aKo": "가치 있는",
   "aEx": "",
   "b": "wordy",
   "bKo": "장황한",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "breathing",
   "aKo": "호흡",
   "aEx": "",
   "b": "breeding",
   "bKo": "번식",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "weather",
   "aKo": "날씨",
   "aEx": "How's the weather today?",
   "b": "wetter",
   "bKo": "더 젖은",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "leather",
   "aKo": "가죽",
   "aEx": "Is this leather?",
   "b": "letter",
   "bKo": "편지",
   "bEx": "I got a letter."
  },
  {
   "g": "th_d",
   "a": "feather",
   "aKo": "깃털",
   "aEx": "",
   "b": "fetter",
   "bKo": "족쇄",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "thread",
   "aKo": "실",
   "aEx": "Do you have a needle and thread?",
   "b": "dread",
   "bKo": "두려움",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "thrill",
   "aKo": "짜릿함",
   "aEx": "",
   "b": "drill",
   "bKo": "드릴, 훈련",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "thin",
   "aKo": "얇은",
   "aEx": "",
   "b": "din",
   "bKo": "소음",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "thing",
   "aKo": "것",
   "aEx": "What is this thing?",
   "b": "ding",
   "bKo": "땡 소리",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "thump",
   "aKo": "쿵",
   "aEx": "",
   "b": "dump",
   "bKo": "버리다",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "thud",
   "aKo": "쿵 소리",
   "aEx": "",
   "b": "dud",
   "bKo": "불량품",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "thumb",
   "aKo": "엄지",
   "aEx": "",
   "b": "dumb",
   "bKo": "말 못 하는, 멍청한",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "theme",
   "aKo": "주제",
   "aEx": "",
   "b": "deem",
   "bKo": "~로 여기다",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "bath",
   "aKo": "목욕",
   "aEx": "I need to take a bath.",
   "b": "bad",
   "bKo": "나쁜",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "path",
   "aKo": "길",
   "aEx": "Is there a path?",
   "b": "pad",
   "bKo": "패드",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "math",
   "aKo": "수학",
   "aEx": "",
   "b": "mad",
   "bKo": "화난",
   "bEx": "Are you mad?"
  },
  {
   "g": "th_d",
   "a": "both",
   "aKo": "둘 다",
   "aEx": "Both, please.",
   "b": "bode",
   "bKo": "징조가 되다",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "faith",
   "aKo": "믿음",
   "aEx": "Have some faith.",
   "b": "fade",
   "bKo": "희미해지다",
   "bEx": ""
  },
  {
   "g": "th_d",
   "a": "oath",
   "aKo": "맹세",
   "aEx": "",
   "b": "owed",
   "bKo": "빚진",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "band",
   "aKo": "밴드, 띠",
   "aEx": "",
   "b": "bend",
   "bKo": "구부리다",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "pat",
   "aKo": "토닥이다",
   "aEx": "",
   "b": "pet",
   "bKo": "반려동물",
   "bEx": "Are pets allowed?"
  },
  {
   "g": "ae_e",
   "a": "gas",
   "aKo": "가스",
   "aEx": "Where's the gas station?",
   "b": "guess",
   "bKo": "추측하다",
   "bEx": "I guess so."
  },
  {
   "g": "ae_e",
   "a": "land",
   "aKo": "땅",
   "aEx": "The plane will land soon.",
   "b": "lend",
   "bKo": "빌려주다",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "sand",
   "aKo": "모래",
   "aEx": "",
   "b": "send",
   "bKo": "보내다",
   "bEx": "I'd like to send this."
  },
  {
   "g": "ae_e",
   "a": "dad",
   "aKo": "아빠",
   "aEx": "",
   "b": "dead",
   "bKo": "죽은",
   "bEx": "My phone is dead."
  },
  {
   "g": "ae_e",
   "a": "marry",
   "aKo": "결혼하다",
   "aEx": "",
   "b": "merry",
   "bKo": "즐거운",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "pack",
   "aKo": "싸다",
   "aEx": "",
   "b": "peck",
   "bKo": "쪼다",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "tan",
   "aKo": "햇볕에 탄",
   "aEx": "",
   "b": "ten",
   "bKo": "열",
   "bEx": "Ten dollars, please."
  },
  {
   "g": "ae_e",
   "a": "gal",
   "aKo": "여자애",
   "aEx": "",
   "b": "gel",
   "bKo": "젤",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "lad",
   "aKo": "소년",
   "aEx": "",
   "b": "led",
   "bKo": "이끌었다",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "mass",
   "aKo": "덩어리",
   "aEx": "",
   "b": "mess",
   "bKo": "엉망",
   "bEx": "Sorry about the mess."
  },
  {
   "g": "ae_e",
   "a": "rack",
   "aKo": "선반",
   "aEx": "",
   "b": "wreck",
   "bKo": "난파, 망가뜨리다",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "bag",
   "aKo": "가방",
   "aEx": "Do you need a bag?",
   "b": "beg",
   "bKo": "간청하다",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "lag",
   "aKo": "뒤처지다",
   "aEx": "",
   "b": "leg",
   "bKo": "다리",
   "bEx": "My leg hurts."
  },
  {
   "g": "ae_e",
   "a": "ham",
   "aKo": "햄",
   "aEx": "",
   "b": "hem",
   "bKo": "옷단",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "fad",
   "aKo": "유행",
   "aEx": "",
   "b": "fed",
   "bKo": "먹였다",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "ant",
   "aKo": "개미",
   "aEx": "",
   "b": "end",
   "bKo": "끝",
   "bEx": "That's the end."
  },
  {
   "g": "ae_e",
   "a": "axe",
   "aKo": "도끼",
   "aEx": "",
   "b": "ex",
   "bKo": "전 연인",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "than",
   "aKo": "~보다",
   "aEx": "It's better than before.",
   "b": "then",
   "bKo": "그러고 나서",
   "bEx": "And then?"
  },
  {
   "g": "ae_e",
   "a": "flash",
   "aKo": "번쩍임",
   "aEx": "",
   "b": "flesh",
   "bKo": "살",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "mat",
   "aKo": "매트",
   "aEx": "",
   "b": "met",
   "bKo": "만났다",
   "bEx": "We met before."
  },
  {
   "g": "ae_e",
   "a": "gnat",
   "aKo": "각다귀",
   "aEx": "",
   "b": "net",
   "bKo": "그물",
   "bEx": "Is there a net?"
  },
  {
   "g": "ae_e",
   "a": "jam",
   "aKo": "잼",
   "aEx": "Can I get some jam?",
   "b": "gem",
   "bKo": "보석",
   "bEx": ""
  },
  {
   "g": "ae_e",
   "a": "tack",
   "aKo": "압정",
   "aEx": "",
   "b": "tech",
   "bKo": "기술",
   "bEx": ""
  },
  {
   "g": "end_dt",
   "a": "seed",
   "aKo": "씨앗",
   "aEx": "",
   "b": "seat",
   "bKo": "자리",
   "bEx": "Is this seat taken?"
  },
  {
   "g": "end_dt",
   "a": "feed",
   "aKo": "먹이다",
   "aEx": "",
   "b": "feet",
   "bKo": "발",
   "bEx": "My feet hurt."
  },
  {
   "g": "end_dt",
   "a": "bead",
   "aKo": "구슬",
   "aEx": "",
   "b": "beat",
   "bKo": "두드리다",
   "bEx": ""
  },
  {
   "g": "end_dt",
   "a": "code",
   "aKo": "암호",
   "aEx": "What's the code?",
   "b": "coat",
   "bKo": "코트",
   "bEx": "Can I take your coat?"
  },
  {
   "g": "end_dt",
   "a": "mad",
   "aKo": "화난",
   "aEx": "Are you mad?",
   "b": "mat",
   "bKo": "매트",
   "bEx": ""
  },
  {
   "g": "end_dt",
   "a": "pad",
   "aKo": "패드",
   "aEx": "",
   "b": "pat",
   "bKo": "토닥이다",
   "bEx": ""
  },
  {
   "g": "end_dt",
   "a": "pig",
   "aKo": "돼지",
   "aEx": "",
   "b": "pick",
   "bKo": "고르다",
   "bEx": "Pick one, please."
  },
  {
   "g": "end_dt",
   "a": "bug",
   "aKo": "벌레",
   "aEx": "",
   "b": "buck",
   "bKo": "수사슴, 달러",
   "bEx": ""
  },
  {
   "g": "end_dt",
   "a": "rag",
   "aKo": "걸레",
   "aEx": "",
   "b": "rack",
   "bKo": "선반",
   "bEx": ""
  },
  {
   "g": "end_dt",
   "a": "tag",
   "aKo": "꼬리표",
   "aEx": "",
   "b": "tack",
   "bKo": "압정",
   "bEx": ""
  },
  {
   "g": "end_dt",
   "a": "log",
   "aKo": "통나무",
   "aEx": "",
   "b": "lock",
   "bKo": "잠금",
   "bEx": "Please lock the door."
  },
  {
   "g": "end_dt",
   "a": "bid",
   "aKo": "입찰",
   "aEx": "",
   "b": "bit",
   "bKo": "조금",
   "bEx": ""
  },
  {
   "g": "end_dt",
   "a": "hid",
   "aKo": "숨었다",
   "aEx": "",
   "b": "hit",
   "bKo": "치다",
   "bEx": ""
  },
  {
   "g": "end_dt",
   "a": "kid",
   "aKo": "아이",
   "aEx": "Is this for kids?",
   "b": "kit",
   "bKo": "도구 세트",
   "bEx": ""
  },
  {
   "g": "end_dt",
   "a": "lid",
   "aKo": "뚜껑",
   "aEx": "",
   "b": "lit",
   "bKo": "불이 켜진",
   "bEx": ""
  },
  {
   "g": "end_dt",
   "a": "bed",
   "aKo": "침대",
   "aEx": "I need a bed.",
   "b": "bet",
   "bKo": "내기",
   "bEx": ""
  },
  {
   "g": "end_dt",
   "a": "prize",
   "aKo": "상",
   "aEx": "",
   "b": "price",
   "bKo": "가격",
   "bEx": "What's the price?"
  },
  {
   "g": "end_dt",
   "a": "peas",
   "aKo": "완두콩",
   "aEx": "",
   "b": "piece",
   "bKo": "조각",
   "bEx": "A piece of cake, please."
  },
  {
   "g": "end_dt",
   "a": "rise",
   "aKo": "오르다",
   "aEx": "",
   "b": "rice",
   "bKo": "쌀",
   "bEx": "Can I get rice with that?"
  },
  {
   "g": "end_dt",
   "a": "knees",
   "aKo": "무릎들",
   "aEx": "",
   "b": "niece",
   "bKo": "조카딸",
   "bEx": ""
  },
  {
   "g": "end_dt",
   "a": "advise",
   "aKo": "조언하다",
   "aEx": "",
   "b": "advice",
   "bKo": "조언",
   "bEx": "Can I get some advice?"
  },
  {
   "g": "end_dt",
   "a": "cab",
   "aKo": "택시",
   "aEx": "Can you call a cab?",
   "b": "cap",
   "bKo": "모자",
   "bEx": "Can I get a cap?"
  },
  {
   "g": "end_dt",
   "a": "tab",
   "aKo": "탭",
   "aEx": "",
   "b": "tap",
   "bKo": "수도꼭지, 톡 치다",
   "bEx": "Can I tap?"
  },
  {
   "g": "end_dt",
   "a": "robe",
   "aKo": "가운",
   "aEx": "",
   "b": "rope",
   "bKo": "밧줄",
   "bEx": "Do you have a rope?"
  },
  {
   "g": "end_dt",
   "a": "have",
   "aKo": "가지다",
   "aEx": "",
   "b": "half",
   "bKo": "절반",
   "bEx": "Half, please."
  },
  {
   "g": "end_dt",
   "a": "leave",
   "aKo": "떠나다",
   "aEx": "Please leave a message.",
   "b": "leaf",
   "bKo": "나뭇잎",
   "bEx": "It's a maple leaf."
  },
  {
   "g": "end_dt",
   "a": "lab",
   "aKo": "실험실",
   "aEx": "",
   "b": "lap",
   "bKo": "무릎",
   "bEx": "Sit on my lap."
  }
 ],
 "places": [
  {
   "id": "rescue",
   "title": "되물을 때",
   "icon": "lifebuoy"
  },
  {
   "id": "cafe",
   "title": "카페·팀홀튼",
   "icon": "cup"
  },
  {
   "id": "grocery",
   "title": "마트 계산대",
   "icon": "cart"
  },
  {
   "id": "restaurant",
   "title": "식당",
   "icon": "dish"
  },
  {
   "id": "clinic",
   "title": "병원·약국",
   "icon": "cross"
  },
  {
   "id": "bank",
   "title": "은행",
   "icon": "bank"
  },
  {
   "id": "post",
   "title": "우체국·택배",
   "icon": "box"
  },
  {
   "id": "office",
   "title": "관공서",
   "icon": "doc"
  },
  {
   "id": "smalltalk",
   "title": "이웃·엘리베이터",
   "icon": "chat"
  },
  {
   "id": "street",
   "title": "길·버스·지하철",
   "icon": "sign"
  },
  {
   "id": "phone",
   "title": "전화",
   "icon": "phone"
  }
 ],
 "phrases": [
  {
   "id": "again",
   "place": "rescue",
   "who": "me",
   "en": "Sorry, could you say that again?",
   "ko": "죄송한데, 다시 한 번 말씀해 주시겠어요?",
   "when": "상대 말을 못 알아들었을 때. 병원·은행·마트 어디서든 쓸 수 있어요.",
   "sound": "쏘리, 쿠쥬 세이 댓 어겐?",
   "reply": ""
  },
  {
   "id": "slow",
   "place": "rescue",
   "who": "me",
   "en": "Could you speak a little slower, please?",
   "ko": "조금만 천천히 말씀해 주시겠어요?",
   "when": "상대가 너무 빨리 말할 때. 웃으면서 말하면 더 부드러워요.",
   "sound": "쿠쥬 스피크 어 리를 슬로워, 플리즈?",
   "reply": ""
  },
  {
   "id": "catch",
   "place": "rescue",
   "who": "me",
   "en": "Sorry, I didn't catch that.",
   "ko": "죄송해요, 못 알아들었어요.",
   "when": "한 번 듣고 놓쳤을 때. 가장 짧고 자연스러운 표현이에요.",
   "sound": "쏘리, 아이 디든 캐치 댓.",
   "reply": ""
  },
  {
   "id": "write",
   "place": "rescue",
   "who": "me",
   "en": "Could you write that down for me?",
   "ko": "그거 좀 적어 주시겠어요?",
   "when": "주소, 전화번호, 약 이름처럼 중요한 걸 들었을 때. 적어 달라고 하면 틀릴 일이 없어요.",
   "sound": "쿠쥬 라잇 댓 다운 포 미?",
   "reply": ""
  },
  {
   "id": "mean",
   "place": "rescue",
   "who": "me",
   "en": "Sorry, what does that mean?",
   "ko": "죄송한데, 그게 무슨 뜻이에요?",
   "when": "모르는 단어가 나왔을 때. 그 단어를 가리키며 말해도 돼요.",
   "sound": "쏘리, 왓 더즈 댓 민?",
   "reply": ""
  },
  {
   "id": "learning",
   "place": "rescue",
   "who": "me",
   "en": "Sorry, I'm still learning English.",
   "ko": "죄송해요, 아직 영어를 배우는 중이에요.",
   "when": "대화를 시작할 때 먼저 말하면 상대가 천천히, 쉬운 말로 해 줘요.",
   "sound": "쏘리, 아임 스틸 러닝 잉글리시.",
   "reply": ""
  },
  {
   "id": "show",
   "place": "rescue",
   "who": "me",
   "en": "Can you show me?",
   "ko": "보여 주실 수 있어요?",
   "when": "말로 설명이 어려울 때. 손으로 가리켜 달라는 뜻으로도 좋아요.",
   "sound": "캔 유 쇼우 미?",
   "reply": ""
  },
  {
   "id": "spell",
   "place": "rescue",
   "who": "me",
   "en": "How do you spell that?",
   "ko": "철자가 어떻게 돼요?",
   "when": "이름, 거리 이름, 약 이름을 들었을 때.",
   "sound": "하우 두 유 스펠 댓?",
   "reply": ""
  },
  {
   "id": "second",
   "place": "rescue",
   "who": "me",
   "en": "Just a second, please.",
   "ko": "잠깐만요.",
   "when": "지갑이나 카드를 찾을 때, 생각할 시간이 필요할 때.",
   "sound": "저스트 어 세컨, 플리즈.",
   "reply": ""
  },
  {
   "id": "washroom",
   "place": "rescue",
   "who": "me",
   "en": "Where's the washroom?",
   "ko": "화장실이 어디예요?",
   "when": "캐나다에서는 toilet보다 washroom이라고 해요.",
   "sound": "웨어즈 더 워시룸?",
   "reply": ""
  },
  {
   "id": "korean",
   "place": "rescue",
   "who": "me",
   "en": "Is there someone who speaks Korean?",
   "ko": "한국어 하시는 분 있나요?",
   "when": "병원·은행처럼 중요한 곳에서. 큰 곳은 통역을 도와줄 때가 많아요.",
   "sound": "이즈 데어 썸원 후 스픽스 코리안?",
   "reply": ""
  },
  {
   "id": "dd",
   "place": "cafe",
   "who": "me",
   "en": "Can I get a medium double-double?",
   "ko": "미디엄 더블더블 하나 주세요.",
   "when": "팀홀튼 대표 주문이에요. 더블더블 = 크림 2번, 설탕 2번.",
   "sound": "캔 아이 겟 어 미디엄 더블 더블?",
   "reply": ""
  },
  {
   "id": "black",
   "place": "cafe",
   "who": "me",
   "en": "Can I get a small coffee, black?",
   "ko": "스몰 커피, 블랙으로 주세요.",
   "when": "아무것도 안 넣은 커피를 원할 때.",
   "sound": "캔 아이 겟 어 스몰 커피, 블랙?",
   "reply": ""
  },
  {
   "id": "forhere",
   "place": "cafe",
   "who": "me",
   "en": "For here, please.",
   "ko": "여기서 먹을게요.",
   "when": "\"For here or to go?\"에 대한 대답.",
   "sound": "포 히어, 플리즈.",
   "reply": ""
  },
  {
   "id": "togo",
   "place": "cafe",
   "who": "me",
   "en": "To go, please.",
   "ko": "가져갈게요.",
   "when": "\"For here or to go?\"에 대한 대답.",
   "sound": "투 고우, 플리즈.",
   "reply": ""
  },
  {
   "id": "thatsit",
   "place": "cafe",
   "who": "me",
   "en": "That's it, thanks.",
   "ko": "그게 다예요, 고마워요.",
   "when": "\"Anything else?\"라고 물으면 이렇게 끝내요.",
   "sound": "댓츠 잇, 땡스.",
   "reply": ""
  },
  {
   "id": "timbits",
   "place": "cafe",
   "who": "me",
   "en": "Can I get a box of ten Timbits?",
   "ko": "팀빗 10개 한 상자 주세요.",
   "when": "팀빗 = 팀홀튼의 동그란 미니 도넛.",
   "sound": "캔 아이 겟 어 박스 오브 텐 팀빗츠?",
   "reply": ""
  },
  {
   "id": "whatcan",
   "place": "cafe",
   "who": "them",
   "en": "Hi there, what can I get for you?",
   "ko": "안녕하세요, 뭐 드릴까요?",
   "when": "차례가 되면 가장 먼저 듣는 말이에요.",
   "sound": "",
   "reply": "Can I get a medium double-double?"
  },
  {
   "id": "herego",
   "place": "cafe",
   "who": "them",
   "en": "For here or to go?",
   "ko": "드시고 가세요, 가져가세요?",
   "when": "카페·패스트푸드에서 꼭 물어봐요.",
   "sound": "",
   "reply": "To go, please."
  },
  {
   "id": "size",
   "place": "cafe",
   "who": "them",
   "en": "What size would you like?",
   "ko": "사이즈는 뭘로 드릴까요?",
   "when": "small, medium, large로 대답해요.",
   "sound": "",
   "reply": "Medium, please."
  },
  {
   "id": "anything",
   "place": "cafe",
   "who": "them",
   "en": "Anything else?",
   "ko": "더 필요한 거 있으세요?",
   "when": "주문이 끝났으면 \"That's it\"이라고 해요.",
   "sound": "",
   "reply": "That's it, thanks."
  },
  {
   "id": "toasted",
   "place": "cafe",
   "who": "them",
   "en": "Would you like that toasted?",
   "ko": "토스트해 드릴까요?",
   "when": "베이글이나 샌드위치를 시키면 물어봐요.",
   "sound": "",
   "reply": "Yes, please."
  },
  {
   "id": "name",
   "place": "cafe",
   "who": "them",
   "en": "Can I get a name for the order?",
   "ko": "주문하신 분 성함이요?",
   "when": "음료가 나오면 이 이름을 불러요.",
   "sound": "",
   "reply": "It's Kim."
  },
  {
   "id": "eggs",
   "place": "grocery",
   "who": "me",
   "en": "Excuse me, where can I find the eggs?",
   "ko": "실례지만, 계란은 어디 있어요?",
   "when": "eggs 대신 찾는 물건 이름을 넣으면 돼요.",
   "sound": "익스큐즈 미, 웨어 캔 아이 파인드 디 에그즈?",
   "reply": ""
  },
  {
   "id": "sale",
   "place": "grocery",
   "who": "me",
   "en": "Is this on sale?",
   "ko": "이거 세일하는 거예요?",
   "when": "가격표가 헷갈릴 때.",
   "sound": "이즈 디스 온 세일?",
   "reply": ""
  },
  {
   "id": "nobag",
   "place": "grocery",
   "who": "me",
   "en": "No bag, thanks.",
   "ko": "봉투는 괜찮아요.",
   "when": "캐나다 마트 봉투는 보통 돈을 받아요.",
   "sound": "노우 백, 땡스.",
   "reply": ""
  },
  {
   "id": "bagplease",
   "place": "grocery",
   "who": "me",
   "en": "Can I get a bag, please?",
   "ko": "봉투 하나 주세요.",
   "when": "봉투가 필요할 때.",
   "sound": "캔 아이 겟 어 백, 플리즈?",
   "reply": ""
  },
  {
   "id": "debit",
   "place": "grocery",
   "who": "me",
   "en": "Can I pay with debit?",
   "ko": "데빗카드로 계산할 수 있어요?",
   "when": "데빗 = 은행 계좌에서 바로 빠지는 카드.",
   "sound": "캔 아이 페이 위드 데빗?",
   "reply": ""
  },
  {
   "id": "bigger",
   "place": "grocery",
   "who": "me",
   "en": "Do you have this in a bigger size?",
   "ko": "이거 더 큰 사이즈 있어요?",
   "when": "옷·신발·물건 크기를 물을 때. smaller로 바꾸면 '더 작은'.",
   "sound": "두 유 해브 디스 인 어 비거 사이즈?",
   "reply": ""
  },
  {
   "id": "findok",
   "place": "grocery",
   "who": "them",
   "en": "Did you find everything okay?",
   "ko": "찾으시는 건 다 찾으셨어요?",
   "when": "계산할 때 거의 항상 하는 인사예요.",
   "sound": "",
   "reply": "Yes, thanks."
  },
  {
   "id": "needbag",
   "place": "grocery",
   "who": "them",
   "en": "Do you need a bag?",
   "ko": "봉투 필요하세요?",
   "when": "봉투는 보통 유료예요.",
   "sound": "",
   "reply": "No bag, thanks."
  },
  {
   "id": "points",
   "place": "grocery",
   "who": "them",
   "en": "Do you have a points card?",
   "ko": "포인트 카드 있으세요?",
   "when": "마트·약국에서 포인트 카드를 꼭 물어봐요.",
   "sound": "",
   "reply": "No, I don't."
  },
  {
   "id": "debitcredit",
   "place": "grocery",
   "who": "them",
   "en": "Debit or credit?",
   "ko": "데빗이에요, 신용카드예요?",
   "when": "카드 종류를 묻는 말이에요.",
   "sound": "",
   "reply": "Debit, please."
  },
  {
   "id": "tap",
   "place": "grocery",
   "who": "them",
   "en": "You can tap whenever you're ready.",
   "ko": "준비되시면 카드 대세요.",
   "when": "tap = 카드를 단말기에 갖다 대는 것.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "receipt",
   "place": "grocery",
   "who": "them",
   "en": "Do you want your receipt?",
   "ko": "영수증 드릴까요?",
   "when": "필요 없으면 \"No, thanks.\"",
   "sound": "",
   "reply": "No, thanks."
  },
  {
   "id": "goodone",
   "place": "grocery",
   "who": "them",
   "en": "Have a good one!",
   "ko": "좋은 하루 보내세요!",
   "when": "헤어질 때 캐나다 사람들이 정말 많이 쓰는 인사예요.",
   "sound": "",
   "reply": "You too!"
  },
  {
   "id": "table2",
   "place": "restaurant",
   "who": "me",
   "en": "Table for two, please.",
   "ko": "두 명이요.",
   "when": "식당 입구에서. two 대신 인원수를 넣어요.",
   "sound": "테이블 포 투, 플리즈.",
   "reply": ""
  },
  {
   "id": "thisone",
   "place": "restaurant",
   "who": "me",
   "en": "Can I get this one, please?",
   "ko": "이거 주세요.",
   "when": "메뉴를 손가락으로 가리키면서 말해요. 가장 쉬운 주문법!",
   "sound": "캔 아이 겟 디스 원, 플리즈?",
   "reply": ""
  },
  {
   "id": "recommend",
   "place": "restaurant",
   "who": "me",
   "en": "What do you recommend?",
   "ko": "뭘 추천하세요?",
   "when": "메뉴를 고르기 어려울 때.",
   "sound": "왓 두 유 레커멘드?",
   "reply": ""
  },
  {
   "id": "spicy",
   "place": "restaurant",
   "who": "me",
   "en": "Is it spicy?",
   "ko": "매워요?",
   "when": "음식 맛을 물을 때.",
   "sound": "이즈 잇 스파이시?",
   "reply": ""
  },
  {
   "id": "bill",
   "place": "restaurant",
   "who": "me",
   "en": "Could we get the bill, please?",
   "ko": "계산서 주세요.",
   "when": "캐나다 식당은 손님이 말해야 계산서를 가져와요.",
   "sound": "쿠드 위 겟 더 빌, 플리즈?",
   "reply": ""
  },
  {
   "id": "separate",
   "place": "restaurant",
   "who": "me",
   "en": "Can we pay separately?",
   "ko": "따로 계산할 수 있어요?",
   "when": "각자 계산하고 싶을 때.",
   "sound": "캔 위 페이 세퍼러틀리?",
   "reply": ""
  },
  {
   "id": "box",
   "place": "restaurant",
   "who": "me",
   "en": "Can I get a box for this?",
   "ko": "남은 거 싸 갈 그릇 주세요.",
   "when": "음식이 남았을 때. 캐나다에선 아주 흔해요.",
   "sound": "캔 아이 겟 어 박스 포 디스?",
   "reply": ""
  },
  {
   "id": "party",
   "place": "restaurant",
   "who": "them",
   "en": "How many in your party?",
   "ko": "몇 분이세요?",
   "when": "party = 일행. 숫자로 대답하면 돼요.",
   "sound": "",
   "reply": "Two, please."
  },
  {
   "id": "ready",
   "place": "restaurant",
   "who": "them",
   "en": "Are you ready to order?",
   "ko": "주문하시겠어요?",
   "when": "아직이면 \"A few more minutes, please.\"",
   "sound": "",
   "reply": "A few more minutes, please."
  },
  {
   "id": "howis",
   "place": "restaurant",
   "who": "them",
   "en": "How is everything?",
   "ko": "음식 괜찮으세요?",
   "when": "식사 중에 직원이 꼭 한 번 와서 물어봐요.",
   "sound": "",
   "reply": "Everything's great, thanks."
  },
  {
   "id": "getyou",
   "place": "restaurant",
   "who": "them",
   "en": "Can I get you anything else?",
   "ko": "더 필요한 거 있으세요?",
   "when": "계산하고 싶으면 bill을 달라고 해요.",
   "sound": "",
   "reply": "Just the bill, please."
  },
  {
   "id": "together",
   "place": "restaurant",
   "who": "them",
   "en": "Will that be together or separate?",
   "ko": "같이 계산하세요, 따로 하세요?",
   "when": "계산서를 가져오기 전에 물어봐요.",
   "sound": "",
   "reply": "Together, please."
  },
  {
   "id": "wantbox",
   "place": "restaurant",
   "who": "them",
   "en": "Would you like a box for that?",
   "ko": "남은 거 포장해 드릴까요?",
   "when": "음식이 남으면 먼저 물어보기도 해요.",
   "sound": "",
   "reply": "Yes, please."
  },
  {
   "id": "appt",
   "place": "clinic",
   "who": "me",
   "en": "I have an appointment at two.",
   "ko": "2시에 예약했어요.",
   "when": "접수할 때. two 대신 예약 시간을 넣어요.",
   "sound": "아이 해브 언 어포인트먼트 앳 투.",
   "reply": ""
  },
  {
   "id": "seedoc",
   "place": "clinic",
   "who": "me",
   "en": "I'd like to see a doctor, please.",
   "ko": "진료를 받고 싶어요.",
   "when": "워크인 클리닉(예약 없는 병원)에서.",
   "sound": "아이드 라이크 투 씨 어 닥터, 플리즈.",
   "reply": ""
  },
  {
   "id": "hurts",
   "place": "clinic",
   "who": "me",
   "en": "It hurts here.",
   "ko": "여기가 아파요.",
   "when": "아픈 곳을 손으로 가리키면서 말해요.",
   "sound": "잇 허츠 히어.",
   "reply": ""
  },
  {
   "id": "fever",
   "place": "clinic",
   "who": "me",
   "en": "I've had a fever since yesterday.",
   "ko": "어제부터 열이 나요.",
   "when": "증상이 언제 시작됐는지 말할 때.",
   "sound": "아이브 해드 어 피버 씬스 예스터데이.",
   "reply": ""
  },
  {
   "id": "interp",
   "place": "clinic",
   "who": "me",
   "en": "I need a Korean interpreter, please.",
   "ko": "한국어 통역이 필요해요.",
   "when": "큰 병원은 통역을 무료로 불러 줄 때가 많아요.",
   "sound": "아이 니드 어 코리안 인터프리터, 플리즈.",
   "reply": ""
  },
  {
   "id": "rx",
   "place": "clinic",
   "who": "me",
   "en": "I'm here to pick up my prescription.",
   "ko": "처방약 찾으러 왔어요.",
   "when": "약국(pharmacy)에서.",
   "sound": "아임 히어 투 픽 업 마이 프리스크립션.",
   "reply": ""
  },
  {
   "id": "healthcard",
   "place": "clinic",
   "who": "them",
   "en": "Can I see your health card?",
   "ko": "건강카드 보여 주시겠어요?",
   "when": "온타리오에서는 OHIP 카드를 매번 확인해요.",
   "sound": "",
   "reply": "Here you go."
  },
  {
   "id": "brings",
   "place": "clinic",
   "who": "them",
   "en": "What brings you in today?",
   "ko": "오늘 어디가 불편해서 오셨어요?",
   "when": "의사가 처음에 꼭 하는 질문이에요.",
   "sound": "",
   "reply": "I've had a fever since yesterday."
  },
  {
   "id": "howlong",
   "place": "clinic",
   "who": "them",
   "en": "How long have you had it?",
   "ko": "그런 지 얼마나 됐어요?",
   "when": "기간을 말하면 돼요.",
   "sound": "",
   "reply": "About three days."
  },
  {
   "id": "allergic",
   "place": "clinic",
   "who": "them",
   "en": "Are you allergic to any medication?",
   "ko": "약 알레르기 있으세요?",
   "when": "약을 처방하기 전에 꼭 물어봐요.",
   "sound": "",
   "reply": "No, I'm not."
  },
  {
   "id": "scale",
   "place": "clinic",
   "who": "them",
   "en": "On a scale of one to ten, how bad is the pain?",
   "ko": "1부터 10까지 중에 얼마나 아파요?",
   "when": "캐나다 병원에서 정말 자주 물어봐요. 숫자로 대답해요.",
   "sound": "",
   "reply": "About a six."
  },
  {
   "id": "twice",
   "place": "clinic",
   "who": "them",
   "en": "Take one pill twice a day.",
   "ko": "하루에 두 번, 한 알씩 드세요.",
   "when": "약 먹는 방법. 꼭 적어 달라고 해도 돼요.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "haveaseat",
   "place": "clinic",
   "who": "them",
   "en": "Have a seat, and we'll call your name.",
   "ko": "앉아 계시면 이름 불러 드릴게요.",
   "when": "접수가 끝나면 듣는 말이에요.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "cheque",
   "place": "bank",
   "who": "me",
   "en": "I'd like to deposit this cheque.",
   "ko": "이 수표 입금하고 싶어요.",
   "when": "cheque = 수표(캐나다 철자).",
   "sound": "아이드 라이크 투 디파짓 디스 첵.",
   "reply": ""
  },
  {
   "id": "cash",
   "place": "bank",
   "who": "me",
   "en": "I'd like to take out some cash.",
   "ko": "현금을 좀 찾고 싶어요.",
   "when": "창구에서 돈을 찾을 때.",
   "sound": "아이드 라이크 투 테이크 아웃 썸 캐시.",
   "reply": ""
  },
  {
   "id": "pin",
   "place": "bank",
   "who": "me",
   "en": "I forgot my PIN.",
   "ko": "비밀번호를 잊어버렸어요.",
   "when": "PIN = 카드 비밀번호.",
   "sound": "아이 포갓 마이 핀.",
   "reply": ""
  },
  {
   "id": "lost",
   "place": "bank",
   "who": "me",
   "en": "I lost my card.",
   "ko": "카드를 잃어버렸어요.",
   "when": "바로 말해야 카드를 막을 수 있어요.",
   "sound": "아이 로스트 마이 카드.",
   "reply": ""
  },
  {
   "id": "bookappt",
   "place": "bank",
   "who": "me",
   "en": "Can I make an appointment?",
   "ko": "예약할 수 있어요?",
   "when": "상담이 길어질 것 같을 때.",
   "sound": "캔 아이 메이크 언 어포인트먼트?",
   "reply": ""
  },
  {
   "id": "sendkr",
   "place": "bank",
   "who": "me",
   "en": "I'd like to send money to Korea.",
   "ko": "한국으로 돈을 보내고 싶어요.",
   "when": "해외 송금할 때.",
   "sound": "아이드 라이크 투 센드 머니 투 코리아.",
   "reply": ""
  },
  {
   "id": "helpyou",
   "place": "bank",
   "who": "them",
   "en": "How can I help you today?",
   "ko": "무엇을 도와드릴까요?",
   "when": "창구에서 가장 먼저 듣는 말이에요.",
   "sound": "",
   "reply": "I'd like to deposit this cheque."
  },
  {
   "id": "id",
   "place": "bank",
   "who": "them",
   "en": "Can I see some ID?",
   "ko": "신분증 보여 주시겠어요?",
   "when": "ID = 신분증(운전면허증, 여권 등).",
   "sound": "",
   "reply": "Here you go."
  },
  {
   "id": "enterpin",
   "place": "bank",
   "who": "them",
   "en": "Please enter your PIN.",
   "ko": "비밀번호 눌러 주세요.",
   "when": "카드 단말기를 내밀면서 하는 말.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "twenties",
   "place": "bank",
   "who": "them",
   "en": "How would you like it? In twenties?",
   "ko": "어떻게 드릴까요? 20달러짜리로요?",
   "when": "현금을 찾으면 지폐 종류를 물어봐요.",
   "sound": "",
   "reply": "Twenties are fine."
  },
  {
   "id": "elsehelp",
   "place": "bank",
   "who": "them",
   "en": "Is there anything else I can help you with?",
   "ko": "더 도와드릴 일 있으세요?",
   "when": "끝낼 때 듣는 말이에요.",
   "sound": "",
   "reply": "No, that's all. Thank you."
  },
  {
   "id": "pickup",
   "place": "post",
   "who": "me",
   "en": "I'm here to pick up a package.",
   "ko": "택배 찾으러 왔어요.",
   "when": "우체국이나 택배 보관소에서.",
   "sound": "아임 히어 투 픽 업 어 패키지.",
   "reply": ""
  },
  {
   "id": "notice",
   "place": "post",
   "who": "me",
   "en": "I got this notice card.",
   "ko": "이 안내 카드를 받았어요.",
   "when": "집에 없을 때 문에 붙어 있던 카드를 보여 주면서.",
   "sound": "아이 갓 디스 노티스 카드.",
   "reply": ""
  },
  {
   "id": "sendthis",
   "place": "post",
   "who": "me",
   "en": "I'd like to send this to Korea.",
   "ko": "이거 한국으로 보내고 싶어요.",
   "when": "소포를 보낼 때.",
   "sound": "아이드 라이크 투 센드 디스 투 코리아.",
   "reply": ""
  },
  {
   "id": "takelong",
   "place": "post",
   "who": "me",
   "en": "How long will it take?",
   "ko": "얼마나 걸려요?",
   "when": "배송 기간을 물을 때. 어디서든 쓸 수 있어요.",
   "sound": "하우 롱 윌 잇 테이크?",
   "reply": ""
  },
  {
   "id": "tracking",
   "place": "post",
   "who": "me",
   "en": "Can I get a tracking number?",
   "ko": "추적 번호 받을 수 있어요?",
   "when": "택배가 어디 있는지 확인하는 번호.",
   "sound": "캔 아이 겟 어 트래킹 넘버?",
   "reply": ""
  },
  {
   "id": "cardid",
   "place": "post",
   "who": "them",
   "en": "Can I see the card and some ID?",
   "ko": "안내 카드랑 신분증 보여 주세요.",
   "when": "택배를 찾을 때 듣는 말이에요.",
   "sound": "",
   "reply": "Here you go."
  },
  {
   "id": "fragile",
   "place": "post",
   "who": "them",
   "en": "Is there anything fragile or liquid inside?",
   "ko": "안에 깨지는 거나 액체 있어요?",
   "when": "소포를 보낼 때 꼭 물어봐요.",
   "sound": "",
   "reply": "No, just clothes."
  },
  {
   "id": "express",
   "place": "post",
   "who": "them",
   "en": "Regular or express?",
   "ko": "일반이요, 빠른 우편이요?",
   "when": "express는 빠르지만 비싸요.",
   "sound": "",
   "reply": "Regular, please."
  },
  {
   "id": "sign",
   "place": "post",
   "who": "them",
   "en": "Can you sign here, please?",
   "ko": "여기 서명해 주시겠어요?",
   "when": "택배를 받을 때.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "twoweeks",
   "place": "post",
   "who": "them",
   "en": "It should take about two weeks.",
   "ko": "2주 정도 걸릴 거예요.",
   "when": "배송 기간 안내.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "renew",
   "place": "office",
   "who": "me",
   "en": "I'm here to renew my health card.",
   "ko": "건강카드 갱신하러 왔어요.",
   "when": "ServiceOntario 같은 곳에서. health card 대신 다른 서류 이름도 돼요.",
   "sound": "아임 히어 투 리뉴 마이 헬스 카드.",
   "reply": ""
  },
  {
   "id": "address",
   "place": "office",
   "who": "me",
   "en": "I'd like to change my address.",
   "ko": "주소를 바꾸고 싶어요.",
   "when": "이사한 뒤에.",
   "sound": "아이드 라이크 투 체인지 마이 어드레스.",
   "reply": ""
  },
  {
   "id": "whichline",
   "place": "office",
   "who": "me",
   "en": "Which line should I be in?",
   "ko": "어느 줄에 서야 해요?",
   "when": "줄이 여러 개일 때.",
   "sound": "위치 라인 슈드 아이 비 인?",
   "reply": ""
  },
  {
   "id": "form",
   "place": "office",
   "who": "me",
   "en": "Do I need to fill out a form?",
   "ko": "서류를 작성해야 하나요?",
   "when": "fill out = (서류를) 작성하다.",
   "sound": "두 아이 니드 투 필 아웃 어 폼?",
   "reply": ""
  },
  {
   "id": "documents",
   "place": "office",
   "who": "me",
   "en": "What documents do I need?",
   "ko": "어떤 서류가 필요해요?",
   "when": "준비물을 물을 때.",
   "sound": "왓 다큐먼츠 두 아이 니드?",
   "reply": ""
  },
  {
   "id": "number",
   "place": "office",
   "who": "them",
   "en": "Please take a number and have a seat.",
   "ko": "번호표 뽑고 앉아 계세요.",
   "when": "들어가자마자 듣는 말이에요.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "next",
   "place": "office",
   "who": "them",
   "en": "Next, please!",
   "ko": "다음 분이요!",
   "when": "내 차례가 됐다는 뜻이에요.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "proof",
   "place": "office",
   "who": "them",
   "en": "Do you have proof of address?",
   "ko": "주소를 증명할 서류 있으세요?",
   "when": "은행 명세서나 고지서를 보여 주면 돼요.",
   "sound": "",
   "reply": "Is a bank statement okay?"
  },
  {
   "id": "camera",
   "place": "office",
   "who": "them",
   "en": "Please look at the camera.",
   "ko": "카메라를 봐 주세요.",
   "when": "사진 찍을 때.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "mail",
   "place": "office",
   "who": "them",
   "en": "You'll get it in the mail.",
   "ko": "우편으로 받으실 거예요.",
   "when": "새 카드가 집으로 온다는 뜻이에요.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "howsit",
   "place": "smalltalk",
   "who": "me",
   "en": "Hi, how's it going?",
   "ko": "안녕하세요, 잘 지내세요?",
   "when": "캐나다식 가벼운 인사예요.",
   "sound": "하이, 하우즈 잇 고잉?",
   "reply": ""
  },
  {
   "id": "notbad",
   "place": "smalltalk",
   "who": "me",
   "en": "Not bad, you?",
   "ko": "나쁘지 않아요, 그쪽은요?",
   "when": "\"How's it going?\"에 대한 가장 흔한 대답.",
   "sound": "낫 배드, 유?",
   "reply": ""
  },
  {
   "id": "socold",
   "place": "smalltalk",
   "who": "me",
   "en": "It's so cold today!",
   "ko": "오늘 정말 춥네요!",
   "when": "캐나다에서 가장 무난한 스몰톡은 날씨예요.",
   "sound": "잇츠 쏘우 코울드 투데이!",
   "reply": ""
  },
  {
   "id": "niceday",
   "place": "smalltalk",
   "who": "me",
   "en": "Nice day, isn't it?",
   "ko": "날씨 좋죠?",
   "when": "날씨가 좋은 날 먼저 건네는 말.",
   "sound": "나이스 데이, 이즌 잇?",
   "reply": ""
  },
  {
   "id": "weekend",
   "place": "smalltalk",
   "who": "me",
   "en": "Have a good weekend!",
   "ko": "주말 잘 보내세요!",
   "when": "금요일에 헤어질 때.",
   "sound": "해브 어 굿 위켄드!",
   "reply": ""
  },
  {
   "id": "youtoo",
   "place": "smalltalk",
   "who": "me",
   "en": "You too!",
   "ko": "그쪽도요!",
   "when": "상대가 좋은 하루 보내라고 하면 이렇게 답해요.",
   "sound": "유 투!",
   "reply": ""
  },
  {
   "id": "goingup",
   "place": "smalltalk",
   "who": "them",
   "en": "Going up?",
   "ko": "올라가세요?",
   "when": "엘리베이터 문 앞에서.",
   "sound": "",
   "reply": "Yes, thanks."
  },
  {
   "id": "floor",
   "place": "smalltalk",
   "who": "them",
   "en": "Which floor?",
   "ko": "몇 층 가세요?",
   "when": "엘리베이터 버튼 앞에 선 사람이 물어봐요.",
   "sound": "",
   "reply": "Twelve, please."
  },
  {
   "id": "coldenough",
   "place": "smalltalk",
   "who": "them",
   "en": "Cold enough for you?",
   "ko": "꽤 춥죠?",
   "when": "캐나다 사람들이 겨울에 즐겨 하는 농담 섞인 인사예요.",
   "sound": "",
   "reply": "Yes, it's freezing!"
  },
  {
   "id": "plans",
   "place": "smalltalk",
   "who": "them",
   "en": "Any plans for the weekend?",
   "ko": "주말에 계획 있어요?",
   "when": "금요일에 자주 듣는 질문.",
   "sound": "",
   "reply": "Not really, just relaxing."
  },
  {
   "id": "takecare",
   "place": "smalltalk",
   "who": "them",
   "en": "Take care!",
   "ko": "잘 가요!",
   "when": "헤어질 때 인사.",
   "sound": "",
   "reply": "You too!"
  },
  {
   "id": "subway",
   "place": "street",
   "who": "me",
   "en": "Excuse me, where's the subway station?",
   "ko": "실례지만, 지하철역이 어디예요?",
   "when": "길을 물을 때. subway station 대신 가고 싶은 곳을 넣어요.",
   "sound": "익스큐즈 미, 웨어즈 더 써브웨이 스테이션?",
   "reply": ""
  },
  {
   "id": "rightbus",
   "place": "street",
   "who": "me",
   "en": "Is this the right bus for Finch?",
   "ko": "이거 핀치 가는 버스 맞아요?",
   "when": "버스에 타면서 기사님께. Finch 대신 가는 곳 이름을 넣어요.",
   "sound": "이즈 디스 더 라잇 버스 포 핀치?",
   "reply": ""
  },
  {
   "id": "far",
   "place": "street",
   "who": "me",
   "en": "Is it far from here?",
   "ko": "여기서 멀어요?",
   "when": "거리를 물을 때.",
   "sound": "이즈 잇 파 프롬 히어?",
   "reply": ""
  },
  {
   "id": "getoff",
   "place": "street",
   "who": "me",
   "en": "Could you tell me when to get off?",
   "ko": "어디서 내려야 하는지 알려 주실래요?",
   "when": "버스 기사님께 부탁할 때.",
   "sound": "쿠쥬 텔 미 웬 투 겟 오프?",
   "reply": ""
  },
  {
   "id": "excuse",
   "place": "street",
   "who": "me",
   "en": "Sorry, excuse me.",
   "ko": "죄송해요, 좀 지나갈게요.",
   "when": "사람들 사이로 지나가거나 살짝 부딪혔을 때.",
   "sound": "쏘리, 익스큐즈 미.",
   "reply": ""
  },
  {
   "id": "straight",
   "place": "street",
   "who": "them",
   "en": "Go straight and turn left at the lights.",
   "ko": "쭉 가서 신호등에서 왼쪽으로 도세요.",
   "when": "lights = 신호등.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "fivemin",
   "place": "street",
   "who": "them",
   "en": "It's about a five-minute walk.",
   "ko": "걸어서 5분 정도예요.",
   "when": "거리를 알려 주는 말.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "onright",
   "place": "street",
   "who": "them",
   "en": "It's on your right.",
   "ko": "오른쪽에 있어요.",
   "when": "on your left면 왼쪽.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "tapcard",
   "place": "street",
   "who": "them",
   "en": "Just tap your card here.",
   "ko": "여기에 카드 대세요.",
   "when": "버스·지하철 탈 때 카드 단말기에.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "laststop",
   "place": "street",
   "who": "them",
   "en": "This is the last stop.",
   "ko": "여기가 종점이에요.",
   "when": "모두 내려야 해요.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "doors",
   "place": "street",
   "who": "them",
   "en": "Please stand clear of the doors.",
   "ko": "문에서 떨어져 주세요.",
   "when": "지하철 안내 방송. 문이 곧 닫힌다는 뜻이에요.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "calling",
   "place": "phone",
   "who": "me",
   "en": "Hi, I'm calling about my appointment.",
   "ko": "예약 때문에 전화드렸어요.",
   "when": "병원·은행에 전화할 때 첫마디.",
   "sound": "하이, 아임 콜링 어바웃 마이 어포인트먼트.",
   "reply": ""
  },
  {
   "id": "canthear",
   "place": "phone",
   "who": "me",
   "en": "Sorry, I can't hear you very well.",
   "ko": "죄송해요, 잘 안 들려요.",
   "when": "전화 소리가 작거나 끊길 때.",
   "sound": "쏘리, 아이 캔트 히어 유 베리 웰.",
   "reply": ""
  },
  {
   "id": "text",
   "place": "phone",
   "who": "me",
   "en": "Can you text me instead?",
   "ko": "대신 문자로 보내 주실 수 있어요?",
   "when": "전화 영어가 어려울 때 아주 좋은 방법이에요.",
   "sound": "캔 유 텍스트 미 인스테드?",
   "reply": ""
  },
  {
   "id": "lastname",
   "place": "phone",
   "who": "me",
   "en": "My last name is Kim. K-I-M.",
   "ko": "제 성은 김이에요. K, I, M.",
   "when": "이름은 철자까지 불러 주면 정확해요.",
   "sound": "마이 래스트 네임 이즈 킴. 케이, 아이, 엠.",
   "reply": ""
  },
  {
   "id": "dob",
   "place": "phone",
   "who": "them",
   "en": "Can I get your date of birth?",
   "ko": "생년월일 알려 주시겠어요?",
   "when": "본인 확인할 때 꼭 물어봐요. 월-일-연도 순서로 말해요.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "spellname",
   "place": "phone",
   "who": "them",
   "en": "Can you spell your last name?",
   "ko": "성 철자를 불러 주시겠어요?",
   "when": "알파벳 하나씩 말하면 돼요.",
   "sound": "",
   "reply": "K-I-M."
  },
  {
   "id": "hold",
   "place": "phone",
   "who": "them",
   "en": "Please hold.",
   "ko": "잠시만 기다려 주세요.",
   "when": "끊지 말고 기다리라는 뜻이에요.",
   "sound": "",
   "reply": ""
  },
  {
   "id": "whom",
   "place": "phone",
   "who": "them",
   "en": "Who am I speaking with?",
   "ko": "누구시죠?",
   "when": "전화 건 사람 이름을 묻는 말이에요.",
   "sound": "",
   "reply": "This is Kim."
  },
  {
   "id": "callback",
   "place": "phone",
   "who": "them",
   "en": "We'll give you a call back.",
   "ko": "다시 전화드릴게요.",
   "when": "나중에 연락 준다는 뜻이에요.",
   "sound": "",
   "reply": "Okay, thank you."
  }
 ],
 "missions": [
  "이번 주 안에 'Sorry, could you say that again?'을 실제로 한 번 써 보세요. 마트, 카페, 전화 어디서든 좋아요.",
  "계산을 마친 뒤 점원에게 'Have a good one!'이라고 말해 보세요.",
  "엘리베이터나 복도에서 이웃에게 'How's it going?'이라고 먼저 인사해 보세요.",
  "카페에서 'Can I get a medium double-double?'로 직접 주문해 보세요.",
  "마트 계산대에서 'Did you find everything okay?'를 들으면 'Yes, thanks.'라고 대답해 보세요.",
  "택배나 우체국에서 'I'm here to pick up a package.'를 말해 보세요.",
  "식당에서 'Could we get the bill, please?'로 계산서를 달라고 해 보세요.",
  "이웃이나 가게 직원에게 날씨 이야기 'It's so cold today!'를 건네 보세요.",
  "물건을 찾을 때 직원에게 'Excuse me, where can I find ___?'를 써 보세요.",
  "누군가 'Have a good one!'이라고 하면 'You too!'라고 바로 대답해 보세요.",
  "버스를 탈 때 기사님께 'Is this the right bus for ___?'라고 물어보세요.",
  "전화가 어려우면 'Can you text me instead?'라고 부탁해 보세요."
 ]
};
