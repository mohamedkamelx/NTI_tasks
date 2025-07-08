function sum(){
    let s = 0
    n = prompt('enter length of array');
    for (let i = 0;i <n; i++){
        x = Number(prompt(`enter number ${i+1}`));
        if (isNaN(n)){
            alert("must be numbers");
            i--;            
        }else{
            s += x;

        }
    }
    return s
}

alert(sum());