let buffer='';
let operation=null;
let value1;
let result;

let answer = document.getElementById("Answer")


function sum(x,y){
    return x+y
}
function minus(x,y){
    return x-y
}
function multip(x,y){
    return x*y
}
function divide(x,y){
    return x/y
}

function EnterNumber(value){
    buffer=buffer+value
    answer.value=buffer
}

function EnterEqual(){
    if (buffer!=''){
        value1=numberValidator(buffer)
    }
    if (operation != null && value1 !== undefined && result !== undefined) {
        result = operation(result, value1);
        answer.value =result
        buffer=''
        operation = null
    }else if(result===undefined && value1 !==undefined){
        result=value1
        answer.value =result
        buffer=''
    }else{
        alert("invalid operation")
    }
}

function EnterOperator(op){
    v=numberValidator(buffer)
    if (v === undefined) {
        return;
    }   
    if (op=='-'&&(operation==divide||operation==multip)){
        buffer = '-'
        return
    } 
    else if(operation != null){
        result = operation(result,v)
        answer.value=String(result)+" "+op
    }else{
        result=v
    }
    answer.value=op


    if (op=='/'){operation=divide}
    else if (op=='*'){operation=multip}
    else if (op=='+'){operation=sum}
    else if (op=='-'){operation=minus}
    else {
        alert("error operation")
        return
    }
}

function EnterClear(){
    buffer = '';
    operation = null;
    value1 = undefined;
    result = undefined;
    answer.value = '';
}

function numberValidator(n){
    n=Number(n)
    if (isNaN(n)){
        alert("wrong input")
        return 
    }
    buffer=''
    return n
}
