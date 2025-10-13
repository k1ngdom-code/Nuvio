 const userIcon= document.getElementById("userIcon")
const userInfo= document.getElementById("ui")

userIcon.addEventListener("click",()=>{
    userInfo.style.scale="1" 
})
const close= document.getElementById("heading")
close.addEventListener("click",function(){
     userInfo.style.scale="0"
})   

const mainpostinput= document.getElementById("main-post")
mainpostinput.addEventListener("input",function(){
     userInfo.style.scale="0"
})   