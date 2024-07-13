const quizData = [
    {
      question: "(1). 「統一」の読み方",
      options: ["とういち　", "りゅういち", "とういつ　", "りゅういつ"],
      answer: "とういつ　"
    },
    {
      question: "(2). 「考察」の読み方",
      options: ["こさつ　", "こうさつ", "こうさい", "こさい　"],
      answer: "こうさつ"
    },
    {
      question: "(3).「物事が、その時々の状況によって変わること」の同じ意味の言葉？",
      options: ["流動的", "固定的", "定期的", "主導的"],
      answer: "流動的"
    },
    {
      question: "(4).「曖昧な」の類義語",
      options: ["だんめいな", "あいめいな", "だんまいな", "あいまいな"],
      answer: "あいまいな"
    },
    {
      question: "(5).「作業を取り掛かる 」の「取り掛かる」の言い換えは？",
      options: ["やめる　", "中止する", "終わる　", "始まる　"],
      answer: "始まる　"
    },
    {
      question: "(6).「値札」の読み方",
      options: ["ねぶた", "ねふた", "ねふだ", "ねさつ"],
      answer: "ねふだ"
    },
    {
      question: "(7).「一杯やる」の類義語",
      options: ["頑張る　", "酒を飲む", "努力する", "尊敬する"],
      answer: "酒を飲む"
    },
    {
      question: "(8).「疲労」の読み方",
      options: ["すうろう", "つうろう", "ひろう　", "くろう　"],
      answer: "ひろう　"
    },
    {
      question: "(9).「蓄積」の読み方",
      options: ["ちくせき", "ちくつみ", "ちくづみ", "ちくぜき"],
      answer: "ちくせき"
    },
    {
      question: "(10).「掲載」の読み方",
      options: ["けいさい", "けいざい", "けいせん", "けいさん"],
      answer: "けいさい"
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
