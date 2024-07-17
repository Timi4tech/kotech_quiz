const Username = document.getElementById("Username");
const Fullname = document.getElementById("fullname");
const Email = document.getElementById("Email");
const Password = document.getElementById("Password");
const buttonlogin = document.getElementById("buttonsignup");
const passwordCheck = document.getElementById("show");
//login details
const loginPassword = document.getElementById("loginPassword");
const loginUserEmail = document.getElementById("loginUserEmail");
const buttonlogin2 = document.getElementById("buttonsignup");
const loginpasswordCheck = document.getElementById("loginshow");


const form = document.getElementById("form2");
form.addEventListener('submit',(e)=>{
    e.preventDefault()
    document.getElementById("success").innerText = "Signup Successful"
    document.getElementById("success").style.color = "green "
    setTimeout(() => {
        document.getElementById("form2").submit();
        console.log("God is good")
    }, 5000);
    const signupEmail = Email.value.trim();
    if(signupEmail===localStorage.getItem("Email")){
       document.getElementById("success").innerText = "Email already exist please login"
       document.getElementById("success").style.color = "red"
       e.preventDefault();
    }
userDetails()
})

userDetails =()=>{
       const signupUsername = Username.value.trim();
const signupFullname = Fullname.value.trim();
const signupEmail = Email.value.trim();
const signupPassword = Password.value.trim();
localStorage.setItem("Username",signupUsername)
localStorage.setItem("Fullname",signupFullname)
localStorage.setItem("Email",signupEmail)
localStorage.setItem("Password",signupPassword)

}
  

passwordCheck.onclick = function(){
   if(passwordCheck.checked){
      document.getElementById("Password").type = "text"
      }else
      {document.getElementById("Password").type = "password"}
     
}
   
//login 
const form1 = document.getElementById("form1");
form1.addEventListener('submit',(e)=>{
    e.preventDefault()
        const  vloginPassword = loginPassword.value.trim() 
        const vloginUserEmail = loginUserEmail.value.trim()
            setTimeout(() => {
                 if(vloginPassword === localStorage.getItem("Password") && vloginUserEmail===localStorage.getItem("Email")){
                
                    document.getElementById("form1").submit();
    } }, 2000);
        
        if(vloginPassword == localStorage.getItem("Password") && vloginUserEmail != localStorage.getItem("Email")){
                document.getElementById("loginSuccess").innerText = "please enter a valid password"
                 document.getElementById("loginSuccess").style.color = "red"
                 console.log("good god")
    } 
     else if(vloginPassword !== localStorage.getItem("Password") && vloginUserEmail === localStorage.getItem("Email") ) {
        document.getElementById("loginSuccess").innerText = "please enter valid password"
        document.getElementById("loginSuccess").style.color = "red"
    } 
     else {if (vloginPassword !== localStorage.getItem("Password") && vloginUserEmail !== localStorage.getItem("Email")){
         document.getElementById("loginSuccess").innerText = "user details does not exist, please signup"
        document.getElementById("loginSuccess").style.color = "red"
    }}
    
})

loginpasswordCheck.onclick = function(){
    if(loginpasswordCheck.checked){
       document.getElementById("loginPassword").type = "text"
       }else
       {document.getElementById("loginPassword").type = "password"}
      
 }
 
 const textsignup = document.getElementById("textsignup")
 textsignup.addEventListener("click",(e)=>{
    document.getElementById("groupsignup").style.display = "block"
    document.getElementById("grouplogin").style.display = "none"
  
 })
 
 const textlogin = document.getElementById("textlogin")
 textlogin.addEventListener("click",(e)=>{
    document.getElementById("grouplogin").style.display = "block"
    document.getElementById("groupsignup").style.display = "none"
  
 })