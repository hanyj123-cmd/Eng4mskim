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
  },
  {
   "id": "shopping",
   "title": "쇼핑·반품",
   "icon": "bag"
  },
  {
   "id": "home",
   "title": "집·관리실",
   "icon": "home"
  },
  {
   "id": "emergency",
   "title": "응급·911",
   "icon": "siren"
  },
  {
   "id": "taxi",
   "title": "택시·우버",
   "icon": "car"
  },
  {
   "id": "hair",
   "title": "미용실",
   "icon": "scissors"
  },
  {
   "id": "library",
   "title": "도서관·주민센터",
   "icon": "book"
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
   "reply": "",
   "spk": ""
  },
  {
   "id": "slow",
   "place": "rescue",
   "who": "me",
   "en": "Could you speak a little slower, please?",
   "ko": "조금만 천천히 말씀해 주시겠어요?",
   "when": "상대가 너무 빨리 말할 때. 웃으면서 말하면 더 부드러워요.",
   "sound": "쿠쥬 스피크 어 리를 슬로워, 플리즈?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "catch",
   "place": "rescue",
   "who": "me",
   "en": "Sorry, I didn't catch that.",
   "ko": "죄송해요, 못 알아들었어요.",
   "when": "한 번 듣고 놓쳤을 때. 가장 짧고 자연스러운 표현이에요.",
   "sound": "쏘리, 아이 디든 캐치 댓.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "write",
   "place": "rescue",
   "who": "me",
   "en": "Could you write that down for me?",
   "ko": "그거 좀 적어 주시겠어요?",
   "when": "주소, 전화번호, 약 이름처럼 중요한 걸 들었을 때. 적어 달라고 하면 틀릴 일이 없어요.",
   "sound": "쿠쥬 라잇 댓 다운 포 미?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "mean",
   "place": "rescue",
   "who": "me",
   "en": "Sorry, what does that mean?",
   "ko": "죄송한데, 그게 무슨 뜻이에요?",
   "when": "모르는 단어가 나왔을 때. 그 단어를 가리키며 말해도 돼요.",
   "sound": "쏘리, 왓 더즈 댓 민?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "learning",
   "place": "rescue",
   "who": "me",
   "en": "Sorry, I'm still learning English.",
   "ko": "죄송해요, 아직 영어를 배우는 중이에요.",
   "when": "대화를 시작할 때 먼저 말하면 상대가 천천히, 쉬운 말로 해 줘요.",
   "sound": "쏘리, 아임 스틸 러닝 잉글리시.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "show",
   "place": "rescue",
   "who": "me",
   "en": "Can you show me?",
   "ko": "보여 주실 수 있어요?",
   "when": "말로 설명이 어려울 때. 손으로 가리켜 달라는 뜻으로도 좋아요.",
   "sound": "캔 유 쇼우 미?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "spell",
   "place": "rescue",
   "who": "me",
   "en": "How do you spell that?",
   "ko": "철자가 어떻게 돼요?",
   "when": "이름, 거리 이름, 약 이름을 들었을 때.",
   "sound": "하우 두 유 스펠 댓?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "second",
   "place": "rescue",
   "who": "me",
   "en": "Just a second, please.",
   "ko": "잠깐만요.",
   "when": "지갑이나 카드를 찾을 때, 생각할 시간이 필요할 때.",
   "sound": "저스트 어 세컨, 플리즈.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "washroom",
   "place": "rescue",
   "who": "me",
   "en": "Where's the washroom?",
   "ko": "화장실이 어디예요?",
   "when": "캐나다에서는 toilet보다 washroom이라고 해요.",
   "sound": "웨어즈 더 워시룸?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "korean",
   "place": "rescue",
   "who": "me",
   "en": "Is there someone who speaks Korean?",
   "ko": "한국어 하시는 분 있나요?",
   "when": "병원·은행처럼 중요한 곳에서. 큰 곳은 통역을 도와줄 때가 많아요.",
   "sound": "이즈 데어 썸원 후 스픽스 코리안?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "dd",
   "place": "cafe",
   "who": "me",
   "en": "Can I get a medium double-double?",
   "ko": "미디엄 더블더블 하나 주세요.",
   "when": "팀홀튼 대표 주문이에요. 더블더블 = 크림 2번, 설탕 2번.",
   "sound": "캔 아이 겟 어 미디엄 더블 더블?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "black",
   "place": "cafe",
   "who": "me",
   "en": "Can I get a small coffee, black?",
   "ko": "스몰 커피, 블랙으로 주세요.",
   "when": "아무것도 안 넣은 커피를 원할 때.",
   "sound": "캔 아이 겟 어 스몰 커피, 블랙?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "forhere",
   "place": "cafe",
   "who": "me",
   "en": "For here, please.",
   "ko": "여기서 먹을게요.",
   "when": "\"For here or to go?\"에 대한 대답.",
   "sound": "포 히어, 플리즈.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "togo",
   "place": "cafe",
   "who": "me",
   "en": "To go, please.",
   "ko": "가져갈게요.",
   "when": "\"For here or to go?\"에 대한 대답.",
   "sound": "투 고우, 플리즈.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "thatsit",
   "place": "cafe",
   "who": "me",
   "en": "That's it, thanks.",
   "ko": "그게 다예요, 고마워요.",
   "when": "\"Anything else?\"라고 물으면 이렇게 끝내요.",
   "sound": "댓츠 잇, 땡스.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "timbits",
   "place": "cafe",
   "who": "me",
   "en": "Can I get a box of ten Timbits?",
   "ko": "팀빗 10개 한 상자 주세요.",
   "when": "팀빗 = 팀홀튼의 동그란 미니 도넛.",
   "sound": "캔 아이 겟 어 박스 오브 텐 팀빗츠?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "whatcan",
   "place": "cafe",
   "who": "them",
   "en": "Hi there, what can I get for you?",
   "ko": "안녕하세요, 뭐 드릴까요?",
   "when": "차례가 되면 가장 먼저 듣는 말이에요.",
   "sound": "",
   "reply": "Can I get a medium double-double?",
   "spk": "teen_f"
  },
  {
   "id": "herego",
   "place": "cafe",
   "who": "them",
   "en": "For here or to go?",
   "ko": "드시고 가세요, 가져가세요?",
   "when": "카페·패스트푸드에서 꼭 물어봐요.",
   "sound": "",
   "reply": "To go, please.",
   "spk": "teen_m"
  },
  {
   "id": "size",
   "place": "cafe",
   "who": "them",
   "en": "What size would you like?",
   "ko": "사이즈는 뭘로 드릴까요?",
   "when": "small, medium, large로 대답해요.",
   "sound": "",
   "reply": "Medium, please.",
   "spk": "teen_f"
  },
  {
   "id": "anything",
   "place": "cafe",
   "who": "them",
   "en": "Anything else?",
   "ko": "더 필요한 거 있으세요?",
   "when": "주문이 끝났으면 \"That's it\"이라고 해요.",
   "sound": "",
   "reply": "That's it, thanks.",
   "spk": "teen_m"
  },
  {
   "id": "toasted",
   "place": "cafe",
   "who": "them",
   "en": "Would you like that toasted?",
   "ko": "토스트해 드릴까요?",
   "when": "베이글이나 샌드위치를 시키면 물어봐요.",
   "sound": "",
   "reply": "Yes, please.",
   "spk": "teen_f"
  },
  {
   "id": "name",
   "place": "cafe",
   "who": "them",
   "en": "Can I get a name for the order?",
   "ko": "주문하신 분 성함이요?",
   "when": "음료가 나오면 이 이름을 불러요.",
   "sound": "",
   "reply": "It's Kim.",
   "spk": "teen_m"
  },
  {
   "id": "eggs",
   "place": "grocery",
   "who": "me",
   "en": "Excuse me, where can I find the eggs?",
   "ko": "실례지만, 계란은 어디 있어요?",
   "when": "eggs 대신 찾는 물건 이름을 넣으면 돼요.",
   "sound": "익스큐즈 미, 웨어 캔 아이 파인드 디 에그즈?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "sale",
   "place": "grocery",
   "who": "me",
   "en": "Is this on sale?",
   "ko": "이거 세일하는 거예요?",
   "when": "가격표가 헷갈릴 때.",
   "sound": "이즈 디스 온 세일?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "nobag",
   "place": "grocery",
   "who": "me",
   "en": "No bag, thanks.",
   "ko": "봉투는 괜찮아요.",
   "when": "캐나다 마트 봉투는 보통 돈을 받아요.",
   "sound": "노우 백, 땡스.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "bagplease",
   "place": "grocery",
   "who": "me",
   "en": "Can I get a bag, please?",
   "ko": "봉투 하나 주세요.",
   "when": "봉투가 필요할 때.",
   "sound": "캔 아이 겟 어 백, 플리즈?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "debit",
   "place": "grocery",
   "who": "me",
   "en": "Can I pay with debit?",
   "ko": "데빗카드로 계산할 수 있어요?",
   "when": "데빗 = 은행 계좌에서 바로 빠지는 카드.",
   "sound": "캔 아이 페이 위드 데빗?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "bigger",
   "place": "grocery",
   "who": "me",
   "en": "Do you have this in a bigger size?",
   "ko": "이거 더 큰 사이즈 있어요?",
   "when": "옷·신발·물건 크기를 물을 때. smaller로 바꾸면 '더 작은'.",
   "sound": "두 유 해브 디스 인 어 비거 사이즈?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "findok",
   "place": "grocery",
   "who": "them",
   "en": "Did you find everything okay?",
   "ko": "찾으시는 건 다 찾으셨어요?",
   "when": "계산할 때 거의 항상 하는 인사예요.",
   "sound": "",
   "reply": "Yes, thanks.",
   "spk": "latin_f"
  },
  {
   "id": "needbag",
   "place": "grocery",
   "who": "them",
   "en": "Do you need a bag?",
   "ko": "봉투 필요하세요?",
   "when": "봉투는 보통 유료예요.",
   "sound": "",
   "reply": "No bag, thanks.",
   "spk": "teen_m"
  },
  {
   "id": "points",
   "place": "grocery",
   "who": "them",
   "en": "Do you have a points card?",
   "ko": "포인트 카드 있으세요?",
   "when": "마트·약국에서 포인트 카드를 꼭 물어봐요.",
   "sound": "",
   "reply": "No, I don't.",
   "spk": "china_f"
  },
  {
   "id": "debitcredit",
   "place": "grocery",
   "who": "them",
   "en": "Debit or credit?",
   "ko": "데빗이에요, 신용카드예요?",
   "when": "카드 종류를 묻는 말이에요.",
   "sound": "",
   "reply": "Debit, please.",
   "spk": "teen_m"
  },
  {
   "id": "tap",
   "place": "grocery",
   "who": "them",
   "en": "You can tap whenever you're ready.",
   "ko": "준비되시면 카드 대세요.",
   "when": "tap = 카드를 단말기에 갖다 대는 것.",
   "sound": "",
   "reply": "",
   "spk": "latin_f"
  },
  {
   "id": "receipt",
   "place": "grocery",
   "who": "them",
   "en": "Do you want your receipt?",
   "ko": "영수증 드릴까요?",
   "when": "필요 없으면 \"No, thanks.\"",
   "sound": "",
   "reply": "No, thanks.",
   "spk": "teen_f"
  },
  {
   "id": "goodone",
   "place": "grocery",
   "who": "them",
   "en": "Have a good one!",
   "ko": "좋은 하루 보내세요!",
   "when": "헤어질 때 캐나다 사람들이 정말 많이 쓰는 인사예요.",
   "sound": "",
   "reply": "You too!",
   "spk": "teen_m"
  },
  {
   "id": "table2",
   "place": "restaurant",
   "who": "me",
   "en": "Table for two, please.",
   "ko": "두 명이요.",
   "when": "식당 입구에서. two 대신 인원수를 넣어요.",
   "sound": "테이블 포 투, 플리즈.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "thisone",
   "place": "restaurant",
   "who": "me",
   "en": "Can I get this one, please?",
   "ko": "이거 주세요.",
   "when": "메뉴를 손가락으로 가리키면서 말해요. 가장 쉬운 주문법!",
   "sound": "캔 아이 겟 디스 원, 플리즈?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "recommend",
   "place": "restaurant",
   "who": "me",
   "en": "What do you recommend?",
   "ko": "뭘 추천하세요?",
   "when": "메뉴를 고르기 어려울 때.",
   "sound": "왓 두 유 레커멘드?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "spicy",
   "place": "restaurant",
   "who": "me",
   "en": "Is it spicy?",
   "ko": "매워요?",
   "when": "음식 맛을 물을 때.",
   "sound": "이즈 잇 스파이시?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "bill",
   "place": "restaurant",
   "who": "me",
   "en": "Could we get the bill, please?",
   "ko": "계산서 주세요.",
   "when": "캐나다 식당은 손님이 말해야 계산서를 가져와요.",
   "sound": "쿠드 위 겟 더 빌, 플리즈?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "separate",
   "place": "restaurant",
   "who": "me",
   "en": "Can we pay separately?",
   "ko": "따로 계산할 수 있어요?",
   "when": "각자 계산하고 싶을 때.",
   "sound": "캔 위 페이 세퍼러틀리?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "box",
   "place": "restaurant",
   "who": "me",
   "en": "Can I get a box for this?",
   "ko": "남은 거 싸 갈 그릇 주세요.",
   "when": "음식이 남았을 때. 캐나다에선 아주 흔해요.",
   "sound": "캔 아이 겟 어 박스 포 디스?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "party",
   "place": "restaurant",
   "who": "them",
   "en": "How many in your party?",
   "ko": "몇 분이세요?",
   "when": "party = 일행. 숫자로 대답하면 돼요.",
   "sound": "",
   "reply": "Two, please.",
   "spk": "woman"
  },
  {
   "id": "ready",
   "place": "restaurant",
   "who": "them",
   "en": "Are you ready to order?",
   "ko": "주문하시겠어요?",
   "when": "아직이면 \"A few more minutes, please.\"",
   "sound": "",
   "reply": "A few more minutes, please.",
   "spk": "teen_f"
  },
  {
   "id": "howis",
   "place": "restaurant",
   "who": "them",
   "en": "How is everything?",
   "ko": "음식 괜찮으세요?",
   "when": "식사 중에 직원이 꼭 한 번 와서 물어봐요.",
   "sound": "",
   "reply": "Everything's great, thanks.",
   "spk": "woman"
  },
  {
   "id": "getyou",
   "place": "restaurant",
   "who": "them",
   "en": "Can I get you anything else?",
   "ko": "더 필요한 거 있으세요?",
   "when": "계산하고 싶으면 bill을 달라고 해요.",
   "sound": "",
   "reply": "Just the bill, please.",
   "spk": "teen_f"
  },
  {
   "id": "together",
   "place": "restaurant",
   "who": "them",
   "en": "Will that be together or separate?",
   "ko": "같이 계산하세요, 따로 하세요?",
   "when": "계산서를 가져오기 전에 물어봐요.",
   "sound": "",
   "reply": "Together, please.",
   "spk": "woman"
  },
  {
   "id": "wantbox",
   "place": "restaurant",
   "who": "them",
   "en": "Would you like a box for that?",
   "ko": "남은 거 포장해 드릴까요?",
   "when": "음식이 남으면 먼저 물어보기도 해요.",
   "sound": "",
   "reply": "Yes, please.",
   "spk": "teen_f"
  },
  {
   "id": "appt",
   "place": "clinic",
   "who": "me",
   "en": "I have an appointment at two.",
   "ko": "2시에 예약했어요.",
   "when": "접수할 때. two 대신 예약 시간을 넣어요.",
   "sound": "아이 해브 언 어포인트먼트 앳 투.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "seedoc",
   "place": "clinic",
   "who": "me",
   "en": "I'd like to see a doctor, please.",
   "ko": "진료를 받고 싶어요.",
   "when": "워크인 클리닉(예약 없는 병원)에서.",
   "sound": "아이드 라이크 투 씨 어 닥터, 플리즈.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "hurts",
   "place": "clinic",
   "who": "me",
   "en": "It hurts here.",
   "ko": "여기가 아파요.",
   "when": "아픈 곳을 손으로 가리키면서 말해요.",
   "sound": "잇 허츠 히어.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "fever",
   "place": "clinic",
   "who": "me",
   "en": "I've had a fever since yesterday.",
   "ko": "어제부터 열이 나요.",
   "when": "증상이 언제 시작됐는지 말할 때.",
   "sound": "아이브 해드 어 피버 씬스 예스터데이.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "interp",
   "place": "clinic",
   "who": "me",
   "en": "I need a Korean interpreter, please.",
   "ko": "한국어 통역이 필요해요.",
   "when": "큰 병원은 통역을 무료로 불러 줄 때가 많아요.",
   "sound": "아이 니드 어 코리안 인터프리터, 플리즈.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "rx",
   "place": "clinic",
   "who": "me",
   "en": "I'm here to pick up my prescription.",
   "ko": "처방약 찾으러 왔어요.",
   "when": "약국(pharmacy)에서.",
   "sound": "아임 히어 투 픽 업 마이 프리스크립션.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "healthcard",
   "place": "clinic",
   "who": "them",
   "en": "Can I see your health card?",
   "ko": "건강카드 보여 주시겠어요?",
   "when": "온타리오에서는 OHIP 카드를 매번 확인해요.",
   "sound": "",
   "reply": "Here you go.",
   "spk": "phil_f"
  },
  {
   "id": "brings",
   "place": "clinic",
   "who": "them",
   "en": "What brings you in today?",
   "ko": "오늘 어디가 불편해서 오셨어요?",
   "when": "의사가 처음에 꼭 하는 질문이에요.",
   "sound": "",
   "reply": "I've had a fever since yesterday.",
   "spk": "man"
  },
  {
   "id": "howlong",
   "place": "clinic",
   "who": "them",
   "en": "How long have you had it?",
   "ko": "그런 지 얼마나 됐어요?",
   "when": "기간을 말하면 돼요.",
   "sound": "",
   "reply": "About three days.",
   "spk": "man"
  },
  {
   "id": "allergic",
   "place": "clinic",
   "who": "them",
   "en": "Are you allergic to any medication?",
   "ko": "약 알레르기 있으세요?",
   "when": "약을 처방하기 전에 꼭 물어봐요.",
   "sound": "",
   "reply": "No, I'm not.",
   "spk": "india_f"
  },
  {
   "id": "scale",
   "place": "clinic",
   "who": "them",
   "en": "On a scale of one to ten, how bad is the pain?",
   "ko": "1부터 10까지 중에 얼마나 아파요?",
   "when": "캐나다 병원에서 정말 자주 물어봐요. 숫자로 대답해요.",
   "sound": "",
   "reply": "About a six.",
   "spk": "man"
  },
  {
   "id": "twice",
   "place": "clinic",
   "who": "them",
   "en": "Take one pill twice a day.",
   "ko": "하루에 두 번, 한 알씩 드세요.",
   "when": "약 먹는 방법. 꼭 적어 달라고 해도 돼요.",
   "sound": "",
   "reply": "",
   "spk": "india_f"
  },
  {
   "id": "haveaseat",
   "place": "clinic",
   "who": "them",
   "en": "Have a seat, and we'll call your name.",
   "ko": "앉아 계시면 이름 불러 드릴게요.",
   "when": "접수가 끝나면 듣는 말이에요.",
   "sound": "",
   "reply": "",
   "spk": "phil_f"
  },
  {
   "id": "cheque",
   "place": "bank",
   "who": "me",
   "en": "I'd like to deposit this cheque.",
   "ko": "이 수표 입금하고 싶어요.",
   "when": "cheque = 수표(캐나다 철자).",
   "sound": "아이드 라이크 투 디파짓 디스 첵.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "cash",
   "place": "bank",
   "who": "me",
   "en": "I'd like to take out some cash.",
   "ko": "현금을 좀 찾고 싶어요.",
   "when": "창구에서 돈을 찾을 때.",
   "sound": "아이드 라이크 투 테이크 아웃 썸 캐시.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "pin",
   "place": "bank",
   "who": "me",
   "en": "I forgot my PIN.",
   "ko": "비밀번호를 잊어버렸어요.",
   "when": "PIN = 카드 비밀번호.",
   "sound": "아이 포갓 마이 핀.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "lost",
   "place": "bank",
   "who": "me",
   "en": "I lost my card.",
   "ko": "카드를 잃어버렸어요.",
   "when": "바로 말해야 카드를 막을 수 있어요.",
   "sound": "아이 로스트 마이 카드.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "bookappt",
   "place": "bank",
   "who": "me",
   "en": "Can I make an appointment?",
   "ko": "예약할 수 있어요?",
   "when": "상담이 길어질 것 같을 때.",
   "sound": "캔 아이 메이크 언 어포인트먼트?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "sendkr",
   "place": "bank",
   "who": "me",
   "en": "I'd like to send money to Korea.",
   "ko": "한국으로 돈을 보내고 싶어요.",
   "when": "해외 송금할 때.",
   "sound": "아이드 라이크 투 센드 머니 투 코리아.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "helpyou",
   "place": "bank",
   "who": "them",
   "en": "How can I help you today?",
   "ko": "무엇을 도와드릴까요?",
   "when": "창구에서 가장 먼저 듣는 말이에요.",
   "sound": "",
   "reply": "I'd like to deposit this cheque.",
   "spk": "china_m"
  },
  {
   "id": "id",
   "place": "bank",
   "who": "them",
   "en": "Can I see some ID?",
   "ko": "신분증 보여 주시겠어요?",
   "when": "ID = 신분증(운전면허증, 여권 등).",
   "sound": "",
   "reply": "Here you go.",
   "spk": "china_m"
  },
  {
   "id": "enterpin",
   "place": "bank",
   "who": "them",
   "en": "Please enter your PIN.",
   "ko": "비밀번호 눌러 주세요.",
   "when": "카드 단말기를 내밀면서 하는 말.",
   "sound": "",
   "reply": "",
   "spk": "china_f"
  },
  {
   "id": "twenties",
   "place": "bank",
   "who": "them",
   "en": "How would you like it? In twenties?",
   "ko": "어떻게 드릴까요? 20달러짜리로요?",
   "when": "현금을 찾으면 지폐 종류를 물어봐요.",
   "sound": "",
   "reply": "Twenties are fine.",
   "spk": "india_m"
  },
  {
   "id": "elsehelp",
   "place": "bank",
   "who": "them",
   "en": "Is there anything else I can help you with?",
   "ko": "더 도와드릴 일 있으세요?",
   "when": "끝낼 때 듣는 말이에요.",
   "sound": "",
   "reply": "No, that's all. Thank you.",
   "spk": "china_m"
  },
  {
   "id": "pickup",
   "place": "post",
   "who": "me",
   "en": "I'm here to pick up a package.",
   "ko": "택배 찾으러 왔어요.",
   "when": "우체국이나 택배 보관소에서.",
   "sound": "아임 히어 투 픽 업 어 패키지.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "notice",
   "place": "post",
   "who": "me",
   "en": "I got this notice card.",
   "ko": "이 안내 카드를 받았어요.",
   "when": "집에 없을 때 문에 붙어 있던 카드를 보여 주면서.",
   "sound": "아이 갓 디스 노티스 카드.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "sendthis",
   "place": "post",
   "who": "me",
   "en": "I'd like to send this to Korea.",
   "ko": "이거 한국으로 보내고 싶어요.",
   "when": "소포를 보낼 때.",
   "sound": "아이드 라이크 투 센드 디스 투 코리아.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "takelong",
   "place": "post",
   "who": "me",
   "en": "How long will it take?",
   "ko": "얼마나 걸려요?",
   "when": "배송 기간을 물을 때. 어디서든 쓸 수 있어요.",
   "sound": "하우 롱 윌 잇 테이크?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "tracking",
   "place": "post",
   "who": "me",
   "en": "Can I get a tracking number?",
   "ko": "추적 번호 받을 수 있어요?",
   "when": "택배가 어디 있는지 확인하는 번호.",
   "sound": "캔 아이 겟 어 트래킹 넘버?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "cardid",
   "place": "post",
   "who": "them",
   "en": "Can I see the card and some ID?",
   "ko": "안내 카드랑 신분증 보여 주세요.",
   "when": "택배를 찾을 때 듣는 말이에요.",
   "sound": "",
   "reply": "Here you go.",
   "spk": "man"
  },
  {
   "id": "fragile",
   "place": "post",
   "who": "them",
   "en": "Is there anything fragile or liquid inside?",
   "ko": "안에 깨지는 거나 액체 있어요?",
   "when": "소포를 보낼 때 꼭 물어봐요.",
   "sound": "",
   "reply": "No, just clothes.",
   "spk": "latin_f"
  },
  {
   "id": "express",
   "place": "post",
   "who": "them",
   "en": "Regular or express?",
   "ko": "일반이요, 빠른 우편이요?",
   "when": "express는 빠르지만 비싸요.",
   "sound": "",
   "reply": "Regular, please.",
   "spk": "man"
  },
  {
   "id": "sign",
   "place": "post",
   "who": "them",
   "en": "Can you sign here, please?",
   "ko": "여기 서명해 주시겠어요?",
   "when": "택배를 받을 때.",
   "sound": "",
   "reply": "",
   "spk": "latin_f"
  },
  {
   "id": "twoweeks",
   "place": "post",
   "who": "them",
   "en": "It should take about two weeks.",
   "ko": "2주 정도 걸릴 거예요.",
   "when": "배송 기간 안내.",
   "sound": "",
   "reply": "",
   "spk": "man"
  },
  {
   "id": "renew",
   "place": "office",
   "who": "me",
   "en": "I'm here to renew my health card.",
   "ko": "건강카드 갱신하러 왔어요.",
   "when": "ServiceOntario 같은 곳에서. health card 대신 다른 서류 이름도 돼요.",
   "sound": "아임 히어 투 리뉴 마이 헬스 카드.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "address",
   "place": "office",
   "who": "me",
   "en": "I'd like to change my address.",
   "ko": "주소를 바꾸고 싶어요.",
   "when": "이사한 뒤에.",
   "sound": "아이드 라이크 투 체인지 마이 어드레스.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "whichline",
   "place": "office",
   "who": "me",
   "en": "Which line should I be in?",
   "ko": "어느 줄에 서야 해요?",
   "when": "줄이 여러 개일 때.",
   "sound": "위치 라인 슈드 아이 비 인?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "form",
   "place": "office",
   "who": "me",
   "en": "Do I need to fill out a form?",
   "ko": "서류를 작성해야 하나요?",
   "when": "fill out = (서류를) 작성하다.",
   "sound": "두 아이 니드 투 필 아웃 어 폼?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "documents",
   "place": "office",
   "who": "me",
   "en": "What documents do I need?",
   "ko": "어떤 서류가 필요해요?",
   "when": "준비물을 물을 때.",
   "sound": "왓 다큐먼츠 두 아이 니드?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "number",
   "place": "office",
   "who": "them",
   "en": "Please take a number and have a seat.",
   "ko": "번호표 뽑고 앉아 계세요.",
   "when": "들어가자마자 듣는 말이에요.",
   "sound": "",
   "reply": "",
   "spk": "india_m"
  },
  {
   "id": "next",
   "place": "office",
   "who": "them",
   "en": "Next, please!",
   "ko": "다음 분이요!",
   "when": "내 차례가 됐다는 뜻이에요.",
   "sound": "",
   "reply": "",
   "spk": "woman"
  },
  {
   "id": "proof",
   "place": "office",
   "who": "them",
   "en": "Do you have proof of address?",
   "ko": "주소를 증명할 서류 있으세요?",
   "when": "은행 명세서나 고지서를 보여 주면 돼요.",
   "sound": "",
   "reply": "Is a bank statement okay?",
   "spk": "india_m"
  },
  {
   "id": "camera",
   "place": "office",
   "who": "them",
   "en": "Please look at the camera.",
   "ko": "카메라를 봐 주세요.",
   "when": "사진 찍을 때.",
   "sound": "",
   "reply": "",
   "spk": "woman"
  },
  {
   "id": "mail",
   "place": "office",
   "who": "them",
   "en": "You'll get it in the mail.",
   "ko": "우편으로 받으실 거예요.",
   "when": "새 카드가 집으로 온다는 뜻이에요.",
   "sound": "",
   "reply": "",
   "spk": "india_m"
  },
  {
   "id": "howsit",
   "place": "smalltalk",
   "who": "me",
   "en": "Hi, how's it going?",
   "ko": "안녕하세요, 잘 지내세요?",
   "when": "캐나다식 가벼운 인사예요.",
   "sound": "하이, 하우즈 잇 고잉?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "notbad",
   "place": "smalltalk",
   "who": "me",
   "en": "Not bad, you?",
   "ko": "나쁘지 않아요, 그쪽은요?",
   "when": "\"How's it going?\"에 대한 가장 흔한 대답.",
   "sound": "낫 배드, 유?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "socold",
   "place": "smalltalk",
   "who": "me",
   "en": "It's so cold today!",
   "ko": "오늘 정말 춥네요!",
   "when": "캐나다에서 가장 무난한 스몰톡은 날씨예요.",
   "sound": "잇츠 쏘우 코울드 투데이!",
   "reply": "",
   "spk": ""
  },
  {
   "id": "niceday",
   "place": "smalltalk",
   "who": "me",
   "en": "Nice day, isn't it?",
   "ko": "날씨 좋죠?",
   "when": "날씨가 좋은 날 먼저 건네는 말.",
   "sound": "나이스 데이, 이즌 잇?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "weekend",
   "place": "smalltalk",
   "who": "me",
   "en": "Have a good weekend!",
   "ko": "주말 잘 보내세요!",
   "when": "금요일에 헤어질 때.",
   "sound": "해브 어 굿 위켄드!",
   "reply": "",
   "spk": ""
  },
  {
   "id": "youtoo",
   "place": "smalltalk",
   "who": "me",
   "en": "You too!",
   "ko": "그쪽도요!",
   "when": "상대가 좋은 하루 보내라고 하면 이렇게 답해요.",
   "sound": "유 투!",
   "reply": "",
   "spk": ""
  },
  {
   "id": "goingup",
   "place": "smalltalk",
   "who": "them",
   "en": "Going up?",
   "ko": "올라가세요?",
   "when": "엘리베이터 문 앞에서.",
   "sound": "",
   "reply": "Yes, thanks.",
   "spk": "grandpa"
  },
  {
   "id": "floor",
   "place": "smalltalk",
   "who": "them",
   "en": "Which floor?",
   "ko": "몇 층 가세요?",
   "when": "엘리베이터 버튼 앞에 선 사람이 물어봐요.",
   "sound": "",
   "reply": "Twelve, please.",
   "spk": "grandma"
  },
  {
   "id": "coldenough",
   "place": "smalltalk",
   "who": "them",
   "en": "Cold enough for you?",
   "ko": "꽤 춥죠?",
   "when": "캐나다 사람들이 겨울에 즐겨 하는 농담 섞인 인사예요.",
   "sound": "",
   "reply": "Yes, it's freezing!",
   "spk": "grandpa"
  },
  {
   "id": "plans",
   "place": "smalltalk",
   "who": "them",
   "en": "Any plans for the weekend?",
   "ko": "주말에 계획 있어요?",
   "when": "금요일에 자주 듣는 질문.",
   "sound": "",
   "reply": "Not really, just relaxing.",
   "spk": "french_f"
  },
  {
   "id": "takecare",
   "place": "smalltalk",
   "who": "them",
   "en": "Take care!",
   "ko": "잘 가요!",
   "when": "헤어질 때 인사.",
   "sound": "",
   "reply": "You too!",
   "spk": "grandma"
  },
  {
   "id": "subway",
   "place": "street",
   "who": "me",
   "en": "Excuse me, where's the subway station?",
   "ko": "실례지만, 지하철역이 어디예요?",
   "when": "길을 물을 때. subway station 대신 가고 싶은 곳을 넣어요.",
   "sound": "익스큐즈 미, 웨어즈 더 써브웨이 스테이션?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "rightbus",
   "place": "street",
   "who": "me",
   "en": "Is this the right bus for Finch?",
   "ko": "이거 핀치 가는 버스 맞아요?",
   "when": "버스에 타면서 기사님께. Finch 대신 가는 곳 이름을 넣어요.",
   "sound": "이즈 디스 더 라잇 버스 포 핀치?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "far",
   "place": "street",
   "who": "me",
   "en": "Is it far from here?",
   "ko": "여기서 멀어요?",
   "when": "거리를 물을 때.",
   "sound": "이즈 잇 파 프롬 히어?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "getoff",
   "place": "street",
   "who": "me",
   "en": "Could you tell me when to get off?",
   "ko": "어디서 내려야 하는지 알려 주실래요?",
   "when": "버스 기사님께 부탁할 때.",
   "sound": "쿠쥬 텔 미 웬 투 겟 오프?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "excuse",
   "place": "street",
   "who": "me",
   "en": "Sorry, excuse me.",
   "ko": "죄송해요, 좀 지나갈게요.",
   "when": "사람들 사이로 지나가거나 살짝 부딪혔을 때.",
   "sound": "쏘리, 익스큐즈 미.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "straight",
   "place": "street",
   "who": "them",
   "en": "Go straight and turn left at the lights.",
   "ko": "쭉 가서 신호등에서 왼쪽으로 도세요.",
   "when": "lights = 신호등.",
   "sound": "",
   "reply": "",
   "spk": "grandpa"
  },
  {
   "id": "fivemin",
   "place": "street",
   "who": "them",
   "en": "It's about a five-minute walk.",
   "ko": "걸어서 5분 정도예요.",
   "when": "거리를 알려 주는 말.",
   "sound": "",
   "reply": "",
   "spk": "teen_m"
  },
  {
   "id": "onright",
   "place": "street",
   "who": "them",
   "en": "It's on your right.",
   "ko": "오른쪽에 있어요.",
   "when": "on your left면 왼쪽.",
   "sound": "",
   "reply": "",
   "spk": "woman"
  },
  {
   "id": "tapcard",
   "place": "street",
   "who": "them",
   "en": "Just tap your card here.",
   "ko": "여기에 카드 대세요.",
   "when": "버스·지하철 탈 때 카드 단말기에.",
   "sound": "",
   "reply": "",
   "spk": "man"
  },
  {
   "id": "laststop",
   "place": "street",
   "who": "them",
   "en": "This is the last stop.",
   "ko": "여기가 종점이에요.",
   "when": "모두 내려야 해요.",
   "sound": "",
   "reply": "",
   "spk": "man"
  },
  {
   "id": "doors",
   "place": "street",
   "who": "them",
   "en": "Please stand clear of the doors.",
   "ko": "문에서 떨어져 주세요.",
   "when": "지하철 안내 방송. 문이 곧 닫힌다는 뜻이에요.",
   "sound": "",
   "reply": "",
   "spk": "std"
  },
  {
   "id": "calling",
   "place": "phone",
   "who": "me",
   "en": "Hi, I'm calling about my appointment.",
   "ko": "예약 때문에 전화드렸어요.",
   "when": "병원·은행에 전화할 때 첫마디.",
   "sound": "하이, 아임 콜링 어바웃 마이 어포인트먼트.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "canthear",
   "place": "phone",
   "who": "me",
   "en": "Sorry, I can't hear you very well.",
   "ko": "죄송해요, 잘 안 들려요.",
   "when": "전화 소리가 작거나 끊길 때.",
   "sound": "쏘리, 아이 캔트 히어 유 베리 웰.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "text",
   "place": "phone",
   "who": "me",
   "en": "Can you text me instead?",
   "ko": "대신 문자로 보내 주실 수 있어요?",
   "when": "전화 영어가 어려울 때 아주 좋은 방법이에요.",
   "sound": "캔 유 텍스트 미 인스테드?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "lastname",
   "place": "phone",
   "who": "me",
   "en": "My last name is Kim. K-I-M.",
   "ko": "제 성은 김이에요. K, I, M.",
   "when": "이름은 철자까지 불러 주면 정확해요.",
   "sound": "마이 래스트 네임 이즈 킴. 케이, 아이, 엠.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "dob",
   "place": "phone",
   "who": "them",
   "en": "Can I get your date of birth?",
   "ko": "생년월일 알려 주시겠어요?",
   "when": "본인 확인할 때 꼭 물어봐요. 월-일-연도 순서로 말해요.",
   "sound": "",
   "reply": "",
   "spk": "india_f"
  },
  {
   "id": "spellname",
   "place": "phone",
   "who": "them",
   "en": "Can you spell your last name?",
   "ko": "성 철자를 불러 주시겠어요?",
   "when": "알파벳 하나씩 말하면 돼요.",
   "sound": "",
   "reply": "K-I-M.",
   "spk": "india_f"
  },
  {
   "id": "hold",
   "place": "phone",
   "who": "them",
   "en": "Please hold.",
   "ko": "잠시만 기다려 주세요.",
   "when": "끊지 말고 기다리라는 뜻이에요.",
   "sound": "",
   "reply": "",
   "spk": "woman"
  },
  {
   "id": "whom",
   "place": "phone",
   "who": "them",
   "en": "Who am I speaking with?",
   "ko": "누구시죠?",
   "when": "전화 건 사람 이름을 묻는 말이에요.",
   "sound": "",
   "reply": "This is Kim.",
   "spk": "woman"
  },
  {
   "id": "callback",
   "place": "phone",
   "who": "them",
   "en": "We'll give you a call back.",
   "ko": "다시 전화드릴게요.",
   "when": "나중에 연락 준다는 뜻이에요.",
   "sound": "",
   "reply": "Okay, thank you.",
   "spk": "india_f"
  },
  {
   "id": "x_notgood",
   "place": "rescue",
   "who": "me",
   "en": "Sorry, my English isn't very good.",
   "ko": "죄송해요, 제 영어가 서툴러요.",
   "when": "먼저 말해 두면 상대가 쉬운 말로 천천히 해 줘요.",
   "sound": "쏘리, 마이 잉글리시 이즌트 베리 굿.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_differ",
   "place": "rescue",
   "who": "me",
   "en": "Could you say it in a different way?",
   "ko": "다른 말로 말씀해 주시겠어요?",
   "when": "같은 말을 반복해도 모를 때. 쉬운 단어로 바꿔 달라는 뜻이에요.",
   "sound": "쿠쥬 세이 잇 인 어 디퍼런트 웨이?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_right",
   "place": "rescue",
   "who": "me",
   "en": "Is this right?",
   "ko": "이거 맞아요?",
   "when": "서류를 쓰거나 길을 확인할 때.",
   "sound": "이즈 디스 라잇?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_onemore",
   "place": "rescue",
   "who": "me",
   "en": "One more time, please.",
   "ko": "한 번만 더요.",
   "when": "가장 짧게 다시 말해 달라고 할 때.",
   "sound": "원 모어 타임, 플리즈.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_icecapp",
   "place": "cafe",
   "who": "me",
   "en": "Can I get a large Iced Capp?",
   "ko": "라지 아이스캡 하나 주세요.",
   "when": "아이스캡 = 팀홀튼의 달콤한 아이스 커피 음료.",
   "sound": "캔 아이 겟 어 라지 아이스드 캡?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_bagel",
   "place": "cafe",
   "who": "me",
   "en": "Can I get a toasted bagel with cream cheese?",
   "ko": "크림치즈 바른 구운 베이글 하나 주세요.",
   "when": "팀홀튼 아침 단골 메뉴예요.",
   "sound": "캔 아이 겟 어 토스티드 베이글 위드 크림 치즈?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_napkins",
   "place": "cafe",
   "who": "me",
   "en": "Could I get some more napkins?",
   "ko": "냅킨 좀 더 주실래요?",
   "when": "napkins 대신 sugar, cream 등을 넣어도 돼요.",
   "sound": "쿠다이 겟 썸 모어 냅킨즈?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_inback",
   "place": "grocery",
   "who": "me",
   "en": "Do you have any more in the back?",
   "ko": "창고에 더 있어요?",
   "when": "진열대에 물건이 없을 때.",
   "sound": "두 유 해브 애니 모어 인 더 백?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_senior",
   "place": "grocery",
   "who": "me",
   "en": "Is there a seniors' discount?",
   "ko": "어르신 할인 있어요?",
   "when": "약국·마트에 '시니어 데이'가 있는 곳이 많아요.",
   "sound": "이즈 데어 어 시니어즈 디스카운트?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_pricecheck",
   "place": "grocery",
   "who": "me",
   "en": "Can I get a price check on this?",
   "ko": "이거 가격 좀 확인해 주실래요?",
   "when": "가격표와 계산 금액이 다를 때.",
   "sound": "캔 아이 겟 어 프라이스 첵 온 디스?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_water",
   "place": "restaurant",
   "who": "me",
   "en": "Just water, please.",
   "ko": "그냥 물 주세요.",
   "when": "음료를 물어볼 때. 물은 무료예요.",
   "sound": "저스트 워터, 플리즈.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_noonion",
   "place": "restaurant",
   "who": "me",
   "en": "Can I get this without onions?",
   "ko": "양파 빼고 주실 수 있어요?",
   "when": "onions 대신 빼고 싶은 재료를 넣어요.",
   "sound": "캔 아이 겟 디스 위다웃 어니언즈?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_delicious",
   "place": "restaurant",
   "who": "me",
   "en": "Everything was delicious, thank you.",
   "ko": "다 맛있었어요, 감사해요.",
   "when": "계산하고 나갈 때 한마디.",
   "sound": "에브리띵 워즈 딜리셔스, 땡큐.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_dizzy",
   "place": "clinic",
   "who": "me",
   "en": "I feel dizzy.",
   "ko": "어지러워요.",
   "when": "dizzy = 어지러운.",
   "sound": "아이 필 디지.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_cough",
   "place": "clinic",
   "who": "me",
   "en": "I have a bad cough.",
   "ko": "기침이 심해요.",
   "when": "a bad cold면 '감기가 심해요'.",
   "sound": "아이 해브 어 배드 커프.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_foodq",
   "place": "clinic",
   "who": "me",
   "en": "Do I need to take this with food?",
   "ko": "이거 식후에 먹어야 해요?",
   "when": "약 받을 때 물어보면 좋아요.",
   "sound": "두 아이 니드 투 테이크 디스 위드 푸드?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_refill",
   "place": "clinic",
   "who": "me",
   "en": "Can I get a refill?",
   "ko": "같은 약 다시 받을 수 있어요?",
   "when": "refill = 같은 처방약을 다시 받는 것.",
   "sound": "캔 아이 겟 어 리필?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_whatfee",
   "place": "bank",
   "who": "me",
   "en": "What's the fee for this?",
   "ko": "이거 수수료가 얼마예요?",
   "when": "송금·환전할 때 꼭 물어보세요.",
   "sound": "왓츠 더 피 포 디스?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_balance",
   "place": "bank",
   "who": "me",
   "en": "I'd like to check my balance.",
   "ko": "잔액 확인하고 싶어요.",
   "when": "balance = 잔액.",
   "sound": "아이드 라이크 투 첵 마이 밸런스.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_atm",
   "place": "bank",
   "who": "me",
   "en": "Can you help me with the ATM?",
   "ko": "ATM 사용 좀 도와주실래요?",
   "when": "은행 안 ATM에서 직원에게.",
   "sound": "캔 유 헬프 미 위드 디 에이티엠?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_howmuchsend",
   "place": "post",
   "who": "me",
   "en": "How much is it to send this?",
   "ko": "이거 보내는 데 얼마예요?",
   "when": "무게와 나라에 따라 달라요.",
   "sound": "하우 머치 이즈 잇 투 센드 디스?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_stamps",
   "place": "post",
   "who": "me",
   "en": "Can I get some stamps?",
   "ko": "우표 좀 살 수 있어요?",
   "when": "카드나 편지 보낼 때.",
   "sound": "캔 아이 겟 썸 스탬프스?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_online",
   "place": "office",
   "who": "me",
   "en": "Can I make an appointment online?",
   "ko": "온라인으로 예약할 수 있어요?",
   "when": "서비스온타리오는 온라인 예약이 돼요.",
   "sound": "캔 아이 메이크 언 어포인트먼트 온라인?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_wheresign",
   "place": "office",
   "who": "me",
   "en": "Where do I sign?",
   "ko": "어디에 서명해요?",
   "when": "서류를 받았을 때.",
   "sound": "웨어 두 아이 사인?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_korea",
   "place": "smalltalk",
   "who": "me",
   "en": "I'm from Korea.",
   "ko": "한국에서 왔어요.",
   "when": "출신을 물어볼 때.",
   "sound": "아임 프롬 코리아.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_moved",
   "place": "smalltalk",
   "who": "me",
   "en": "I just moved in.",
   "ko": "막 이사 왔어요.",
   "when": "새 이웃에게 인사할 때.",
   "sound": "아이 저스트 무브드 인.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_nicemeet",
   "place": "smalltalk",
   "who": "me",
   "en": "Nice to meet you.",
   "ko": "만나서 반가워요.",
   "when": "처음 만났을 때. 대답은 'Nice to meet you too.'",
   "sound": "나이스 투 밋 유.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_beautiful",
   "place": "smalltalk",
   "who": "me",
   "en": "It's beautiful out today!",
   "ko": "오늘 날씨 정말 좋네요!",
   "when": "out = 밖. 날씨 이야기는 캐나다에서 최고의 인사예요.",
   "sound": "잇츠 뷰티풀 아웃 투데이!",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_downtown",
   "place": "street",
   "who": "me",
   "en": "Does this bus go downtown?",
   "ko": "이 버스 다운타운 가요?",
   "when": "downtown = 시내 중심가.",
   "sound": "더즈 디스 버스 고우 다운타운?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_presto",
   "place": "street",
   "who": "me",
   "en": "Where can I buy a Presto card?",
   "ko": "프레스토 카드 어디서 사요?",
   "when": "프레스토 = 토론토 버스·지하철 교통카드.",
   "sound": "웨어 캔 아이 바이 어 프레스토 카드?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_lost",
   "place": "street",
   "who": "me",
   "en": "Can you help me? I'm lost.",
   "ko": "좀 도와주실래요? 길을 잃었어요.",
   "when": "길을 잃었을 때 주변 사람에게.",
   "sound": "캔 유 헬프 미? 아임 로스트.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_anyway",
   "place": "street",
   "who": "me",
   "en": "Thanks anyway.",
   "ko": "어쨌든 고마워요.",
   "when": "도와주려 했지만 못 도와준 사람에게.",
   "sound": "땡스 에니웨이.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_callback",
   "place": "phone",
   "who": "me",
   "en": "Could you call me back later?",
   "ko": "나중에 다시 전화 주실래요?",
   "when": "지금 통화가 어려울 때.",
   "sound": "쿠쥬 콜 미 백 레이터?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_cancel",
   "place": "phone",
   "who": "me",
   "en": "I'd like to cancel my appointment.",
   "ko": "예약을 취소하고 싶어요.",
   "when": "못 가게 되면 미리 전화해요. 안 하면 요금을 받는 곳도 있어요.",
   "sound": "아이드 라이크 투 캔슬 마이 어포인트먼트.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_change",
   "place": "phone",
   "who": "me",
   "en": "I'd like to change my appointment.",
   "ko": "예약을 바꾸고 싶어요.",
   "when": "날짜를 옮길 때.",
   "sound": "아이드 라이크 투 체인지 마이 어포인트먼트.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "s_return",
   "place": "shopping",
   "who": "me",
   "en": "I'd like to return this.",
   "ko": "이거 반품하고 싶어요.",
   "when": "영수증을 꼭 가져가세요.",
   "sound": "아이드 라이크 투 리턴 디스.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "s_exchange",
   "place": "shopping",
   "who": "me",
   "en": "Can I exchange this for a different size?",
   "ko": "다른 사이즈로 교환할 수 있어요?",
   "when": "옷·신발 사이즈가 안 맞을 때.",
   "sound": "캔 아이 익스체인지 디스 포 어 디퍼런트 사이즈?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "s_fitting",
   "place": "shopping",
   "who": "me",
   "en": "Where's the fitting room?",
   "ko": "탈의실 어디예요?",
   "when": "fitting room = 옷 입어 보는 곳.",
   "sound": "웨어즈 더 피팅 룸?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "s_looking",
   "place": "shopping",
   "who": "me",
   "en": "I'm just looking, thanks.",
   "ko": "그냥 구경하는 중이에요.",
   "when": "직원이 도와드릴까요 하고 물을 때.",
   "sound": "아임 저스트 루킹, 땡스.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "s_howmuch",
   "place": "shopping",
   "who": "me",
   "en": "How much is this?",
   "ko": "이거 얼마예요?",
   "when": "가격표가 없을 때.",
   "sound": "하우 머치 이즈 디스?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "s_black",
   "place": "shopping",
   "who": "me",
   "en": "Do you have this in black?",
   "ko": "이거 검은색 있어요?",
   "when": "black 대신 다른 색 이름을 넣어요.",
   "sound": "두 유 해브 디스 인 블랙?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "h_leak",
   "place": "home",
   "who": "me",
   "en": "My sink is leaking.",
   "ko": "싱크대에서 물이 새요.",
   "when": "관리실(super)에 전화할 때.",
   "sound": "마이 싱크 이즈 리킹.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "h_heat",
   "place": "home",
   "who": "me",
   "en": "The heat isn't working.",
   "ko": "난방이 안 돼요.",
   "when": "겨울에는 급하게 고쳐 줘야 해요.",
   "sound": "더 힛 이즌트 워킹.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "h_when",
   "place": "home",
   "who": "me",
   "en": "When can you come to fix it?",
   "ko": "언제 고치러 오실 수 있어요?",
   "when": "수리 날짜를 물을 때.",
   "sound": "웬 캔 유 컴 투 픽스 잇?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "h_door",
   "place": "home",
   "who": "me",
   "en": "Can you leave it at the door?",
   "ko": "문 앞에 두고 가 주실래요?",
   "when": "배달 기사에게.",
   "sound": "캔 유 리브 잇 앳 더 도어?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "h_who",
   "place": "home",
   "who": "me",
   "en": "Who is it?",
   "ko": "누구세요?",
   "when": "누가 문을 두드릴 때.",
   "sound": "후 이즈 잇?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "h_unit",
   "place": "home",
   "who": "me",
   "en": "I live in unit twelve-oh-three.",
   "ko": "1203호에 살아요.",
   "when": "호수는 두 자리씩 끊어 읽어요. 0은 '오'.",
   "sound": "아이 리브 인 유닛 트웰브 오 쓰리.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "e_ambulance",
   "place": "emergency",
   "who": "me",
   "en": "I need an ambulance.",
   "ko": "구급차가 필요해요.",
   "when": "911에 전화해서 가장 먼저 할 말.",
   "sound": "아이 니드 언 앰뷸런스.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "e_help",
   "place": "emergency",
   "who": "me",
   "en": "Please help me!",
   "ko": "도와주세요!",
   "when": "급할 때 크게 말해요.",
   "sound": "플리즈 헬프 미!",
   "reply": "",
   "spk": ""
  },
  {
   "id": "e_fell",
   "place": "emergency",
   "who": "me",
   "en": "Someone fell and can't get up.",
   "ko": "누가 넘어져서 못 일어나요.",
   "when": "어르신이 넘어졌을 때.",
   "sound": "썸원 펠 앤 캔트 겟 업.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "e_breathe",
   "place": "emergency",
   "who": "me",
   "en": "I can't breathe well.",
   "ko": "숨쉬기가 힘들어요.",
   "when": "아주 위급한 증상이에요. 바로 911에 전화하세요.",
   "sound": "아이 캔트 브리드 웰.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "e_address",
   "place": "emergency",
   "who": "me",
   "en": "My address is one twenty-three Main Street.",
   "ko": "제 주소는 메인 스트리트 123번지예요.",
   "when": "번지수는 '원 투웨니 쓰리'처럼 끊어 읽어요. 내 주소로 바꿔 연습하세요.",
   "sound": "마이 어드레스 이즈 원 트웨니 쓰리 메인 스트릿.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "e_allergic",
   "place": "emergency",
   "who": "me",
   "en": "I'm allergic to penicillin.",
   "ko": "페니실린 알레르기가 있어요.",
   "when": "penicillin 대신 내 알레르기를 넣어요.",
   "sound": "아임 얼러직 투 페니실린.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "t_address",
   "place": "taxi",
   "who": "me",
   "en": "Can you take me to this address?",
   "ko": "이 주소로 가 주세요.",
   "when": "주소를 보여 주면서.",
   "sound": "캔 유 테이크 미 투 디스 어드레스?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "t_dropoff",
   "place": "taxi",
   "who": "me",
   "en": "You can drop me off here.",
   "ko": "여기서 내려 주세요.",
   "when": "drop off = 내려 주다.",
   "sound": "유 캔 드랍 미 오프 히어.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "t_howlong",
   "place": "taxi",
   "who": "me",
   "en": "How long will it take to get there?",
   "ko": "거기까지 얼마나 걸려요?",
   "when": "시간이 궁금할 때.",
   "sound": "하우 롱 윌 잇 테이크 투 겟 데어?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "t_trunk",
   "place": "taxi",
   "who": "me",
   "en": "Could you open the trunk, please?",
   "ko": "트렁크 좀 열어 주실래요?",
   "when": "짐이 있을 때.",
   "sound": "쿠쥬 오픈 더 트렁크, 플리즈?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "t_card",
   "place": "taxi",
   "who": "me",
   "en": "Can I pay by card?",
   "ko": "카드로 내도 돼요?",
   "when": "택시에서 내리기 전에.",
   "sound": "캔 아이 페이 바이 카드?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "c_trim",
   "place": "hair",
   "who": "me",
   "en": "Just a trim, please.",
   "ko": "다듬기만 해 주세요.",
   "when": "trim = 끝만 살짝 자르기.",
   "sound": "저스트 어 트림, 플리즈.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "c_notshort",
   "place": "hair",
   "who": "me",
   "en": "Not too short, please.",
   "ko": "너무 짧지 않게 해 주세요.",
   "when": "가장 많이 쓰는 부탁이에요.",
   "sound": "낫 투 숏, 플리즈.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "c_book",
   "place": "hair",
   "who": "me",
   "en": "Can I book a haircut for Friday?",
   "ko": "금요일에 커트 예약할 수 있어요?",
   "when": "Friday 대신 원하는 요일을 넣어요.",
   "sound": "캔 아이 북 어 헤어컷 포 프라이데이?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "c_sides",
   "place": "hair",
   "who": "me",
   "en": "A little shorter on the sides.",
   "ko": "옆은 조금 더 짧게요.",
   "when": "on the top = 윗머리, in the back = 뒷머리.",
   "sound": "어 리를 쇼터 온 더 사이즈.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "c_great",
   "place": "hair",
   "who": "me",
   "en": "It looks great, thank you!",
   "ko": "아주 좋아요, 고마워요!",
   "when": "끝나고 거울을 보며.",
   "sound": "잇 룩스 그레잇, 땡큐!",
   "reply": "",
   "spk": ""
  },
  {
   "id": "l_card",
   "place": "library",
   "who": "me",
   "en": "How do I get a library card?",
   "ko": "도서관 카드 어떻게 만들어요?",
   "when": "토론토 도서관 카드는 무료예요.",
   "sound": "하우 두 아이 겟 어 라이브러리 카드?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "l_borrow",
   "place": "library",
   "who": "me",
   "en": "I'd like to borrow this book.",
   "ko": "이 책 빌리고 싶어요.",
   "when": "borrow = 빌리다.",
   "sound": "아이드 라이크 투 바로우 디스 북.",
   "reply": "",
   "spk": ""
  },
  {
   "id": "l_seniors",
   "place": "library",
   "who": "me",
   "en": "Do you have any programs for seniors?",
   "ko": "어르신 프로그램 있어요?",
   "when": "주민센터에 무료·저렴한 프로그램이 많아요.",
   "sound": "두 유 해브 애니 프로그램즈 포 시니어즈?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "l_esl",
   "place": "library",
   "who": "me",
   "en": "Is there a free English class?",
   "ko": "무료 영어 수업 있어요?",
   "when": "ESL = 이민자를 위한 영어 수업.",
   "sound": "이즈 데어 어 프리 잉글리시 클래스?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "l_due",
   "place": "library",
   "who": "me",
   "en": "When is it due?",
   "ko": "언제까지 반납해요?",
   "when": "due = 기한.",
   "sound": "웬 이즈 잇 듀?",
   "reply": "",
   "spk": ""
  },
  {
   "id": "x_noworry",
   "place": "rescue",
   "who": "them",
   "en": "No worries, take your time.",
   "ko": "괜찮아요, 천천히 하세요.",
   "when": "젊은 직원들이 자주 해요. No worries = 괜찮아요.",
   "sound": "",
   "reply": "Thank you.",
   "spk": "teen_f"
  },
  {
   "id": "x_writeit",
   "place": "rescue",
   "who": "them",
   "en": "Do you want me to write it down?",
   "ko": "적어 드릴까요?",
   "when": "못 알아들은 걸 알아채고 먼저 물어봐 줄 때.",
   "sound": "",
   "reply": "Yes, please. Thank you.",
   "spk": "grandma"
  },
  {
   "id": "x_getya",
   "place": "cafe",
   "who": "them",
   "en": "Hey! What can I get ya?",
   "ko": "안녕하세요! 뭐 드릴까요?",
   "when": "10대 직원들은 'you'를 '야'처럼 짧게 말해요. 빨라도 뜻은 같아요.",
   "sound": "",
   "reply": "Can I get a medium double-double?",
   "spk": "teen_f"
  },
  {
   "id": "x_allset",
   "place": "cafe",
   "who": "them",
   "en": "You're all set!",
   "ko": "다 됐어요!",
   "when": "계산이나 주문이 끝났다는 뜻이에요.",
   "sound": "",
   "reply": "Thanks!",
   "spk": "teen_m"
  },
  {
   "id": "x_everything",
   "place": "cafe",
   "who": "them",
   "en": "Is that everything for you today?",
   "ko": "오늘은 이게 다세요?",
   "when": "'Anything else?'와 같은 뜻이에요.",
   "sound": "",
   "reply": "Yes, that's it.",
   "spk": "teen_f"
  },
  {
   "id": "x_endcounter",
   "place": "cafe",
   "who": "them",
   "en": "Your order will be ready at the end of the counter.",
   "ko": "주문하신 건 카운터 끝에서 받으시면 돼요.",
   "when": "음료 받는 곳을 알려 주는 말이에요.",
   "sound": "",
   "reply": "Okay, thanks.",
   "spk": "teen_m"
  },
  {
   "id": "x_foodbank",
   "place": "grocery",
   "who": "them",
   "en": "Would you like to donate to the food bank today?",
   "ko": "오늘 푸드뱅크에 기부하시겠어요?",
   "when": "계산할 때 자주 물어봐요. 안 해도 괜찮아요.",
   "sound": "",
   "reply": "Not today, thanks.",
   "spk": "latin_f"
  },
  {
   "id": "x_allout",
   "place": "grocery",
   "who": "them",
   "en": "Sorry, we're all out of that.",
   "ko": "죄송해요, 그거 다 떨어졌어요.",
   "when": "all out = 재고가 없다는 뜻.",
   "sound": "",
   "reply": "Oh, okay. Thanks.",
   "spk": "teen_m"
  },
  {
   "id": "x_aisle",
   "place": "grocery",
   "who": "them",
   "en": "It's in aisle five.",
   "ko": "5번 통로에 있어요.",
   "when": "aisle(아일) = 진열대 사이 통로.",
   "sound": "",
   "reply": "Thank you.",
   "spk": "china_f"
  },
  {
   "id": "x_cashback",
   "place": "grocery",
   "who": "them",
   "en": "Do you want any cash back?",
   "ko": "현금 좀 찾아 가실래요?",
   "when": "데빗카드로 계산하면서 현금을 함께 찾을 수 있어요.",
   "sound": "",
   "reply": "No, thanks.",
   "spk": "teen_f"
  },
  {
   "id": "x_drink",
   "place": "restaurant",
   "who": "them",
   "en": "Can I start you off with something to drink?",
   "ko": "음료부터 드릴까요?",
   "when": "식당에서 자리에 앉으면 먼저 물어봐요.",
   "sound": "",
   "reply": "Just water, please.",
   "spk": "woman"
  },
  {
   "id": "x_still",
   "place": "restaurant",
   "who": "them",
   "en": "Still or sparkling?",
   "ko": "그냥 물이요, 탄산수요?",
   "when": "still = 그냥 물, sparkling = 탄산수.",
   "sound": "",
   "reply": "Still, please.",
   "spk": "teen_f"
  },
  {
   "id": "x_steak",
   "place": "restaurant",
   "who": "them",
   "en": "How would you like your steak?",
   "ko": "스테이크 굽기는 어떻게 해 드릴까요?",
   "when": "rare(덜), medium(중간), well done(바싹).",
   "sound": "",
   "reply": "Medium, please.",
   "spk": "man"
  },
  {
   "id": "x_tip",
   "place": "restaurant",
   "who": "them",
   "en": "You can add a tip on the machine.",
   "ko": "단말기에서 팁을 추가하시면 돼요.",
   "when": "카드 단말기에 팁 비율이 나와요. 보통 15~18%예요.",
   "sound": "",
   "reply": "Okay, thank you.",
   "spk": "teen_m"
  },
  {
   "id": "x_othermed",
   "place": "clinic",
   "who": "them",
   "en": "Are you taking any other medications?",
   "ko": "다른 약 드시는 거 있어요?",
   "when": "약사나 의사가 꼭 물어봐요. 약 목록을 보여 줘도 돼요.",
   "sound": "",
   "reply": "Yes, I'll show you the list.",
   "spk": "india_f"
  },
  {
   "id": "x_breath",
   "place": "clinic",
   "who": "them",
   "en": "Take a deep breath for me.",
   "ko": "숨 크게 들이쉬어 보세요.",
   "when": "청진기로 진찰할 때.",
   "sound": "",
   "reply": "",
   "spk": "man"
  },
  {
   "id": "x_withfood",
   "place": "clinic",
   "who": "them",
   "en": "Take it with food.",
   "ko": "음식과 함께 드세요.",
   "when": "식사하면서, 또는 식후에 먹으라는 뜻이에요.",
   "sound": "",
   "reply": "Okay.",
   "spk": "india_f"
  },
  {
   "id": "x_shortly",
   "place": "clinic",
   "who": "them",
   "en": "The doctor will be with you shortly.",
   "ko": "의사 선생님 곧 오실 거예요.",
   "when": "shortly = 곧.",
   "sound": "",
   "reply": "Thank you.",
   "spk": "phil_f"
  },
  {
   "id": "x_sidefx",
   "place": "clinic",
   "who": "them",
   "en": "If you have any side effects, give us a call.",
   "ko": "부작용이 있으면 전화 주세요.",
   "when": "side effects = 부작용.",
   "sound": "",
   "reply": "Okay, I will.",
   "spk": "india_f"
  },
  {
   "id": "x_chequing",
   "place": "bank",
   "who": "them",
   "en": "Would you like that in your chequing or savings?",
   "ko": "입출금 계좌에 넣을까요, 저축 계좌에 넣을까요?",
   "when": "chequing = 입출금 계좌, savings = 저축 계좌.",
   "sound": "",
   "reply": "Chequing, please.",
   "spk": "china_m"
  },
  {
   "id": "x_insert",
   "place": "bank",
   "who": "them",
   "en": "Please insert your card.",
   "ko": "카드를 넣어 주세요.",
   "when": "insert = 꽂다. tap은 대는 것.",
   "sound": "",
   "reply": "",
   "spk": "china_f"
  },
  {
   "id": "x_confirm",
   "place": "bank",
   "who": "them",
   "en": "Can you confirm your address for me?",
   "ko": "주소 확인해 주시겠어요?",
   "when": "본인 확인할 때 물어봐요.",
   "sound": "",
   "reply": "Sure.",
   "spk": "india_m"
  },
  {
   "id": "x_fee",
   "place": "bank",
   "who": "them",
   "en": "There's a small fee for that.",
   "ko": "그건 수수료가 조금 있어요.",
   "when": "fee = 수수료.",
   "sound": "",
   "reply": "How much is it?",
   "spk": "china_m"
  },
  {
   "id": "x_insure",
   "place": "post",
   "who": "them",
   "en": "Do you want insurance on that?",
   "ko": "보험 드시겠어요?",
   "when": "분실·파손 보험이에요. 비싼 물건만 하면 돼요.",
   "sound": "",
   "reply": "No, thanks.",
   "spk": "latin_f"
  },
  {
   "id": "x_customs",
   "place": "post",
   "who": "them",
   "en": "Can you fill out this customs form?",
   "ko": "이 세관 신고서 작성해 주시겠어요?",
   "when": "해외로 보낼 때 내용물과 가격을 적어요.",
   "sound": "",
   "reply": "Sure. Can you help me?",
   "spk": "man"
  },
  {
   "id": "x_nobody",
   "place": "post",
   "who": "them",
   "en": "We left a notice because no one was home.",
   "ko": "집에 아무도 없어서 안내문을 남겼어요.",
   "when": "택배 기사가 남긴 쪽지를 가지고 우체국에 가요.",
   "sound": "",
   "reply": "",
   "spk": "teen_m"
  },
  {
   "id": "x_screen",
   "place": "office",
   "who": "them",
   "en": "Your number will be called on the screen.",
   "ko": "번호가 화면에 나와요.",
   "when": "번호표를 받고 화면을 보며 기다려요.",
   "sound": "",
   "reply": "Okay, thank you.",
   "spk": "india_m"
  },
  {
   "id": "x_bottom",
   "place": "office",
   "who": "them",
   "en": "Please sign at the bottom.",
   "ko": "맨 아래에 서명해 주세요.",
   "when": "sign = 서명하다.",
   "sound": "",
   "reply": "",
   "spk": "woman"
  },
  {
   "id": "x_weeks",
   "place": "office",
   "who": "them",
   "en": "It'll take about four to six weeks.",
   "ko": "4주에서 6주 정도 걸려요.",
   "when": "카드나 서류가 우편으로 오는 기간이에요.",
   "sound": "",
   "reply": "Okay.",
   "spk": "india_m"
  },
  {
   "id": "x_lovely",
   "place": "smalltalk",
   "who": "them",
   "en": "Oh, isn't it a lovely day, dear?",
   "ko": "어머, 날씨 참 좋지요?",
   "when": "어르신들은 dear(얘야, 자기)라는 말을 다정하게 붙여요.",
   "sound": "",
   "reply": "Yes, it's beautiful!",
   "spk": "grandma"
  },
  {
   "id": "x_carenow",
   "place": "smalltalk",
   "who": "them",
   "en": "You take care now.",
   "ko": "몸 조심하세요.",
   "when": "어르신들이 헤어질 때 하는 인사예요.",
   "sound": "",
   "reply": "You too!",
   "spk": "grandpa"
  },
  {
   "id": "x_sup",
   "place": "smalltalk",
   "who": "them",
   "en": "Hey, what's up?",
   "ko": "안녕, 잘 지내?",
   "when": "10대·젊은 사람 인사. 대답은 'Not much, you?'",
   "sound": "",
   "reply": "Not much, you?",
   "spk": "teen_m"
  },
  {
   "id": "x_newbldg",
   "place": "smalltalk",
   "who": "them",
   "en": "Are you new to the building?",
   "ko": "이 건물에 새로 오셨어요?",
   "when": "엘리베이터에서 처음 만난 이웃이 물어봐요.",
   "sound": "",
   "reply": "Yes, I just moved in.",
   "spk": "grandma"
  },
  {
   "id": "x_myday",
   "place": "smalltalk",
   "who": "them",
   "en": "Back in my day, we walked to school in the snow!",
   "ko": "우리 때는 눈길을 걸어서 학교 다녔어요!",
   "when": "어르신들이 옛날 이야기할 때 쓰는 말 'Back in my day'.",
   "sound": "",
   "reply": "Wow, really?",
   "spk": "grandpa"
  },
  {
   "id": "x_from",
   "place": "smalltalk",
   "who": "them",
   "en": "Where are you from originally?",
   "ko": "원래 어디 출신이세요?",
   "when": "캐나다에서는 아주 흔한 질문이에요. 실례가 아니에요.",
   "sound": "",
   "reply": "I'm from Korea.",
   "spk": "french_f"
  },
  {
   "id": "x_goodeng",
   "place": "smalltalk",
   "who": "them",
   "en": "Your English is really good!",
   "ko": "영어 정말 잘하시네요!",
   "when": "칭찬을 들으면 고맙다고 하면 돼요.",
   "sound": "",
   "reply": "Thank you, I'm still learning.",
   "spk": "grandma"
  },
  {
   "id": "x_ohmygosh",
   "place": "smalltalk",
   "who": "them",
   "en": "Oh my gosh, it's freezing out there!",
   "ko": "세상에, 밖에 엄청 추워요!",
   "when": "freezing = 꽁꽁 얼 만큼 추운. 10대들이 과장해서 자주 말해요.",
   "sound": "",
   "reply": "I know, right?",
   "spk": "teen_f"
  },
  {
   "id": "x_cantmiss",
   "place": "street",
   "who": "them",
   "en": "You can't miss it.",
   "ko": "금방 찾으실 거예요.",
   "when": "길을 알려 준 뒤 덧붙이는 말이에요.",
   "sound": "",
   "reply": "",
   "spk": "grandpa"
  },
  {
   "id": "x_nextstn",
   "place": "street",
   "who": "them",
   "en": "The next station is Finch. Finch Station.",
   "ko": "다음 역은 핀치, 핀치역입니다.",
   "when": "지하철 안내 방송이에요. 역 이름을 두 번 말해요.",
   "sound": "",
   "reply": "",
   "spk": "man"
  },
  {
   "id": "x_noservice",
   "place": "street",
   "who": "them",
   "en": "Sorry, this bus is not in service.",
   "ko": "죄송해요, 이 버스는 운행 안 해요.",
   "when": "차고로 들어가는 버스예요. 다음 버스를 타요.",
   "sound": "",
   "reply": "Oh, okay.",
   "spk": "man"
  },
  {
   "id": "x_notfrom",
   "place": "street",
   "who": "them",
   "en": "Sorry, I'm not from around here.",
   "ko": "죄송해요, 저도 이 동네 사람이 아니에요.",
   "when": "길을 물었는데 모른다고 할 때.",
   "sound": "",
   "reply": "Okay, thanks anyway.",
   "spk": "teen_m"
  },
  {
   "id": "x_online2",
   "place": "phone",
   "who": "them",
   "en": "Your call is important to us. Please stay on the line.",
   "ko": "고객님의 전화는 소중합니다. 끊지 말고 기다려 주세요.",
   "when": "녹음된 안내예요. 끊지 말고 기다리면 돼요.",
   "sound": "",
   "reply": "",
   "spk": "india_f"
  },
  {
   "id": "x_press1",
   "place": "phone",
   "who": "them",
   "en": "For English, press one.",
   "ko": "영어는 1번을 누르세요.",
   "when": "자동 안내. 프랑스어는 2번인 경우가 많아요.",
   "sound": "",
   "reply": "",
   "spk": "woman"
  },
  {
   "id": "x_putonhold",
   "place": "phone",
   "who": "them",
   "en": "Can I put you on hold for a moment?",
   "ko": "잠시 기다려 주시겠어요?",
   "when": "on hold = 전화를 끊지 않고 대기.",
   "sound": "",
   "reply": "Sure.",
   "spk": "india_f"
  },
  {
   "id": "x_phoneno",
   "place": "phone",
   "who": "them",
   "en": "And what's the best number to reach you?",
   "ko": "연락받기 가장 좋은 번호가 뭐예요?",
   "when": "전화번호를 묻는 말이에요.",
   "sound": "",
   "reply": "",
   "spk": "woman"
  },
  {
   "id": "s_finding",
   "place": "shopping",
   "who": "them",
   "en": "Are you finding everything okay?",
   "ko": "잘 찾고 계세요?",
   "when": "가게에 들어가면 직원이 거의 항상 물어봐요.",
   "sound": "",
   "reply": "I'm just looking, thanks.",
   "spk": "teen_f"
  },
  {
   "id": "s_receipt",
   "place": "shopping",
   "who": "them",
   "en": "Do you have the receipt?",
   "ko": "영수증 있으세요?",
   "when": "반품·교환할 때.",
   "sound": "",
   "reply": "Yes, here it is.",
   "spk": "teen_f"
  },
  {
   "id": "s_rewards",
   "place": "shopping",
   "who": "them",
   "en": "Would you like to sign up for our rewards program?",
   "ko": "회원 가입하시겠어요?",
   "when": "rewards program = 포인트 회원.",
   "sound": "",
   "reply": "No, thanks.",
   "spk": "latin_f"
  },
  {
   "id": "s_checkback",
   "place": "shopping",
   "who": "them",
   "en": "Let me check in the back for you.",
   "ko": "창고에 있는지 확인해 볼게요.",
   "when": "찾는 물건이 진열대에 없을 때.",
   "sound": "",
   "reply": "Thank you.",
   "spk": "woman"
  },
  {
   "id": "s_bogo",
   "place": "shopping",
   "who": "them",
   "en": "It's buy one, get one free.",
   "ko": "하나 사면 하나 공짜예요.",
   "when": "BOGO라고도 써요.",
   "sound": "",
   "reply": "Oh, great!",
   "spk": "teen_m"
  },
  {
   "id": "s_thirty",
   "place": "shopping",
   "who": "them",
   "en": "You can return it within thirty days.",
   "ko": "30일 안에 반품하실 수 있어요.",
   "when": "반품 기간을 알려 주는 말.",
   "sound": "",
   "reply": "Okay.",
   "spk": "china_f"
  },
  {
   "id": "h_sendup",
   "place": "home",
   "who": "them",
   "en": "I'll send someone up tomorrow morning.",
   "ko": "내일 아침에 사람 올려 보낼게요.",
   "when": "관리인(super)이 수리 기사를 보낸다는 뜻.",
   "sound": "",
   "reply": "Thank you.",
   "spk": "man"
  },
  {
   "id": "h_alarm",
   "place": "home",
   "who": "them",
   "en": "Just a heads-up, there's a fire alarm test tomorrow.",
   "ko": "미리 알려 드려요, 내일 화재경보 점검이 있어요.",
   "when": "heads-up = 미리 알려 줌.",
   "sound": "",
   "reply": "Okay, thanks for letting me know.",
   "spk": "grandpa"
  },
  {
   "id": "h_delivery",
   "place": "home",
   "who": "them",
   "en": "Hi, I have a delivery for twelve-oh-three.",
   "ko": "안녕하세요, 1203호 배달 왔어요.",
   "when": "인터폰으로 배달 기사가 하는 말.",
   "sound": "",
   "reply": "I'll be right down.",
   "spk": "teen_m"
  },
  {
   "id": "h_signpkg",
   "place": "home",
   "who": "them",
   "en": "Can you sign for this package?",
   "ko": "이 택배 서명해 주시겠어요?",
   "when": "직접 받아야 하는 택배일 때.",
   "sound": "",
   "reply": "Sure.",
   "spk": "phil_f"
  },
  {
   "id": "h_water",
   "place": "home",
   "who": "them",
   "en": "The water will be shut off from nine to twelve.",
   "ko": "9시부터 12시까지 물이 안 나와요.",
   "when": "shut off = 끊기다. 공사 안내문에 자주 나와요.",
   "sound": "",
   "reply": "",
   "spk": "man"
  },
  {
   "id": "h_garbage",
   "place": "home",
   "who": "them",
   "en": "Garbage day is Thursday.",
   "ko": "쓰레기 버리는 날은 목요일이에요.",
   "when": "캐나다는 동네마다 쓰레기 버리는 요일이 정해져 있어요.",
   "sound": "",
   "reply": "Thanks!",
   "spk": "woman"
  },
  {
   "id": "e_what",
   "place": "emergency",
   "who": "them",
   "en": "Nine-one-one, what's your emergency?",
   "ko": "911입니다, 무슨 일이세요?",
   "when": "911에 전화하면 가장 먼저 듣는 말이에요.",
   "sound": "",
   "reply": "I need an ambulance.",
   "spk": "woman"
  },
  {
   "id": "e_where",
   "place": "emergency",
   "who": "them",
   "en": "What's the address of the emergency?",
   "ko": "사고 난 곳 주소가 어떻게 되세요?",
   "when": "주소를 꼭 말해야 해요.",
   "sound": "",
   "reply": "It's one twenty-three Main Street.",
   "spk": "woman"
  },
  {
   "id": "e_breathing",
   "place": "emergency",
   "who": "them",
   "en": "Is the person breathing?",
   "ko": "그 사람 숨 쉬고 있어요?",
   "when": "구급 요원이 상태를 묻는 말.",
   "sound": "",
   "reply": "Yes, he is.",
   "spk": "man"
  },
  {
   "id": "e_way",
   "place": "emergency",
   "who": "them",
   "en": "Stay on the line. Help is on the way.",
   "ko": "끊지 마세요. 구조대가 가고 있어요.",
   "when": "on the way = 가는 중.",
   "sound": "",
   "reply": "Okay.",
   "spk": "woman"
  },
  {
   "id": "e_interp",
   "place": "emergency",
   "who": "them",
   "en": "What language do you speak? I can get an interpreter.",
   "ko": "어떤 언어 하세요? 통역 연결해 드릴게요.",
   "when": "911은 통역을 연결해 줄 수 있어요. 'Korean'이라고 하세요.",
   "sound": "",
   "reply": "Korean, please.",
   "spk": "india_m"
  },
  {
   "id": "t_areyou",
   "place": "taxi",
   "who": "them",
   "en": "Hi, are you Kim?",
   "ko": "안녕하세요, 김 씨 맞으세요?",
   "when": "우버 기사가 이름을 확인해요. 차 번호도 꼭 확인하세요.",
   "sound": "",
   "reply": "Yes, that's me.",
   "spk": "india_m"
  },
  {
   "id": "t_headed",
   "place": "taxi",
   "who": "them",
   "en": "Where are you headed?",
   "ko": "어디로 가세요?",
   "when": "headed = 가는 중인.",
   "sound": "",
   "reply": "Can you take me to this address?",
   "spk": "china_m"
  },
  {
   "id": "t_highway",
   "place": "taxi",
   "who": "them",
   "en": "Do you mind if I take the highway?",
   "ko": "고속도로로 가도 될까요?",
   "when": "Do you mind ~? = ~해도 될까요?",
   "sound": "",
   "reply": "Sure, that's fine.",
   "spk": "india_m"
  },
  {
   "id": "t_herewe",
   "place": "taxi",
   "who": "them",
   "en": "Here we are.",
   "ko": "다 왔어요.",
   "when": "도착했다는 말이에요.",
   "sound": "",
   "reply": "Thank you.",
   "spk": "latin_f"
  },
  {
   "id": "t_step",
   "place": "taxi",
   "who": "them",
   "en": "Watch your step.",
   "ko": "발밑 조심하세요.",
   "when": "차에서 내리거나 계단에서.",
   "sound": "",
   "reply": "",
   "spk": "grandpa"
  },
  {
   "id": "c_today",
   "place": "hair",
   "who": "them",
   "en": "So, what are we doing today?",
   "ko": "자, 오늘은 어떻게 해 드릴까요?",
   "when": "미용사가 처음 묻는 말이에요.",
   "sound": "",
   "reply": "Just a trim, please.",
   "spk": "french_f"
  },
  {
   "id": "c_wash",
   "place": "hair",
   "who": "them",
   "en": "Do you want me to wash your hair first?",
   "ko": "머리 먼저 감겨 드릴까요?",
   "when": "샴푸를 할지 묻는 말.",
   "sound": "",
   "reply": "Yes, please.",
   "spk": "teen_f"
  },
  {
   "id": "c_takeoff",
   "place": "hair",
   "who": "them",
   "en": "How much do you want me to take off?",
   "ko": "얼마나 자를까요?",
   "when": "캐나다는 인치를 써요. 1인치 = 약 2.5cm.",
   "sound": "",
   "reply": "About two inches.",
   "spk": "french_f"
  },
  {
   "id": "c_temp",
   "place": "hair",
   "who": "them",
   "en": "Is the water temperature okay?",
   "ko": "물 온도 괜찮으세요?",
   "when": "머리 감을 때.",
   "sound": "",
   "reply": "Yes, it's fine.",
   "spk": "woman"
  },
  {
   "id": "c_back",
   "place": "hair",
   "who": "them",
   "en": "Do you want to see the back?",
   "ko": "뒤쪽 보여 드릴까요?",
   "when": "거울로 뒷머리를 보여 줄 때.",
   "sound": "",
   "reply": "Yes, please.",
   "spk": "french_f"
  },
  {
   "id": "l_threeweeks",
   "place": "library",
   "who": "them",
   "en": "It's due in three weeks.",
   "ko": "3주 뒤까지 반납하시면 돼요.",
   "when": "반납 기한을 알려 주는 말.",
   "sound": "",
   "reply": "Okay, thank you.",
   "spk": "grandma"
  },
  {
   "id": "l_photoid",
   "place": "library",
   "who": "them",
   "en": "You'll need a photo ID with your address on it.",
   "ko": "주소가 나온 사진 신분증이 필요해요.",
   "when": "운전면허증이나 건강카드처럼.",
   "sound": "",
   "reply": "Here you go.",
   "spk": "woman"
  },
  {
   "id": "l_tuesday",
   "place": "library",
   "who": "them",
   "en": "The ESL class is on Tuesday mornings.",
   "ko": "영어 수업은 화요일 아침이에요.",
   "when": "요일 + mornings = 매주 그 요일 아침.",
   "sound": "",
   "reply": "Can I sign up?",
   "spk": "china_f"
  },
  {
   "id": "l_program",
   "place": "library",
   "who": "them",
   "en": "Are you here for the seniors' program?",
   "ko": "어르신 프로그램 오셨어요?",
   "when": "주민센터 안내 데스크에서.",
   "sound": "",
   "reply": "Yes, I am.",
   "spk": "grandpa"
  },
  {
   "id": "l_quiet",
   "place": "library",
   "who": "them",
   "en": "Could you keep your voice down, please?",
   "ko": "조금만 조용히 해 주시겠어요?",
   "when": "도서관에서 듣는 말이에요.",
   "sound": "",
   "reply": "Oh, sorry.",
   "spk": "teen_m"
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
  "전화가 어려우면 'Can you text me instead?'라고 부탁해 보세요.",
  "가게에서 직원이 'Are you finding everything okay?'라고 하면 'I'm just looking, thanks.'라고 대답해 보세요.",
  "도서관에 가서 'How do I get a library card?'라고 물어보세요. 카드는 무료예요.",
  "미용실에서 'Just a trim, please.'로 부탁해 보세요.",
  "이웃 어르신께 'It's beautiful out today!'라고 날씨 인사를 건네 보세요."
 ]
};
