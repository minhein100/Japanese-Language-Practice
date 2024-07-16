$(document).ready(function () {

	var colorArray = ["#019875", "#1E8BC3", "#74B72E"];
	var cardState;
	var currentQuestion = 0;
	var qbank = [
		["文献", "ぶんけん"],
		["漁獲", "ぎょかく"],
		["図表", "ずひょう"],
		["変遷", "へんせん"],
		["網羅", "もうら"],
		["開催", "かいさい"],
		["催す", "もよおす"],
		["踏み切れる", "ふみきれる"],
		["納得", "なっとく"],
		["納税", "のうぜい"],
		["弁償", "べんしょう"],
		["肌で感じる", "はだでかんじる"],
		["情熱", "じょうねつ"],
		["頭脳派", "ずのうは"],
		["肉体派", "にくたいは"],
		["臆病", "おくびょう"],
		["定番", "ていばん"],
		["随一", "ずいいち"],
		["魅了", "みりょう"],
		["断然", "だんぜん"],
		["抜群", "ばつぐん"],
		["憧れる", "あこがれる"],
		["口頭", "こうとう"],
		["念のため", "ねんのため"],
		["箇条書き", "かじょうがき"]];


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
		$("#buttonArea").append('<div id="otherButton"> <a href=\"./0830yomi3.html\" style="text-decoration:none;">最初からやり直す</a></div>');
		$("#buttonArea").append('<div id="otherButton"> <a href=\"./830class_yomikata_lesson.html\" style="text-decoration:none;">他の練習を選ぶ</a></div>');
	}//final message

});
