/*Handles auth states, whether user is signed in or logged in*/
import { auth, db } from "./firebaseConfig.js";
import { get, ref } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

const username = document.getElementById("username")
const useremail = document.getElementById("useremail")
const userid= document.getElementById("userid")
const profilepicture= document.getElementById("profilepicture")

onAuthStateChanged(auth, async (user) => {
    if (user) {
        try {
            const snapshot = await get(ref(db, '/users' + user.uid))
            const backupimage= localStorage.getItem("profilepic")
            if (snapshot.exists()) {
                const userData = snapshot.val()
                username.innerHTML = userData.Username
                userid.innerHTML = userData.Userid 
                useremail.innerHTML= userData.Email
                profilepicture.src = userData.ProfilepicSrc  || backupimage || "user.png"
            } else {
                username.innerHTML = "undefined"
                 userid.innerHTML = "undefined"
                useremail.innerHTML= "undefined" 
            
            }
        } catch (error) {
            console.error(error)
        }
    }
    else{
        window.location.href='signin.html'
    }
})

const logoutbtn = document.getElementById("img")
logoutbtn.addEventListener("click", async ()=>{
    try{
        await signOut(auth);
        window.location.href="signin.html"
    }
    catch(error){
        cosole.error(error)
    }
})

