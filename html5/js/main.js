window.addEventListener("load", function(){
    document.getElementById("display").addEventListener("click", changeText);
   checkLogin();    
});

function changeText(){
    document.getElementById("display").innerHTML = "Show Less";
    document.getElementById("display").removeEventListener("click", changeText)
    document.getElementById("display").addEventListener("click", changeText2);
}

function changeText2(){
    document.getElementById("display").innerHTML = "Show More";
    document.getElementById("display").removeEventListener("click", changeText2)
    document.getElementById("display").addEventListener("click", changeText);
}

var i = 0;
function checkLogin() {
     var storedEmail = localStorage.getItem("email");
     var storedPass = localStorage.getItem("Password");

     var userName = document.getElementById("email");
     var password = document.getElementById("password").value;  
     document.getElementById("submit").onclick = function(){
     document.getElementById("popUp").classList.remove("shake");
     document.getElementById("popUp2").classList.remove("shake");
     document.getElementById("popUp3").classList.remove("shake");
     if(document.getElementById("popUp").classList.contains("show")){
        if(userName.value == localStorage.getItem("email")){
        document.getElementById("popUp").classList.remove("show");
        document.getElementById("popUp").classList.remove("shake");
        }
     }
    setTimeout(function(){
        if(userName.value !== localStorage.getItem("email")){
            
            document.getElementById("popUp").classList.add("shake");
            document.getElementById("popUp2").classList.add("shake");
            document.getElementById("popUp3").classList.add("shake");
        }
        if(userName.value !== localStorage.getItem("email")){
            document.getElementById("popUp").classList.add("show");
            // incorrectLogin(userName);
            
        }
        if(password.value !== localStorage.getItem("Password")){
            document.getElementById("popUp2").classList.add("show")
            // incorrectLogin();
        }
        if(document.getElementById("cnfPassword").value !== storedPass.value){
            document.getElementById("popUp3").classList.add("show")
        }
    },50);
       
}

}



