let intervalId = null; // タイマーID
let time = 0; // 経過時間

const display = document.getElementById("displayTime");
const startBtn = document.getElementById("startBtn");
const stopBtn = document.getElementById("stopBtn");
const resetBtn = document.getElementById("resetBtn");

// スタートボタンのクリックイベント
startBtn.addEventListener("click", function () {
  // スタートボタンを無効化、ストップとリセットボタンを有効化
  startBtn.disabled = true;
  stopBtn.disabled = false;
  resetBtn.disabled = false;

  // タイマーを開始　10ミリ秒ごとに時間を更新
  intervalId = setInterval(function () {
    time += 10; // 経過時間を10ミリ秒増やす
    displayTime(); // 経過時間を表示
  }, 10);
});

// ストップボタンのクリックイベント
stopBtn.addEventListener("click", function () {
  // スタートボタンを有効化、ストップボタンを無効化
  startBtn.disabled = false;
  stopBtn.disabled = true;

  clearInterval(intervalId); // タイマーを停止
});

// リセットボタンのクリックイベント
resetBtn.addEventListener("click", function () {
  clearInterval(intervalId); // タイマーを停止
  time = 0; // 経過時間をリセット
  displayTime(); // 経過時間を表示

  // スタートボタンを有効化、ストップとリセットボタンを無効化
  startBtn.disabled = false;
  stopBtn.disabled = true;
  resetBtn.disabled = true;
});

// 時間を表示する関数
function displayTime() {
  const hours = Math.floor(time / 3600000);
  const minutes = Math.floor((time % 3600000) / 60000);
  const seconds = Math.floor((time % 60000) / 1000);
  const milliseconds = Math.floor((time % 1000) / 10);

  // 時間、分、秒、ミリ秒が一桁の場合、0を追加して二桁にする
  const displayHours = hours < 10 ? "0" + hours : hours;
  const displayMinutes = minutes < 10 ? "0" + minutes : minutes;
  const displaySeconds = seconds < 10 ? "0" + seconds : seconds;
  const displayMilliseconds =
    milliseconds < 10 ? "0" + milliseconds : milliseconds;

  // 時間を表示
  display.textContent = `${displayHours}:${displayMinutes}:${displaySeconds}.${displayMilliseconds}`;
}
