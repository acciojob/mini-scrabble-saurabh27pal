//your code here
//your code here
let textTag=document.getElementById('evaluatedText');
let headerTag=document.getElementById('letterCount');

document.getElementById('evaluatedText').addEventListener("keyup",function(){
let textValue=textTag.value;
headerTag.innerHTML=textValue.length;

})
