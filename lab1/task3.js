function check(txt){
    let n = 0;
    let len = txt.length;
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