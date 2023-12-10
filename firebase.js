// Initialize Firebase with your project configuration
const firebaseConfig = {
    apiKey: "AIzaSyAUxXByak8xOoQgKAsv637M66p8txLk1vA",
    authDomain: "beta-health-f1173.firebaseapp.com",
    projectId: "beta-health-f1173",
    storageBucket: "beta-health-f1173.appspot.com",
    messagingSenderId: "73304572408",
    appId: "1:73304572408:web:0abd99d409f709fef5560d",
    measurementId: "G-ZGD24E0DDY"
  };
  firebase.initializeApp(firebaseConfig);
  
  // Reference to the Firebase Authentication service
  const auth = firebase.auth();
  
  // Function to handle signup
  function handleSignUp() {
    const firstName = document.getElementById('first_name').value;
    const lastName = document.getElementById('last_name').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
  
    // Create user with email and password
    auth.createUserWithEmailAndPassword(email, password)
      .then((userCredential) => {
        // Signed up successfully
        const user = userCredential.user;
        console.log(`User signed up: ${user.uid}`);
        // You can also update user profile information here
      })
      .catch((error) => {
        // Handle errors
        const errorCode = error.code;
        const errorMessage = error.message;
        console.error(`Signup error (${errorCode}): ${errorMessage}`);
      });
  }
  
  // Event listener for the signup form submission
  document.getElementById('signupForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent form submission to handle it with JavaScript
    handleSignUp();
  });
  