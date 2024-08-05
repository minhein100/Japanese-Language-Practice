$(document).ready(function () {

	var vocabbank = [
	["水管", "すかん👉 水を通す管。", "ရေပိုက်။", "Eng: water pipe"],
	["併用", "へいよう👉一緒に使う。", "～する＝တပြိုင်နက်တည်းသုံးသည်။", "Eng: use at the same time"],
	["換気", "かんき👉医療用医薬品", "～する＝လေဝင်လေထွက်ကောင်းအောင်လုပ်သည်။", "Eng: ventilate"],
	["交渉", "こうしょう👉相手と話合いをして、取り決めようとすること。", "～する＝ညှိနှိုင်းသည်။", "Eng: negotiate"],
	["人質", "ひとじち👉要求を押し通そうとして、とらえておく、相手側の人。", "ဓားစာခံ။", "Eng: hostage"],
	["粗品", "そしな👉ご挨拶の際や感謝の気持ちを込めて贈る品物のこと。", "ပေါ့ပေါ့ပါးပါးပေးသော လက်ဆောင်ပစ္စည်း။", "Eng: a small gift"],
	["(人)を立てる", "たてる👉人を自分より上位に置いて尊重する。", "လေးစားသည်။", "Eng: respect"],
	["敬う", "うやまう👉尊敬する。", "လေးစားသည်။", "Eng: respect"],
	["叶える", "かなえる👉満たす。こうしたいという状態にしてやる。", "ခွင့်ပြုပေးသည်။ ပြည့်စေသည်။", "Eng: grant(wish)/ answer(prayer)"],
	["無難", "ぶなん👉無事なこと。欠点のないこと。", "ဘေးကင်း။ အန္တရာယ်ကင်း။", "Eng: safety/ security"],
	["用意", "ようい👉ある事に備えて気を配ること。用心。また、準備。支度。", "～する＝စီစဉ်သည်။ ပြင်ဆင်သည်။", "Eng: prepare"],
	["後ほど", "のちほど👉少し時間がたったころ。（だいたい30分以内）。", "ပြီးလျှင်။", "Eng: later"],
	["配慮", "はいりょ👉手落ちのない、または、よい結果になるように、あれこれと心をくばること。", "～する＝ထည့်သွင်းစဉ်းစားသည်။", "Eng: consider/ concern"],
	["役職", "やくしょく👉会社での単なるポジション。", "ရာထူးအဆင့်။", "Eng: position"],
	["敬称", "けいしょう👉人名に添えて敬意を表す言い方。「…様」など。", "ဂုဏ်ထူးဆောင်ဘွဲ့။", "Eng: title of honor"],
	["身内", "みうち👉親戚のこと。", "ဆွေမျိုး။", "Eng: relatives"],
	["職位", "しょくい👉仕事上の立場や担当業務を指す言葉。", "ရာထူး။", "Eng: position"],
	["拝見", "はいけん👉見ることをへりくだって言う語。", "～する＝ကြည့်ရှု့သည်။", "Eng: look/ see"],
	["築く", "きずく👉⓵土や石を盛り上げ、つき固めて作る。⓶土台からしっかりと作り上げる。", "⓵တည်ဆောက်သည်။ ⓶တည်ထောင်သည်။", "Eng: build"]];


	beginActivity();


	function beginActivity() {
		$("#menubtn").append('<div><span style="font-size:18px;cursor:pointer">語彙一覧</span></div>');
		$("#closebtn").append('<div><a href="javascript:void(0)" class="closebtn">&times;</a></div>');
		$("#infoMsg").append('<div><h4 style="text-align: center;">画面左の「語彙一覧」から言葉の選択ができます。</h4></div>');
		$(vocabbank).each(function(i , item) {
			$("#sideMenuArea" + i ).append('<div id="sideMenuList">' + item[0] + '</div>');
			$("#sideMenuArea" + i ).on("click", function () {
				vocabNo = parseInt(i);
				vocabNo = i + 1;
				$("#infoMsg").empty();
				$("#activityTitle").empty();
				$("#activityTitle").append('<div id="showImi">' + "(" + vocabNo + "). " + item[0] +'</div>')
				$("#cardArea").empty();
				$("#cardArea").append('<div id="showImi">' + item[1] +'</br>' + item[2] + '</br>' + item[3] +'</div>')
				$("#sideMenuArea").animate({ width: "0px" }, 100);
				$("#main").animate({ marginLeft: "0px" }, 100);
				$("#buttonArea2").empty();
				currentVocab = i;
			});
		});

		// Insert button to choose befre and next vocab.
		$("#buttonArea1").append('<div id="beforeButton"><< 前</div>');
		// $("#buttonArea2").append('<div id="startButton">スタート</div>');
		$("#buttonArea3").append('<div id="nextButton2">次 >></div>');

		// Function for before button
		$("#beforeButton").on("click", function () {
			if (currentVocab == 0) {
				alert("これは最初の語彙です。");
			}
			else {
				if (currentVocab >= 1) {
					beforeVocab(currentVocab);
					currentVocab --;
				}
			}
			$("#sideMenuArea").animate({ width: "0px" }, 100);
			$("#main").animate({ marginLeft: "0px" }, 100);
		});

		// Fucntion for next button
		$("#nextButton2").on("click", function () {
			if (currentVocab == vocabbank.length - 1) {
				alert("これは最後の語彙です。");
			}
			else {
				if (currentVocab < vocabbank.length - 1 && currentVocab >= 0) {
					// alert(currentVocab);
					nextVocab(currentVocab + 1);
					currentVocab ++;
				}
			}
			$("#sideMenuArea").animate({ width: "0px" }, 100);
			$("#main").animate({ marginLeft: "0px" }, 100);
			$("#buttonArea2").empty();
			});
		}

		// Start Lesson
		$("#startButton").on("click", function () {
			$("#infoMsg").empty();
			$("#activityTitle").empty();
			$("#activityTitle").append('<div id="showImi">' +  "(1). " + vocabbank[0][0] +'</div>');
			$("#cardArea").empty();
			$("#cardArea").append('<div id="showImi">' + vocabbank[0][1] +'</br>' + vocabbank[0][2] + '</br>' + vocabbank[0][3] +'</div>');
			$("#buttonArea2").empty();
		});


	$("#menubtn").on("click", function () {
		$("#sideMenuArea").animate({ width: "150px" }, 100);
		$("#main").animate({ marginLeft: "150px" }, 100);
		// $("body").css("background-color", "rgba(0, 0, 0, 0.4)");
	});


	$("#closebtn").on("click", function () {
		$("#sideMenuArea").animate({ width: "0px" }, 100);
		$("#main").animate({ marginLeft: "0px" }, 100);
		// $("body").css("background-color", "white");
	});

	function nextVocab(j) {
		vocabNo = parseInt(j);
		vocabNo += 1;
		$("#infoMsg").empty();
		$("#activityTitle").empty();
		$("#activityTitle").append('<div id="showImi">' +  "(" + vocabNo + "). " + vocabbank[j][0] +'</div>')
		$("#cardArea").empty();
		$("#cardArea").append('<div id="showImi">' + vocabbank[j][1] +'</br>' + vocabbank[j][2] + '</br>' + vocabbank[j][3] +'</div>')

	};

	function beforeVocab(j) {
		if (j >= 1) {
			$("#infoMsg").empty();
			$("#activityTitle").empty();
			$("#activityTitle").append('<div id="showImi">' +  "(" + j + "). " + vocabbank[j-1][0] +'</div>')
			$("#cardArea").empty();
			$("#cardArea").append('<div id="showImi">' + vocabbank[j-1][1] +'</br>' + vocabbank[j-1][2] + '</br>' + vocabbank[j-1][3] +'</div>')
		}
	};
});
