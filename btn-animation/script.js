// クリックで変化
const btn = document.querySelector(".fade-button-js");
btn.addEventListener("click", () => {
    btn.style.background = "#05b";
    btn.textContent = "処理中...";

    setTimeout(() => {
        btn.style.background = "#07f";
        btn.textContent = "処理完了";
    }, 500);
})