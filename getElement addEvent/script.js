// ボタンの定義
const btn = document.getElementById("btn");

// メッセージの表示を定義
const message = () => {
    alert("JavaScriptって楽しいね！");
};

btn.addEventListener("click", message);
