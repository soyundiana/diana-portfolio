const div = document.querySelector(".text");
const text = "Currently seeking new exciting projects with HTML, CSS, JavaScript & React";

function textTypingEffect(element, text, i = 0){
element.textContent += text[i];

if (i === text.length - 1 ) {
    return;
}
setTimeout(() => textTypingEffect(element, text, i + 1), 50);

}
textTypingEffect(div, text);