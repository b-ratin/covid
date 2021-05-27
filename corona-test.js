// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDEy5GI41Ul6HTzZQZqVIsECgv9MdrGQ_4",
    authDomain: "corona-test-form.firebaseapp.com",
    databaseURL: "https://corona-test-form-default-rtdb.firebaseio.com",
    projectId: "corona-test-form",
    storageBucket: "corona-test-form.appspot.com",
    messagingSenderId: "55448767728",
    appId: "1:55448767728:web:898e9e093873008c704635"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  var userInputsRef= firebase.database().ref("userInput");
  document.getElementById("testForm").addEventListener("submit", submitForm);
function submitForm(){
    var fname= getInputVal("firstname");
    var lname= getInputVal("lastname");
    var state= getInputVal("state");
    readState(state);
}

function readState(state){
    var senders;
    var ref = firebase.database().ref(state);
    ref.on("value", (data)=>{
        senders=data.val();
        document.getElementById("result").innerHTML="<br>"+senders.toUpperCase();
    });
}