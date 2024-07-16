const quizData = [
    {
      question: "(1). 「無闇に」の読み方",
      options: ["むあんに", "ぶやみに", "むやみに", "ぶあんに"],
      answer: "むやみに"
    },
    {
      question: "(2). 「辞退」の読み方",
      options: ["したい", "じたい", "ちだい", "じだい"],
      answer: "じたい"
    },
    {
      question: "(3).「鍛える」の読み方",
      options: ["こたえる", "きたえる", "そなえる", "とらえる"],
      answer: "きたえる"
    },
    {
      question: "(4).「差し当たり」の類義語",
      options: ["来年　　　", "最近　　　", "こらから　", "今のところ"],
      answer: "今のところ"
    },
    {
      question: "(5).「恒例」の読み方",
      options: ["こうれい", "こうれつ", "これい　", "これつ　"],
      answer: "こうれい"
    },
    {
      question: "(6).「雑草」の読み方",
      options: ["ざつぞう", "ざつそう", "ざっそう", "ざっぞう"],
      answer: "ざっそう"
    },
    {
      question: "(7).「仏壇」の読み方",
      options: ["ぶつたん", "ぶっだん", "ぶったん", "ぶつだん"],
      answer: "ぶつだん"
    },
    {
      question: "(8).「演劇」の読み方",
      options: ["えんげき", "えんげい", "あんげき", "えんげぎ"],
      answer: "えんげき"
    },
    {
      question: "(9).「清書」の読み方",
      options: ["せいしょう", "ししょう　", "ししょ　　", "せいしょ　"],
      answer: "せいしょ　"
    },
    {
      question: "(10).「清書」の対義語",
      options: ["縦書き", "下書き", "上書き", "横書き"],
      answer: "下書き"
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
