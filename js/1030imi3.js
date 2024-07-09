$(document).ready(function () {

	var vocabbank = [
	["伸び悩む", "のびなやむ👉上昇・向上・進展などが、うまくゆきそうでいてなかなかそうならない状態にあること", "တိုးမလိုလိုနဲ့ မတိုးဘူးဖြစ်သည်။", "Eng: growth in sluggish"],
	["発行", "はっこう👉⓵新聞・紙幣などを印刷して世の中に出すこと。 ⓶証明書・入場券などを作って出すこと。", "～する＝⓵ထုတ်ဝေသည်။ ⓶ထုတ်ပေးသည်။", "Eng: issue"],
	["冒険", "ぼうけん👉危ないことを押し切って行うこと。成功するかどうかはっきり分からないことをあえて行うこと", "စွန့်စားခြင်း။", "Eng: adventure"],
	["険しい", "けわしい👉⓵（山・坂の）傾斜が急で、のぼるのに困難なこと。⓶きつい。荒々しい。", "မတ်စောက်သော။ ကြမ်းတမ်းသော။", "Eng: steep/ severe."],
	["冒す", "おかす👉成功するかどうかはっきり分からないことをあえて行うこと", "စွန့်စားသည်။", "Eng: risk/ attempt"],
	["宣伝", "せんでん👉商品などについて、大衆に説明し、理解・共鳴させて広めていくこと", "(အများသိအောင်)ကြေငြာခြင်း။ ဝါဒဖြန့်ခြင်း။", "Eng: publicity/ propaganda. "],
	["広告", "こうこく👉広く世間に知らせること。特に、商品などを広く知らせ、人の関心を引きつけること", "ကြော်ငြာခြင်း။", "Eng: advertising"],
	["定期的に", "ていきてきに👉一定の期間をおいて、あるいは決まった時期に物事が行なわれる", "～する＝ပုံမှန်ပြုလုပ်သည်။", "Eng: on a regular basis"],
	["負担", "ふたん👉過重な仕事", "ဝန်ထုပ်ဝန်ပိုး။ (ဥပမာ) 準備の負担 ပြင်ဆင်ရတဲ့ဝန်ထုပ်ဝန်ပိုး", "Eng: a burden"],
	["制度", "せいど👉団体などを運営して行くために定めた仕組み・きまり。", "စနစ်။", "Eng: system"],
	["経費", "けいひ👉ある事をするのに必要な費用。", "ကုန်ကျစရိတ်။", "Eng: expenses/ cost."],
	["経る", "へる👉⓵時がたつ。⓶そこを通って行く。", "⓵(အချိန်ကာလ)ကြာသည်။ 例）一ヶ月を経ってもなんの連絡も来ない。⓶ဖြတ်သွားသည်။ 例）京都をへて大阪に行く", "Eng: pass"],
	["経つ", "たつ👉時間が過ぎ去ること", "(အချိန်ကာလ) ကြာညောင်းသည်။ ကုန်ဆုံးသည်။ 例）月日が経つ", "Eng: pass"],
	["費やす", "ついやす👉⓵（多く）使う။ ⓶無駄に使う", "⓵သုံးစွဲသည်။ ⓶သုံးဖြုန်းသည်။ 例）いくら努力しても時間を費やすだけです。", "Eng: spend"],
	["手間", "てま👉仕事を仕上げるのにいる労力・時間。", "အလုပ်အတွက်အားထုတ်ရမှု 例）手間が少ない အလုပ်ရှုပ်သက်သာသည်။ require less time and labor", "Eng: time and labor"],
	["応急手当", "おうきゅうてあて👉緊急時に応じて治療すること。", "အရေးပေါ်ကုသမှု။", "Eng: emergency treatment/ first-aid treatment."],
	["離陸", "りりく👉航空機などが陸地をはなれて飛び上がること。", "ပျံတက်သည်။", "Eng: take-off"],
	["着陸", "ちゃくりく👉飛行機などが空中から陸上に着くこと。", "ဆင်းသက်သည်။", "Eng: landed"],
	["離れる", "はなれる👉つながりがなくなって、へだたっていく。", "ခွဲခွာသည်။ ကွဲကွာသည်။", "Eng: seperate/ leave/ break/ apart from"],
	["陸地", "りくち👉地球上で水に覆われていない、陸の部分。", "ကုန်းမြေ။", "Eng: land"],
	["先着", "せんちゃく👉他よりも先に着くこと。", "အရင်ရောက်သူ။", "Eng: first arrival/ first come"],
	["事前に", "じぜんに👉物事の起こる、または行われる前。", "ကြိုတင်၍။", "Eng: in advance"],
	["振り込む", "ふりこむ👉口座などに金銭を払い込むこと。", "(ဘဏ်အကောင့်)သို့ ငွေလွှဲခြင်း)။", "Eng: transfer money to sb's bank account"],
	["原本", "げんぽん👉写し・訳・改作などをする前の）もとの書物・文書。", "မူရင်း", "Eng: original/ original copy"],
	["同封", "どうふう👉封筒の中に一緒に入れること", "～する＝စာနှင့်အတူတွဲပို့သည်။", "Eng: enclosure"]];


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
