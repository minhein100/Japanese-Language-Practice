$(document).ready(function () {

	var colorArray = ["#019875", "#1E8BC3", "#74B72E"];
	var cardState;
	var currentQuestion = 0;
	var qbank = [
		["今が旬の", "いまがしゅんの"],
		["崩れ落ちる", "くずれおちる"],
		["検疫", "けんえき"],
		["家畜", "かちく"],
		["想定外", "そうていがい"],
		["未練", "みれん"],
		["焼却", "しょうきゃく"],
		["蔓延", "まんえん"],
		["免税", "めんぜい"],
		["税関", "ぜいかん"],
		["関所", "せきしょ"],
		["突破", "とっぱ"],
		["開港", "かいこう"],
		["警戒", "けいかい"],
		["不正", "ふせい"],
		["密輸", "みつゆ"],
		["高騰", "こうとう"],
		["絡む", "からむ"],
		["手口", "てぐち"],
		["詰まる", "つまる"],
		["水管", "すかん"],
		["併用", "へいよう"],
		["換気", "かんき"],
		["交渉", "こうしょう"],
		["人質", "ひとじち"]];


	beginActivity();


	function beginActivity() {
		cardState = 0;
		var color1 = colorArray[Math.floor(Math.random() * colorArray.length)];
		$("#cardArea").empty();
		$("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
		$("#cardArea").append('<div id="card2" class="card">' + qbank[currentQuestion][1] + '</div>');
		$("#card1").css("background-color", color1);
		$("#card2").css("background-color", "#34495E");
		$("#card2").css("top", "200px");
		$("#cardArea").on("click", function () {
			if (cardState != 1) {
				cardState = 1;
				//togglePosition();
				$("#card1").animate({ top: "-=200" }, 150, function () { cardState = 0; togglePosition(); });
				$("#card2").animate({ top: "-=200" }, 150, function () { togglePosition2(); });
			}//if
		});//click function
		currentQuestion++;
		$("#buttonArea").empty();
		$("#buttonArea").append('<div id="nextButton">次へ</div>');
		$("#buttonArea").append('<div id="otherButton"> <a href=\"./830class_yomikata_lesson.html\" style="text-decoration:none;">他の練習を選ぶ</a></div>');
		$("#nextButton").on("click", function () {
			if (currentQuestion < qbank.length) { beginActivity(); }
			else { displayFinalMessage(); }
		});//click function
	}//beginactivity

	function togglePosition() {
		if ($("#card1").position().top == -200) { $("#card1").css("top", "200px"); };
	}//toggle

	function togglePosition2() {
		if ($("#card2").position().top == -200) { $("#card2").css("top", "200px"); };
	}//toggle2

	function displayFinalMessage() {
		$("#buttonArea").empty();
		$("#cardArea").empty();
		$("#cardArea").append('<div id="finalMessage"><p>終了！<br>よく頑張ったね！</p></div>');
		$("#buttonArea").append('<div id="otherButton"> <a href=\"./0830yomi6.html\" style="text-decoration:none;">最初からやり直す</a></div>');
		$("#buttonArea").append('<div id="otherButton"> <a href=\"./830class_yomikata_lesson.html\" style="text-decoration:none;">他の練習を選ぶ</a></div>');
	}//final message

});
