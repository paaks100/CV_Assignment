function checkFirst() {
    let pattern= /^[A-Za-z]+$/;
    let f_name= document.getElementById("first").value;    
    if(!f_name.match(pattern)){return true;}
}

function checkMiddle() {
    let pattern= /^[A-Za-z]+$/;
    let m_name= document.getElementById("middle").value;    
    if(!m_name.match(pattern)){return true;}
}

function checkLast() {
    let pattern= /^[A-Za-z]+$/;
    let l_name= document.getElementById("last").value;    
    if(!l_name.match(pattern)){return true;}
}

function checkCell() {
    let cell= document.getElementById("tel-number").value;
    let num_pattern= /^[0-9]$/;
    
    if(!cell.match(num_pattern)){return true;}
}

function validate(){
    if(checkFirst()){
        if(checkMiddle()){
            if(checkLast()){
                if(checkCell()){}
            }
        }
    }
    return false;
}

function checkValidate(){
    validate();
    toChange();
}

function toChange(){
    let fname = document.getElementById("first").value;
    let mname = document.getElementById("middle").value;
    let lname = document.getElementById("last").value;
    let homeadd = document.getElementById("home").value;
    let phone = document.getElementById("tel-number").value;
    let email_add = document.getElementById("email").value;
    localStorage.setItem("first",fname);
    localStorage.setItem("middle",mname);
    localStorage.setItem("last",lname);
    localStorage.setItem("home",homeadd);
    localStorage.setItem("tel-number",phone);
    localStorage.setItem("email",email_add);
    return false;
}