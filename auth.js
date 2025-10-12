/*contains functions for creating users and
signing them in*/
import { auth, db } from "./firebaseConfig.js"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js"
import {set, ref} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js"

export async function signUpUser(username, email, password) {
   
    const successMessage = document.getElementById("successful-su")
    
   try {
     const userCredentials= await createUserWithEmailAndPassword(auth, email, password)
     console.log(userCredentials)

     const user= userCredentials.user

     await set(ref(db, "/users" + user.uid),{
Email: email,
Username:username,
UserId: user.uid,
     })
     
     
     successMessage.style.display="block"
   
     window.location.href="signin.html"     
   } catch (error) {
    console.error(error);
   successMessage.innerHTML="Please try again"
   successMessage.style.display="block"
   successMessage.style.color="red"
   successMessage.style.transform="translate(20px, -20px)"
   }
}


export async function signInUser(email, password) {
const signinSuccess = document.getElementById("successful-si")



try {
 const userCredentials = await signInWithEmailAndPassword(auth, email, password)

alert("Successful signin")
window.location.href="index.html"
signinSuccess.style.display="block"

} catch (error) {
    alert(error + ". Failed to signin")
}
}