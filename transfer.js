window.addEventListener('load',()=>{
    document.getElementById("full").innerHTML=localStorage.getItem("first")+" "+localStorage.getItem("middle")+" "+localStorage.getItem("last");
    document.getElementById("postal").innerHTML=localStorage.getItem("home");
    document.getElementById("cell").innerHTML=localStorage.getItem("tel-number");
    document.getElementById("mail").innerHTML=localStorage.getItem("email");
})