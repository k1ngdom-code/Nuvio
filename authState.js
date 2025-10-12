/*Handles auth states, whether user is signed in or logged in*/
import { auth, db } from "./firebaseConfig.js";
import { get, ref } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js";
import { onAuthStateChanged, signOut } from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js";

//shared innerhtml of each page

//for homepage
const usernamePort = document.getElementById("usernameinfo")
//for posts page
//const postsUsername = document.getElementById("post-username")


onAuthStateChanged(auth, async (user) => {
    if (user) {
        try {
            const snapshot = await get(ref(db, './users' + user.uid))
            if (snapshot.exists()) {
                const userData = snapshot.val()
                usernamePort.innerHTML = userData.Username
            } else {
                usernamePort.innerHTML = ""
            }
        } catch (error) {
            console.error(error)
        }
    }
    else{
        window.location.href='signin.html'
    }
})