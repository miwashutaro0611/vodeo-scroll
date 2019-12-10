// select video element
var vid = document.getElementById('v0'); // 映像の要素を取得
var time = $('#time'); // 青いボールの要素を取得
var scroll = $('#scroll'); // 赤いボールの要素を取得
var windowheight = $(window).height()-20; // windowの高さ - 20px

var vodeoSlide = 400 // vodeoの分割数

var scrollpos = window.pageYOffset/vodeoSlide; // 垂直方向のスクロール量
var targetscrollpos = scrollpos; // 垂直方向のスクロール量変数に代入
var accel = 0; // 加速度

var elementHeight = 13500 // 要素全体の縦の長さ

//ビデオが目標値に追いつく速度
// 0 → 何もしない
// 1 → 瞬時
var accelamount = 0.1; 

vid.pause(); // 映像を停止

window.onscroll = function(){ // スクロールをしたら
    targetscrollpos = window.pageYOffset/vodeoSlide; // 垂直方向のスクロール量を取得
  
    // 赤い点の位置をスクロールした値に応じて変更
    // 10 + (スクロール量 / 要素全体の縦の長さ * windowの高さ) 
    scroll.css('top', 10+( window.pageYOffset / elementHeight*windowheight));
};


setInterval(function(){   
  // スクロール移動
  // 現在のスクロール量 +=(スクロール時の垂直方向のスクロール量 - 現在のスクロール量) * 加速度
  scrollpos += (targetscrollpos - scrollpos) * accelamount;
  // 青い点の位置をスクロールした値に応じて変更
  // 10 + (スクロール量 / 要素全体の縦の長さ * vodeoの分割数 * windowの高さ) 
  time.css('top', 10 + (scrollpos / elementHeight * vodeoSlide * windowheight));
  vid.currentTime = scrollpos; // 再生位置の変更
  vid.pause(); // 映像を停止
}, 40);