while(true){
    let n_pattern = new RegExp ("^[A-Za-z\s'-]+$");
    let m_pattern = /^\w+@\w+\.\w+/;
    let p_pattern =  /^(010|011|012)\d{8}$/;

    let name=prompt('enter name')    
    if (! n_pattern.test(name)){
        alert('non valid name')
        continue
    }
    let phone=prompt('enter phone')
    if (! n_pattern.test(name)){
        alert('non valid phone number')
        continue
    }
    let email=prompt('enter email')
    if (! n_pattern.test(name)){
        alert('non valid email')
        continue
    }
    alert(`welcome ${name} \n your phone: ${phone} \n your email : ${email}`)
}