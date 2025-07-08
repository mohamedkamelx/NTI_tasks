function entername(n_pattern){
while (true){
    let name=prompt('enter name');    
    if (! n_pattern.test(name)){
        alert('non valid name');
        continue
    }else{
        return name
    }
}
}
function enterphone(p_pattern){
while (true){
    let phone=prompt('enter phone')
    if (! p_pattern.test(phone)){
        alert('non valid phone number')
        continue
    }else{
        return phone
    }
}
}

function entermail(m_pattern){
while (true){
    let mail=prompt('enter mail')
    if (! m_pattern.test(mail)){
        alert('non valid mail')
        continue
    }else{
        return mail
    }
}    
}



while(true){
    let n_pattern = new RegExp ("^[A-Za-z\s'-]+$");
    let m_pattern = /^\w+@\w+\.\w+/;
    let p_pattern =  /^(010|011|012)\d{8}$/;

    let name = entername(n_pattern);
    let phone = enterphone(p_pattern);
    let email = entermail(m_pattern);
    
    alert(`welcome ${name} \n your phone: ${phone} \n your email : ${email}`)
}