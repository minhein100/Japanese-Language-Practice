const quizData = [
  {
    question: "(1).「斬新な」の読み方",
    options: ["さんしんな", "せんしんな", "ざんしんな", "ぜんしんな"],
    answer: "ざんしんな"
  },
  {
    question: "(2).「洗練」の読み方",
    options: ["せんとう", "せんれん", "せんらん", "せんこう"],
    answer: "せんれん"
  },
  {
    question: "(3).「間際」の読み方",
    options: ["まぎわ　", "かんさい", "まきわ　", "かんざい"],
    answer: "まぎわ　"
  },
  {
    question: "(4).「極力」の読み方",
    options: ["きょくりょく", "きょうりょく", "きょりょく　", "きょくりき　"],
    answer: "きょくりょく"
  },
  {
    question: "(5).「際立つ」の読み方",
    options: ["きわたつ", "きわだつ", "さいたつ", "さいだつ"],
    answer: "きわだつ"
  },
  {
    question: "(6).「芳しい」の読み方",
    options: ["かんばしい", "まんばしい", "がんばしい", "はんばしい"],
    answer: "かんばしい"
  },
  {
    question: "(7).「芳しい」の類義語",
    options: ["よくない　　", "好ましくない", "望ましくない", "立派な　　　"],
    answer: "立派な　　　"
  },
  {
    question: "(8).「因む」の読み方",
    options: ["のぞむ", "かこむ", "ちなむ", "こばむ"],
    answer: "ちなむ"
  },
  {
    question: "(9).「因む」の類義語",
    options: ["関係のない", "関係のある", "意味のある", "意味のない"],
    answer: "関係のある"
  },
  {
    question: "(10).「彼が最優秀賞を（じゅしょう）された」の「じゅしょう」の漢字は？",
    options: ["重賞", "授賞", "受賞", "重傷"],
    answer: "受賞"
  },
  ];
  
 const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
let currentQuestion = 0;
let score = 0;

function beginTestWith() {
  if(document.getElementById("withAnswer").checked == true) {
    document.getElementById("withAnswer").disabled = true;
    document.getElementById("withoutAnswer").disabled = true;
    flowMsg();
    showQuestionResult();
  }
}

function beginTestWithout() {
  if(document.getElementById("withoutAnswer").checked == true) {
    document.getElementById("withAnswer").disabled = true;
    document.getElementById("withoutAnswer").disabled = true;
    flowMsg();
    showQuestionOnly();
  }
}

function showQuestionResult() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;
  optionsElement.innerHTML = "";

  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectWithAnswer);
  });
}

function showQuestionOnly() {
  const question = quizData[currentQuestion];
  questionElement.innerText = question.question;
  optionsElement.innerHTML = "";

  question.options.forEach(option => {
    const button = document.createElement("button");
    button.innerText = option;
    optionsElement.appendChild(button);
    button.addEventListener("click", selectWithoutAnswer);
  });
}

var msg = "　　　4つの選択肢の中から一番適切なものを選んでください。　　　";
var scr_speed = 400;	//スクロール速度
function flowMsg() {
  document.forms[0].flowMsg.value = msg
  msg = msg.substring(1,msg.length) + msg.substring(0,1);
  flowSpeed = setTimeout("flowMsg()", scr_speed);
}

function selectWithAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;
  if (selectedButton.innerText === answer) {
    score++;
    finishedQuestion = currentQuestion + 1;
    document.getElementById("showResult").value = finishedQuestion + "番。" + "正解です！" + "   Score:" + score + "/" + finishedQuestion;
  }else {
    finishedQuestion = currentQuestion + 1;
    document.getElementById("showResult").value = finishedQuestion + "番。" + "不正解です！" + "   Score:" + score + "/" + finishedQuestion;
  }

  currentQuestion++;

  if (currentQuestion < quizData.length) {
    showQuestionResult();
  } else {
    showResult();
  }
}

function selectWithoutAnswer(e) {
  const selectedButton = e.target;
  const answer = quizData[currentQuestion].answer;
  if (selectedButton.innerText === answer) {
    score++;
  }
  currentQuestion++;
  if (currentQuestion < quizData.length) {
    showQuestionOnly();
  } else {
    showResult();
  }
}

function showResult() {
  if (score < (quizData.length / 2)) {
    multiChoiceArea.innerHTML = `
    <h1>　Test Completed!</h1>
    <p style="font-size:30px; color:red;">　スコア: ${score}/${quizData.length}</p>
    <p style="font-size:20px; color:red; font-weight:bold;">　　残念！もう一度勉強しましょう！</p>`;
  } else if(score >= ((quizData.length / 10) * 8)) {
    multiChoiceArea.innerHTML = `
    <h1>　Test Completed!</h1>
    <p style="font-size:30px; color:green;">　スコア: ${score}/${quizData.length}</p>
    <p style="font-size:20px; color:green; font-weight:bold;">　　おめでとう！よくできました。</p>`;
  } else {
    multiChoiceArea.innerHTML = `
    <h1>　Test Completed!</h1>
    <p style="font-size:30px;">　スコア: ${score}/${quizData.length}</p>
    <p style="font-size:20px; font-weight:bold;">　　満点を目指しましょう！</p>`;
  }
}
