$(document).ready(function () {

	var vocabbank = [
	["文献", "ぶんけん👉⓵昔の制度・文物の記録や言い伝え⓶研究の参考資料となる書物・文書。", "⓵မှတ်တမ်းစာပေ။ ⓶မှီငြမ်းရန်စာအုပ်၊ စာစောင်။", "Eng: ⓵ literature ⓶ books for reference"],
	["漁獲", "ぎょかく👉水産物を取ること。", "ငါးဖမ်းယူခြင်း။", "Eng: fishing"],
	["図表", "ずひょう👉図および表。また単に、図。グラフ。", "ပုံ၊ ဇယား၊ ဂရဖ်။ ", "Eng: chart/ diagram"],
	["変遷", "へんせん👉移り変わること。", "အကူးအပြောင်း", "Eng: transition"],
	["網羅", "もうら👉残らず取り入れること。余りなく尽くすこと。", "အားလုံးကာမိသည်။ အားလုံးပါဝင်သည်။။", "Eng: covering"],
	["開催", "かいさい👉会や催物を行うこと。", "～する＝ကျင်းပသည်။", "Eng: be held"],
	["催す", "もよおす👉会や催物を行うこと。", "ကျင်းပသည်။", "Eng: be held"],
	["踏み切れる", "ふみきれる👉ある行動に移ることを勇気を持って決断すること", "စွန့်စားသည်။ မျက်စိမှိတ်ပြီးလုပ်ချလိုက်သည်။", "Eng: take the plunge"],
	["納得", "なっとく👉他人の考え・行為を理解し、もっともだと認めること。", "～する＝သဘောတူကျေနပ်လက်ခံသည်။", "Eng: consent"],
	["納税", "のうぜい👉税金を納めること。", "အခွန်ပေးဆောင်သည်။", "Eng: payment of taxes"],
	["弁償", "べんしょう👉他人に与えた損害に対し、財物を出して補いをすること。", "ပေးလျော်ခြင်း 例）弁償の契約 လျော်ကြေးစာချုပ်", "Eng: compensation/ reimbursement"],
	["肌で感じる", "はだでかんじる👉実際に体験したり、詳しく見聞きしたりして、現実的なものとして感じ取る。", "လက်တွေ့ လုပ်ကိုင်ကြည့်သည်။", "Eng: understand from experience"],
	["情熱", "じょうねつ👉物事に対して激しく燃え上がる感情。", "～な＝စိတ်အားထက်သန်သော။", "Eng: passion/ enthusiasm"],
	["頭脳派", "ずのうは👉頭の回転が速い人。頭を使って問題解決する人。", "ဉာဏအားသုံးသူများ။", " "],
	["肉体派", "にくたいは👉体力を使って問題解決する人。", "ကာယအားသုံးသူများ။", " "],
	["臆病", "おくびょう👉物に恐れやすい性質。ちょっとした事にも恐れること。", "～な＝သူရဲဘောကြောင်သော", "Eng: cowardice"],
	["定番", "ていばん👉⓵流行に左右されない基本的な商品。「定番商品」の略。⓶代表的なもの。お決まりのもの。", "⓵ပုံမှန်ရောင်းချသောပစ္စည်း။ ⓶ပုံမှန်ပါနေကျ။ 例）定番の料理", "Eng: standard/ routine"],
	["随一", "ずいいち👉その範囲で最もきわだっていること。", "～ထဲမှာအကောင်းဆုံး 例）メンバー随一 အဖွဲ့ဝင်တွေထဲမှာအကောင်းဆုံး ", "Eng: best/ greatest"],
	["魅了", "みりょう👉すっかり相手の心を引き付けて夢中にさせてしますこと。", "～する＝စွဲမက်စေသည်။", "Eng: fascinate"],
	["断然", "だんぜん👉必ず。全く。", "လုံးဝ။", "Eng: definitely/ absolutely"],
	["抜群", "ばつぐん👉多くのものの中でずば抜けてすぐれていること。", "～な＝ထူးချွန်ပြောင်မြောက်သော", "Eng: outstanding/ pre-eminent"],
	["憧れる", "あこがれる👉理想とする物事や人物に強く心が引かれる。", "လေးစားအားကျသည်။", "Eng: admire"],
	["口頭", "こうとう👉文字に書いたりせず口に出して言うこと。", "နှုတ်ဖြင့် 例）口頭で伝える နှုတ်ဖြင့်ပြောသည်။", "Eng: oral"],
	["念のため", "ねんのため👉万が一のために。", "လိုရမယ်ရ။", "Eng: just in case"],
	["箇条書き", "かじょうがき👉それぞれの内容ごとに分けられ、並べて書き表わされたもの。", "အချက်ခွဲ၍အစဉ်လိုက်ရေးခြင်း။", "Eng: bullet point"]];


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
