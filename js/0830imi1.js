$(document).ready(function () {

	var vocabbank = [
	["公演する", "こうえん👉公衆の前で演劇・舞踊・音楽などを演ずること。", "～する＝(အများရှေ့၌)ဟောပြောသည်။ ဖျော်ဖြေသည်။ တင်ဆက်သည်။", "Eng: performance before public"],
	["辞退する", "じたい👉人の勧めを断って引き下がること。遠慮すること。", "～する＝ငြင်းသည်။", "Eng: refuse"],
	["無闇に", "むやみに👉後先を考えず行動すること", "အဆင်ခြင်မဲ့။", "Eng: recklessly"],
	["鍛える", "きたえる👉⓵鉄などの金属を熱し、打って強くする。⓶また、人に厳しい練習・修練をさせ、技術や心身をしっかりしたものにする。", "ထုထောင်းသည်။ (သန်မာအောင်၊ တိုးတက်အောင်)လေ့ကျင့်သည်", "Eng: (v)forge. (v)train"],
	["足腰", "あしこし👉足や腰", "ခြေထောင်နှင့် ခါး။", "Eng: legs and back"],
	["落書き", "らくがき👉壁など、書くべきではないところに文字や絵のいたずら書きをすること", "ဂရပ်ဖတီရေးခြင်း", "Eng: graffiti "],
	["花壇", "かだん👉庭や公園などで、他と区切って草花を植えてある場所", "ပန်းဘောင်။ ပန်းမြောင်း။ ပန်းစင်။", "Eng: flower-bed"],
	["雑草", "ざっそう👉栽培しないのにはえる、いろいろな草", "ပေါင်းပင်။", "Eng: weed"],
	["演劇", "えんげき👉観客に見せるために俳優が舞台で演技をすること、ところ", "ပြဇာတ်။ ကဇာတ်။/ ပြဇာတ်ရုံ။ ကဇာတ်ရုံ။", "Eng: the theater"],
	["公", "おおやけ👉私有でないこと", "အများနှင့်ဆိုင်သော။", "Eng: public"],
	["下書き", "したがき👉清書の前に練習のためにかいてみること。", "အကြမ်းရေးသားခြင်း", "Eng: draft"],
	["清書", "せいしょ👉下書きしたものを新たにきれいに書くこと。", "အချောသတ်ရေးသားခြင်း", "Eng: a fair copy. a clean copy."],
	["構図", "こうず👉絵画、写真などの画面の構成", "ပန်းချီဆွဲရာ၊ ဓာတ်ပုံရိုက်ရာ၌ အခင်းအကျင်းနေရာချထားမှု။", "Eng: composition of a painting"],
	["斬新な", "ざんしんな👉趣向がとびぬけて新しいこと。", "တီထွင်ဆန်းသစ်သော", "Eng: novelty"],
	["芝居", "しばい👉演劇。また、それを演ずる小屋", "ပြဇာတ်။ ပြဇာတ်ရုံ", "Eng: play. drama."],
	["洗練する", "せんれん👉文章や人格などを練りきたえ、上品なものにすること。", "မွမ်းမံပြင်ဆင်ထားသည်။", "Eng: refine. polish."],
	["間際", "まぎわ👉まさに起ころうとする時。寸前。", "မတိုင်ခင်လေး", "Eng: just before"],
	["際立つ", "きわだつ👉他のものと区別されてはっきりと目立つ。", "သိသိသာသာကွဲထွက်သည်။", "Eng: be conspicuous"],
	["芳しい", "かんばしい👉⓵かおりがいい。⓶立派なもの。", "⓵ရနံမွှေးသော။ ⓶ကောင်းသော။", "Eng: ⓵fragrant.⓶ good (result, etc.)"],
	["受賞される", "じゅしょう👉賞を受けること。 賞をもらうこと。", "ဆုလက်ခံရရှိသည်။ ဆုချီးမြှင့်ခြင်းခံရသည်။", "Eng: receive an award"],
	["授ける", "さずける👉上の者から下の者に与えること。", "ချီးမြှင့်သည်။ ပေးအပ်သည်။", "Eng: give/ award/ instruct/ teach"],
	["授賞する", "じゅしょう👉賞・賞状・賞品・賞金等を与えること。", "ဆုချီးမြှင့်ပေးအပ်သည်။ ဆုပေးသည်။", "Eng: award a prize"],
	["遊び心", "あそびごころ👉遊び半分の気持ち。", "အပျော်သဘော။ အပြောင်အပျက်။", "Eng: playful mind"],
	["主観的な", "しゅかんてき👉個々の人が持つ独自の視点や感情、思考", "ပုဂ္ဂလိကအမြင်၊ ခံစားချက်၊ အတွေးအခေါ်", "Eng: subjective"],
	["左右する", "さゆう👉コントロールする", "ထိန်းချုပ်သည်။", "Eng: control"]];


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
		$("#buttonArea2").append('<div id="startButton">スタート</div>');
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
