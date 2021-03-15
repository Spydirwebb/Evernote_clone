import firebase from 'firebase/app';
import 'firebase/firestore';

/*-- The core Firebase JS SDK is always required and must be listed first -->
<script src="https://www.gstatic.com/firebasejs/8.3.0/firebase-app.js"></script>

<!-- TODO: Add SDKs for Firebase products that you want to use
     https://firebase.google.com/docs/web/setup#available-libraries --> */

  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyCk-mP-7w5yhYwie2yYdeXYtbMmaU0dlmA",
    authDomain: "evernote-clone-52d19.firebaseapp.com",
    databaseURL: "https://evernote-clone-52d19-default-rtdb.firebaseio.com",
    projectId: "evernote-clone-52d19",
    storageBucket: "evernote-clone-52d19.appspot.com",
    messagingSenderId: "980152396246",
    appId: "1:980152396246:web:717e938799ffac96fddc77"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export default firebaseConfig;