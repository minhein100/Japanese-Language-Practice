const quizData = [
    {
      question: "(1). 「授ける」の読み方",
      options: ["さすける", "さずける", "あずける", "かずける"],
      answer: "さずける"
    },
    {
      question: "(2). 「競う」の読み方",
      options: ["きそう　", "さそう　", "あらそう", "おそう　"],
      answer: "きそう　"
    },
    {
      question: "(3).「（だいたい）エネルギー」の「だいたい」の漢字は？",
      options: ["大体", "体大", "代々", "代替"],
      answer: "代替"
    },
    {
      question: "(4).「微々たる」の類義語",
      options: ["ほんの少し", "量が多い　", "甚だしい　", "勢いがある"],
      answer: "ほんの少し"
    },
    {
      question: "(5).「赴く」の読み方",
      options: ["あおむく", "かたむく", "かわむく", "おもむく"],
      answer: "おもむく"
    },
    {
      question: "(6).「鑑定」の読み方",
      options: ["かんじょう", "かんてい　", "かんしょう", "かんしょく"],
      answer: "かんてい　"
    },
    {
      question: "(7).「晩年」の対義語",
      options: ["早年", "毎晩", "老後", "高年"],
      answer: "早年"
    },
    {
      question: "(8).「漁師」の読み方",
      options: ["ぎょし　", "りょうし", "ぎょうし", "りょし　"],
      answer: "りょうし"
    },
    {
      question: "(9).「開拓」の読み方",
      options: ["かいたく", "かいだく", "あきたく", "あきだく"],
      answer: "かいたく"
    },
    {
      question: "(10).「鈍感に」の読み方",
      options: ["じゅんかんに", "びんかんに　", "どんかんに　", "だんかんに　"],
      answer: "どんかんに　"
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
