function check(txt){
    let n = 0;
    let len = txt.length;
    if (typeof txt!="number"){
        alert("must be a string");
        return
    }
    for (let i=0;i < len; i++){
        if (txt[i] =='e'){
            n +=1;
        }
    }
    return n
}
while(true){
    let txt=prompt('enter string')
    alert(check(txt))
}