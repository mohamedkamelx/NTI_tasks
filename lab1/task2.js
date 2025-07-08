function check(txt,c){
    len = txt.length;
    for (let i=0;i < len; i++){
        if (typeof txt[i] !=='string'){
            return 'invalid must be string'
        }
        if (c){
            if (txt[i] !==txt[len-i-1])
            {return false}
        }else{
            if (txt[i].toLowerCase() !== txt[len-i-1].toLowerCase())
            {return false}            
        }
    }
    return true
}

while(true){
    let txt=prompt('enter string')
    let c=prompt('does lower or higher case matter? \n enter true or false:');
    c= c.toLowerCase() === 'true';
    alert(check(txt,c))
}