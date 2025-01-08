const input = document.getElementById('input');
const output = document.getElementById('output');

let strInput ="";
let isResult
function inputValue(value)
{
    if (isResult) {  
        strInput = value;  
        input.value = strInput;  
        isResult= false;  
    } else {
        strInput += value;  
        input.value = strInput; 
    }
}


function getResult()
{
    const result = eval(strInput);
    output.value = result;
    isResult = true;
}
function allClear(){
    strInput = "";
    input.value = "";
    output.value = "";
}
function clearOneValue()
{
    if (strInput.length > 0) {
        strInput = strInput.slice(0, -1);  
        input.value = strInput;  
    }
}