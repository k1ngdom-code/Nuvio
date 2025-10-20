/*contains functions for creating users and
signing them in*/
import { auth, db } from "./firebaseConfig.js"
import {createUserWithEmailAndPassword, signInWithEmailAndPassword} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-auth.js"
import {set, push, ref} from "https://www.gstatic.com/firebasejs/12.3.0/firebase-database.js"

export async function signUpUser(username,dob , profilepicimage , city , phoneno, email, password) {
   
    const successMessage = document.getElementById("successful-su")
    successMessage.innerHTML = "Signing up..."
    successMessage.style.display="block"
   try {
     const userCredentials= await createUserWithEmailAndPassword(auth, email, password)
     console.log(userCredentials)

     const user= userCredentials.user

     await set(ref(db, "/users" + user.uid),{
Email: email,
Username:username,
Userid: user.uid,
ProfilepicSrc: localStorage.getItem("profilepic"),
Dateofbirth: dob,
City : city
     })
     
await push(ref(db, '/totalusers'),{
ProfilepicSrc: profilepicimage,
Phoneno : phoneno,
Username:username,
Email: email,
JoinedAt : new Date().toLocaleDateString('en-CA')
})


      successMessage.innerHTML = "Signed up!. Redirecting..."
     successMessage.style.display="block"
     window.location.href="signin.html"     
   } catch (error) {
    console.error(error);

   switch(error.code){
    case "auth/email-already-in-use":
    successMessage.innerHTML="Email has already been used"
    successMessage.style.transform="translate(0px, -20px)"
   
    break;

    case 'auth/invalid email':
      successMessage.innerHTML="Invalid email"
      successMessage.style.transform="translate(0px, -20px)"
   
      break

      case error:
        successMessage.innerHTML="Please try again"
        successMessage.style.transform="translate(0px, -20px)"
   
   }

  
   successMessage.style.display="block"
   successMessage.style.transform="translate(0px, -20px)"
   
   }
}


export async function signInUser(email, password) {
const signinSuccess = document.getElementById("successful-si")
signinSuccess.innerHTML='Signing in...'
signinSuccess.style.color="black"
signinSuccess.style.display="block"


try {
 const userCredentials = await signInWithEmailAndPassword(auth, email, password)

signinSuccess.innerHTML="You're in!!"
window.location.href="nuvio.html"

} catch (error) {
signinSuccess.innerHTML="Failed to signin."
signinSuccess.style.marginLeft="-55%"
}
}


