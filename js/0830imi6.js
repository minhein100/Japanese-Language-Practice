$(document).ready(function () {

	var vocabbank = [
	["今が旬の", "いまがしゅんの👉おいしく食べられる旬、適した時期", "လှိုင်လှိုင်ထွက်သော။ လှိုင်လှိုင်ပေါသော", "Eng: now is the season"],
	["崩れ落ちる", "くずれおちる👉くずれて下へ落ちる。", "ပြိုလဲကျသည်။ ခွေကျသည်။", "Eng: collapse/ decay/ "],
	["検疫", "けんえき👉伝染病が広がるのを防ぐため、ある地域に出入りする人や物を検査し、必要な処置をとること。", "ရောဂါမကူးစက်စေရန်သီးခြားခွဲ၍စစ်ဆေးခြင်း။", "Eng: quarantine"],
	["家畜", "かちく👉家庭や農園で飼われる牛・馬・犬・鶏など。", "မွေးမြူရေးတိရိစ္ဆာန်။", "Eng: livestock/ a farm animal"],
	["想定外", "そうていがい👉要求を押し通そうとして、とらえておく、相手側の人。", "မမျှော်လင့်ထားသော။ မထင်မှတ်ထားသော။", "Eng: unexpected"],
	["未練", "みれん👉諦めきれないこと 。", "လက်မလျော့ခြင်း။ 例）未練が残る/ 未練を残す လက်မလျော့နိုင်ဖြစ်သည်။", "Eng: regret/ attachment"],
	["焼却処分", "しょうきゃくしょぶん👉燃やして処分すること。", "(စွန့်ပစ်ပစ္စည်းစသည်)မီးရှိုးဖျက်ဆီးခြင်း။", "Eng: incineration"],
	["蔓延", "まんえん👉病気や悪習などがいっぱいに広がること。", "～する＝ကူးစက်ပျံ့ပွားသည်။", "Eng: spread disease"],
	["免税", "めんぜい👉課税を免除すること。", "အကောက်ခွန်ကင်းလွတ်ခြင်း။", "Eng: duty free"],
	["税関", "ぜいかん👉国境・港・空港など外国と交通する所に置き、貨物・携帯品・船・航空機の取締り、関税の取立てなどの事務をする役所。", "အကောက်ခွန်။", "Eng: customs"],
	["関所", "せきしょ👉重要な道路や国境などに設けて、旅人の出入りや荷物を調べる役所。容易には通り抜けられないところ。", "စစ်ဆေးရေးဂိတ်။။", "Eng: a barrier/ a checkpoint/ checking station"],
	["突破", "とっぱ👉⓵すごい勢いで突き破ること。⓶数量が着目値を超える。", "～する＝⓵ကျော်ဖြတ်သည်။例）敵陣を突破する。 ⓶(ကိန်းဂဏန်း) ကိုကျော်လွန်သွားပြီ။ 例) 192万人を突破する。 ", "Eng: breakthrough"],
	["開港", "かいこう👉外国との貿易のために港を開放すること。新たに港や空港の設備をして業務を始めること。", "(သင်္ဘောဆိပ်၊ လေဆိပ်)စတင်ဖွင့်လှစ်ခြင်း။", "Eng: opening of port/ opening of airport"],
	["警戒", "けいかい👉好ましくない事が起こらないように、注意し用心すること。", "ကြိုတင်သတိပေးခြင်း။", "Eng: precaution/ vigilance"],
	["不正", "ふせい👉正しくないこと。正義・正当・正直でないこと。 ", "လိမ်လည်/ မမျှတ/ မမှန်မကန်/ တရားမဝင်။", "Eng: irregularity/ fraud/ misconduct/ injustice/ illegal"],
	["密輸", "みつゆ👉密輸出と密輸入。", "မှောင်ခိုထုတ်/သွင်း။ 例）金の密輸 ", "Eng: smuggling"],
	["高騰", "こうとう👉（価額）が高く上がる事。", "စျေးတက်ကြမ်း။ စျေးအဆမတန်တက်။", "Eng: a sudden rise/ soaring price"],
	["絡む", "からむ👉他の物事が密接に結び付く。繋がる／結びつける。", "ပါဝင်ပတ်သက်သည်။ 例）金の高騰が絡んでいるရွေးစျေးအတက်ကြမ်းတာနဲ့ ပါဝင်ဆက်စပ်နေတယ်။", "Eng: involve"],
	["手口", "てぐち👉犯罪・悪事の方法。", "ကျုးလွန်တဲ့နည်းလမ်း။", "Eng: a trick/ a criminal techinque"],
	["言葉に詰まる", "ことばにつまる👉うまい表現や言い方が見つからずに話し続けることができない様子。", "ပြောစရာစကားပျောက်နေတယ်။ ဆွံ့အသွားသည်။", "Eng: make speechless"],
	["水管", "すかん👉 水を通す管。", "ရေပိုက်။", "Eng: water pipe"],
	["併用", "へいよう👉一緒に使う。", "～する＝တပြိုင်နက်တည်းသုံးသည်။", "Eng: use at the same time"],
	["換気", "かんき👉医療用医薬品", "～する＝လေဝင်လေထွက်ကောင်းအောင်လုပ်သည်။", "Eng: ventilate"],
	["交渉", "こうしょう👉相手と話合いをして、取り決めようとすること。", "～する＝ညှိနှိုင်းသည်။", "Eng: negotiate"],
	["人質", "ひとじち👉要求を押し通そうとして、とらえておく、相手側の人。", "ဓားစာခံ။", "Eng: hostage"]];


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
