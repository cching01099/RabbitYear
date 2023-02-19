const cn1 = document.getElementById("cn1");
const cn2 = document.getElementById("cn2");
const cn3 = document.getElementById("cn3");
const cn4 = document.getElementById("cn4");

const tw1 = document.getElementById("tw1");
const tw2 = document.getElementById("tw2");
const tw3 = document.getElementById("tw3");
const tw4 = document.getElementById("tw4");

const en = document.getElementById("en");

const button = document.getElementById("button");
const random = Math.random();

// 拼音＆中文字
const c1 = ["xīn", "gōng", "qián", "wàn", "shēn", "xīn", "míng", "tù"];

const c2 = ["nián", "xǐ", "tù", "shì", "tǐ", "xiǎng", "xiè", "nián"];

const c3 = ["kuài", "fā", "sì", "rú", "jiàn", "shì", "huì ", "dà"];

const c4 = ["lè", "cái", "jǐn", "yì", "kāng", "chéng", "gù", "jí"];

const t1 = ["新", "恭", "錢", "萬", "身", "心", "銘", "兔"];

const t2 = ["年", "喜", "兔", "事", "體", "想", "謝", "年"];

const t3 = ["快", "發", "似", "如", "健", "事", "惠", "大"];

const t4 = ["樂", "財", "錦", "意", "康", "成", "顧", "吉"];

// 英文翻譯
const enPhrases = [
  "(Happy New Year 兔 you)",
  "(Red envelopes 兔 me)",
  "(bright 兔 the future!)",
  "(good 兔 everything!)",
  "(good health 兔 all ＆ Bye covid-19!)",
  "(Money 兔 you)",
  "(Nice 兔 meet you again)",
  "(Wish you good luck in 兔 year)",
];

// 組合起來的字因為click後隨機出現
function onClick() {
  // 	從各陣列裡隨機取字
  const random = Math.random(); //random先設定同一個了
  cn1.textContent = c1[Math.floor(random * c1.length)];
  cn2.textContent = c2[Math.floor(random * c2.length)];
  cn3.textContent = c3[Math.floor(random * c3.length)];
  cn4.textContent = c4[Math.floor(random * c4.length)];
  tw1.textContent = t1[Math.floor(random * t1.length)];
  tw2.textContent = t2[Math.floor(random * t2.length)];
  tw3.textContent = t3[Math.floor(random * t3.length)];
  tw4.textContent = t4[Math.floor(random * t4.length)];
  en.textContent = enPhrases[Math.floor(random * enPhrases.length)];
}

// 事件監聽器
button.addEventListener("click", onClick);
