var name = prompt("Ismingiz nima? ")

if (!isNaN(name)) {
    console.log("Siz ismingizni yozmadingiz!");
} else {
    console.log("Assalomu Alekum " + name);
}


var age = +prompt("Yoshingiz nechchida? ")
if (isNaN(age)) {
    console.log("Siz yoshingiz to'g'ri kiritmadingiz");
} else {
    console.log("Sizning yoshingiz " + age + "da");
}

var sample = +prompt("6 * 9 = ")

if (sample == 6 * 9) {
    console.log("Misol: 6 * 9 = " + 6 * 9 + " Sizning javob to'g'ri: " + sample);
} else if (sample > 6 * 9 || sample < 6 * 9) {
    console.log("Sizning javob noto'g'ri: " + sample + " To'g'ri javob: " + 6 * 9);
}
var sample = +prompt("3 * 3 = ")

if (sample == 3 * 3) {
    console.log("Misol: 3 * 3 = " + 3 * 3 + " Sizning javob to'g'ri: " + sample);
} else if (sample > 3 * 3 || sample < 3 * 3) {
    console.log("Sizning javob noto'g'ri: " + sample + " To'g'ri javob: " + 3 * 3);
}
var sample = +prompt("5 * 5 = ")

if (sample == 5 * 5) {
    console.log("Misol: 5 * 5 = " + 5 * 5 + " Sizning javob to'g'ri: " + sample);
} else if (sample > 5 * 5 || sample < 5 * 5) {
    console.log("Sizning javob noto'g'ri: " + sample + " To'g'ri javob: " + 5 * 5);
}
var sample = +prompt("9 * 9 = ")

if (sample == 9 * 9) {
    console.log("Misol: 9 * 9 = " + 9 * 9 + " Sizning javob to'g'ri: " + sample);
} else if (sample > 9 * 9 || sample < 9 * 9) {
    console.log("Sizning javob noto'g'ri: " + sample + " To'g'ri javob: " + 9 * 9);
}