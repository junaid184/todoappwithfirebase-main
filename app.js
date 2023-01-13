// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.15.0/firebase-app.js";
import {
  getDatabase,
  ref,
  set,
  child,
  get,
  onValue,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-database.js";
import {
  getAuth,
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
} from "https://www.gstatic.com/firebasejs/9.15.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAZZfTDY76Y__4UrEAnAjU93FvZnJz6ZO4",
  authDomain: "quiz-app-f8dc4.firebaseapp.com",
  databaseURL: "https://quiz-app-f8dc4-default-rtdb.firebaseio.com",
  projectId: "quiz-app-f8dc4",
  storageBucket: "quiz-app-f8dc4.appspot.com",
  messagingSenderId: "897786823700",
  appId: "1:897786823700:web:51c431f619b766c3e21301",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getDatabase(app);


const register = () => {
  let username = document.getElementById("username");
  let email = document.getElementById("email");
  let password = document.getElementById("password");

  createUserWithEmailAndPassword(auth, email.value, password.value)
    .then((userCredential) => {
      // Signed in
      var uid = userCredential.user.uid;
      let user = {
        email: email.value,
        username: username.value,
      };
      set(ref(db, `users/${uid}`), user) //saving user in database
        .then((userCredential) => {
          alert("user registered");
        })
        .catch((error) => {
          console.log(error.message);
        });
      // ...
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      console.log(errorMessage);
      // ..
    });
};
const registerBtn = document.getElementById("register");
registerBtn.addEventListener("click", register);
