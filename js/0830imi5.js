$(document).ready(function () {

	var vocabbank = [
	["通販", "つうはん👉通信販売／オンライン販売。", "အွန်လိုင်းမှရောင်းချခြင်း", "Eng: online sales"],
	["処方", "しょほう👉（従来の意味：物事を処理すること）病気に応じた薬の調合法。", "ဆေးညွှန်း။", "Eng: prescription"],
	["処方薬", "しょほうやく👉医療用医薬品", "ဆေးညွှန်းဖြင့်ဝယ်ရသောဆေး။", "Eng: prescribed drug/ prescription drug"],
	["調合", "ちょうごう👉薬などを決まった分量通りに盛り合わせること。", "～する＝ဆေးဖော်စပ်သည်။", "Eng: compound(a medicine)"],
	["連携", "れんけい👉同じ目的で何かをしようとするものが、連絡を取り合って行うこと。", "～する＝ချိတ်ဆက်သည်။ ပူပေါင်းသည်။။", "Eng: cooperate"],
	["調剤", "ちょうざい👉薬剤を調合すること。", "ဆေးစပ်ခြင်း။ ဆေးဖော်ခြင်း။", "Eng: compound(a medicine)"],
	["薬剤師", "やくざいし👉処方せんによる薬の調合を法律上認められている人", "ဆေးဝါးကျွမ်းကျင်သူ", "Eng: pharmacist"],
	["服薬", "ふくやく👉服用。薬を飲むこと。", "ဆေးသောက်ခြင်း။", "Eng: taking a medicine"],
	["慢性的", "まんせいてき👉長期継続状態にあること", "～な＝(ရောဂါ)နာတာရှည်။", "Eng: chronic"],
	["疾患", "しっかん👉病気。", "ရောဂါ။", "Eng: disease"],
	["病", "やまい👉病気。", "ရောဂါ။", "Eng: disease/ illness/ sickness"],
	["患者", "かんじゃ👉病気で医者の治療を受ける人。病気にかかっている人。", "လူနာ။", "Eng: patient"],
	["診療", "しんりょう👉診察と治療。", "ကုသမှု။ 例）診療を受ける ကုသမှုခံယူသည်။", "Eng: medical treatment/ diagnosis"],
	["取得", "しゅとく👉手に入れる。もらう。", "～する＝ရရှိသည်။ 例）運転免許証を取得しまた。", "Eng: get/ acquire/ gain/ obtain"],
	["処方箋", "処方せん/しょほうせん👉医師が処方を書きしるした文書。", "ဆေးညွှန်းစာ။", "Eng: prescription"],
	["移動", "いどう👉⓵移りうごくこと。移しうごかすこと。⓶位置をかえること。", "～する＝⓵သွားသည်။ လာသည်။ သွားလာသည်။ ⓶ရွှေ့ပြောင်းသည်။", "Eng: move/ transfer/ shift"],
	["想定", "そうてい👉仮に考えてみること。", "～する＝စဉ်းစားပုံဖော်သည်။ ပုံဖော်ယူဆသည်။", "Eng: assume"],
	["冷却", "れいきゃく👉冷やすこと・冷えること。", "အအေးခံခြင်း။", "Eng: cooling"],
	["氷のう", "ひょうのう👉会や催物を行うこと。", "ရေခဲအထုပ်။", "Eng: ice pack"],
	["保冷", "ほれい👉冷やして低温のまま保こと。", "～する＝အအေးခံထားသည်။", "Eng: keep cool"],
	["入浴", "にゅうよく👉お風呂に入ること。", "～する＝ရေနွေးစိမ်သည်။ ရေချိုးသည်။", "Eng: take a bath"],
	["浴室", "よくしつ👉ふろば。", "ရေချိုးခန်း", "Eng: bathroom"],
	["冒頭", "ぼうとう👉文章・談話・物事の初めのところ。", "အစပိုင်း။", "Eng: beginning/ opening"],
	["管", "くだ👉中が空の細長い丸棒。", "ပိုက်။", "Eng: pipe"],
	["自賛", "じさん👉自分で自分をほめること。自慢すること。", "～する＝မိမိကိုယ်ကို ဂုဏ်ယူသည်။", "Eng: self-praise"]];


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
