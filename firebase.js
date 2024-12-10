{/* <script type="module"> */}
  // Import the functions you need from the SDKs you need
  import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
  import { getAnalytics } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-analytics.js";
  // TODO: Add SDKs for Firebase products that you want to use
  // https://firebase.google.com/docs/web/setup#available-libraries

  // Your web app's Firebase configuration
  // For Firebase JS SDK v7.20.0 and later, measurementId is optional
  const firebaseConfig = {
    apiKey: "AIzaSyDHv6bOiaBSY03hccjwbfceK_4RDORRApo",
    authDomain: "realhackathon-e4425.firebaseapp.com",
    databaseURL: "https://realhackathon-e4425-default-rtdb.firebaseio.com",
    projectId: "realhackathon-e4425",
    storageBucket: "realhackathon-e4425.firebasestorage.app",
    messagingSenderId: "811483487633",
    appId: "1:811483487633:web:a55d68726cf7444fc7ce30",
    measurementId: "G-Y91PENQR7K"
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
// </script>