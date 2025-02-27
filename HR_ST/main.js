const butt = document.querySelector('.check');
const textInput = document.querySelector('.inputText');
// console.log(butt, textInput);
butt.onclick = function () {
    let text = textInput.value; 
    let textReverse = text.split('').reverse().join('');
    console.log(text, textReverse);
    if(text === textReverse) 
          alert('PALINDROM');
    else  alert('NOT TODAY!!!');
}