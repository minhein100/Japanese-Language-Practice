$(document).ready(function () {

	var vocabbank = [
	["傾向", "けいこう👉ある方向・態度に傾くこと。", "လားရာ။ ဦးတည်ရာ။", "Eng: tendency/ trend"],
	["施設", "しせつ👉ある目的のため、建物などの設備をすること。", "အဆောက်အအုံ။ ", "Eng: facility"],
	["候補", "こうほ👉ある地位などにつくことを自ら希望し、または人に推されていること。", "(လူ)ကိုယ်စားပြုသူ။ (သက်မဲ့)ရွေးချယ်စရာ။", "Eng: candidacy"],
	["絞る", "しぼる👉⓵強くねじって、水分をだす。例）洗濯物を絞る。⓶範囲を 狭(せば)める。例）調査の範囲を絞る", "⓵(ရေ)ညှစ်သည်။ ⓶နယ်ပယ်ကျဉ်းအောင်လုပ်သည်။ ရွေးချယ်ပြီးစစ်ထုတ်သည်။", "Eng: squeeze/ filter"],
	["主人公", "しゅじんこう👉事件・物語・劇などの中心人物。", "ဇာတ်ဆောင်။ အဓိကဇာတ်ဆောင်။", "Eng: main character"],
	["職人", "しょくにん👉主に手先の技術で物を作る職業の人。", "လက်မှုပညာသည်။", "Eng: craftsman"],
	["車椅子", "くるまいす👉足腰の不自由な人が、腰掛けたままで移動できるように作ったもの。", "ဘီးတပ်ကုလားထိုင်။", "Eng: wheel chair"],
	["骨折", "こっせつ👉骨が折れること。", "～する＝အရိုးကျိုးသည်။", "Eng: fracture (of a bone)"],
	["校舎", "こうしゃ👉過学校の建物。", "ကျောင်းအဆောက်အဦး", "Eng: school building"],
	["大幅に", "おおはばに👉数量などの変わりかたが大きいこと。", "ကြီးကြီးမားမား။", "Eng: large scale/ significantly/ drastically"],
	["初対面", "しょたいめん👉初めて会うこと。", "ပထမဆုံးတွေ့ခြင်း။", "Eng: fist meeting with sb"],
	["解放", "かいほう👉体や心の束縛・制限などを取り除いて自由にすること。", "～する＝လွှတ်ပေးသည်။ 例）悩みから解放される＝ပူပင်မှုတွေကနေ လွတ်မြောက်သွားသည်။", "Eng: free/ release"],
	["日帰り", "ひがえり👉出掛けた先で泊まらずに、その日のうちに帰って来ること。", "နေ့ချင်းပြန်", "Eng: one-day trip"],
	["空席", "くうせき👉あいている座席。また、欠員になっている地位。", "ထိုင်ခုံလွတ်။ နေရာလွတ်။ ", "Eng: vacant seat/  vacancy"],
	["凝る", "こる👉⓵肩の筋肉が血行が悪くなってかたくなること⓶夢中になる。", "⓵(အကြော)တက်သည်။ ⓶အစွဲအလမ်းဖြစ်နေသည်။ အရူးအမူးတခုတည်းလုပ်သည်။ ゲームに凝る", "Eng: ⓵congeal ⓶crazy"],
	["都心", "としん👉大都市の中心部。", "မြို့လယ်ခေါင်။", "Eng: city center/ downtown"],
	["空き地", "あきち👉 使われていない土地。", "မြေလွတ်မြေရိုင်း", "Eng: vacant lot"],
	["手入れ", "ていれ👉よい状態で保存するための、つくろいや世話。", "ပြုပြင်ထိန်းသိမ်းမှု", "Eng: maintenance"],
	["対策", "たいさく👉相手の態度や事件の情況に応じてとる手段・策略。", "～する＝တုံ့ပြန်ဖြေရှင်းဆောင်ရွက်သည်။", "Eng: countermeasure"],
	["放す", "はなす👉⓵解放する ⓶途中の状態のままにしておく。", "⓵လွှတ်ပေးသည်။ 例）鳥を放す ⓶(ဖြစ်လက်စအတိုင်း)ထားသည်။ 例）窓を開けっ放しにする ", "Eng: free/ release"],
	["放る", "ほうる👉⓵遠くへ投げる ⓶途中でやめておく。", "⓵ပစ်လွှတ်သည်။ ပစ်ပေါက်သည်။ 例）ボールを放る ⓶(တစ်ဝက်တစ်ပျက်)ပစ်ထားသည်။ 例）勉強を放って遊びに行く", "Eng: ⓵throw ⓶leave sth unfinished"],
	["継続", "けいぞく👉前から行われていた事が引き続き行われること。", "～する＝ဆက်ဖြစ်သည်။ ဆက်လုပ်သည်။ ဆက်ရှိနေစေသည်။။", "Eng: continuation"],
	["正常", "せいじょう👉普通であり、変わったところがないこと。", "～な＝ပုံမှန်ဖြစ်သော", "Eng: normal"],
	["異常", "いじょう👉普通またはいつもと違って、どこかくるっていること。", "～な＝ပုံမှန်မဟုတ်သော", "Eng: abnormal"]];


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
				// alert("これは最初の語彙です。");
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
			if (currentVocab >= vocabbank.length) {
				// alert("これは最初の語彙です。");
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
