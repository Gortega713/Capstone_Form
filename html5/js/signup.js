document.getElementById("submit").addEventListener("click", createAccount);

function createAccount(){
    var userName = document.getElementById("username").value
    var password = document.getElementById("password");
    if(userName == localStorage.getItem("email")){
        // document.getElementById("popUp").classList.add("show");
        alert("Email already attached to account");
    }
    else{
    localStorage.setItem("email", userName);
    localStorage.setItem("Password", password);
    }

}