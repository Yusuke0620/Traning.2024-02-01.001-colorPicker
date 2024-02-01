document.querySelector("#colorText").textContent = "カラーコード:";
document.querySelector("#colorPicker").value;
document.querySelector("#colorText").textContent = `カラーコード: ${document.querySelector("#colorPicker").value}`;

// 定数定義
const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");

text.textContent = `カラーコード: ${color.value}`;
console.log(text);

// 現在のカラーコード発動させる関数
const colorBg = () => {
    text.textContent = `カラーコード: ${color.value}`;
}

// カラーピッカーが変更されたらカラーコード表示
color.addEventListener("input", colorBg);
