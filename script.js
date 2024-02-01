document.querySelector("#colorText").textContent = "カラーコード:";
document.querySelector("#colorPicker").value;

document.querySelector("#colorText").textContent = `カラーコード: ${document.querySelector("#colorPicker").value}`;

// 定数定義
const text = document.querySelector("#colorText");
const color = document.querySelector("#colorPicker");

text.textContent = `カラーコード: ${color.value}`;
console.log(text);


const colorBg = () => {
    // 現在のカラーコードを背景色で発動させる関数
    document.body.style.backgroundColor = color.value;

    // 現在のカラーコード発動させる関数
    text.textContent = `カラーコード: ${color.value}`;
}


/* 背景色を変える */
// カラーピッカーが変更されたらカラーコード表示
color.addEventListener("input", colorBg);




/* testteet */
const testBg = () => {
    // testクラスの背景色をオレンジ色に変更
    document.querySelector(".test").style.backgroundColor = "orange";
}
// testクラス内をクリックしたときに
document.querySelector(".test").addEventListener("click", testBg);
