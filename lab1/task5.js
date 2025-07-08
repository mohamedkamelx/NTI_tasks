function sum(n){
    s=n[0]
    for (let i=1;i<3;i++){
        s+=n[i]
    }  
    return s
}
function multip(n){
    s=n[0]
    for (let i=1;i<3;i++){
        s*=n[i]
    }  
    return s
}
function division(n){
    s=n[0]
    for (let i=1;i<3;i++){
        s=s/n[i]
    }  
    return s
}


function main(){
    while(true){

        let op = prompt('enter operation / * +')
        if(op=='/'){
            op=division
        }else if(op=='*'){
            op=multip
        }else if(op=='+'){
            op=sum
        }else{
            alert('invalid operation')
            continue         
        }

        
        let arr =[]
        for (let i=0;i<3;i++){
            let n = Number(prompt(`enter value ${i}`))
            if (isNaN(n)){
                alert(`must be a number`)
                i--
                continue
            }
            if (i>0 && n==0){
                alert('cant divide by zero')
                i--
                continue
            }
            arr.push(n)
        }
        alert(op(arr))
    }
}
main()
