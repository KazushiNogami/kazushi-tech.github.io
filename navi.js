'use strict'
// 1行目に記載している 'use strict' は削除しないでください
console.log("なぜだろうわからない");

//ドロップダウンリスト設定の関数
function mediaQueriesWin(){
	var width = $(window).width();
	if(width <= 768) {//横幅が768px以下の場合 $(".has-child>a").off('click');	//has-childクラスがついたaタグのonイベントを複数登録を避ける為offにして一旦初期状態へ
		$(".has-child>a").on('click', function() {//has-childクラスがついたaタグをクリックしたら
			var parentElem =  $(this).parent();// aタグから見た親要素のliを取得し
			$(parentElem).toggleClass('active');//矢印方向を変えるためのクラス名を付与して
			$(parentElem).children('ul').stop().slideToggle(500);//liの子要素のスライドを開閉させる※数字が大きくなるほどゆっくり開く
			return false;//リンクの無効化
		});
	}else{//横幅が768px以上の場合
		$(".has-child>a").off('click');//has-childクラスがついたaタグのonイベントをoff(無効)にし
		$(".has-child").removeClass('active');//activeクラスを削除
		$('.has-child').children('ul').css("display","");//スライドトグルで動作したdisplayも無効化にする
	}
}

// // ページがリサイズされたら動かしたい場合の記述
// $(window).resize(function() {
// 	mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
// });

// // ページが読み込まれたらすぐに動かしたい場合の記述
// $(window).on('load',function(){
// 	mediaQueriesWin();/* ドロップダウンの関数を呼ぶ*/
// });

// インターステラーの詩を入れる
//target要素を指定
const mainTarget = document.getElementById('main-target');
// console.log(mainTarget);

// マウスオーバーで文字を入れたい
function interStellar(){
	const interText = document.createElement('p');
	interText.innerText = "aiueo";
	document.getElementById('main-target').appendChild(interText);
}

function interStellar2(){
	const p1 = document.createElement('p');
	const interText = document.createTextNode(`"穏やかな夜に身を任せるな。
	老いた魂を燃やし、終わりゆく日に怒りをたぎらせろ。
	怒れ。怒れ。消えゆく光に"(映画『インターステラー』より)`);
	p1.appendChild(interText);
	mainTarget.appendChild(p1);
}

function interStellar3(){
	const p1 = document.createElement('p');
	p1.id = 'p1';
	// p1.className = 'cls';
	p1.innerText = 'test';
	const parent = document.getElementById('main-target');
	parent.appendChild(p1);
}


function removeStellar(){
	const removeInter = document.getElementById('main-taget');
	removeInter.removeChild(p);
}

function removeStellar2(){
	mainTarget.removeChild(mainTarget.childNodes[1]);
}

function removeStellar3(){
	const parent = document.getElementById('main-target');
	parent.removeClass('cls');
}

// 挿入したい詩がある
// マウスが要素の上に入った時に詩が入って、マウスを離すと詩が消える
mainTarget.addEventListener('mouseover', interStellar2);
// console.log(mainTarget);

mainTarget.addEventListener('mouseleave', removeStellar2);


// // 参考サイトのコピペ
// //マウスが要素上に入った時
// mainTarget.addEventListener('mouseover', () => {
// 	mainTarget.style.background = '#000000';
// }, false);

// //マウスが要素上から離れた時
// mainTarget.addEventListener('mouseleave', () => {
// 	mainTarget.style.background = '';  
// }, false);
