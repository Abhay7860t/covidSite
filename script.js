// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCPKRpt-lX1dzmqbg4sJQI8BbXc-UTRODo",
  authDomain: "covid-contactform.firebaseapp.com",
  databaseURL: "https://covid-contactform-default-rtdb.firebaseio.com",
  projectId: "covid-contactform",
  storageBucket: "covid-contactform.appspot.com",
  messagingSenderId: "973892742426",
  appId: "1:973892742426:web:672d3b81666021527d50a3",
};

//initialize the firebase
firebase.initializeApp(firebaseConfig);

//reference your database
var contactFormDB = firebase.database().ref("covid-contactform");

document.getElementById("contactForm").addEventListener("submit", submitForm);

function submitForm(e) {
  e.preventDefault();

  var name = getElementByVal("name"); // id here
  var emailid = getElementByVal("email");
  var phone = getElementByVal("phno");
  var textcontent = getElementByVal("textarea");

  //   console.log(name, emailid, phone, textcontent);

  saveMessages(name, emailid, phone, textcontent);

  //enable alert
  document.querySelector(".alert").style.display = "block";

  // remove the alert
  setTimeout(() => {
    document.querySelector(".alert").style.display = "none";
  }, 3000);

  // reset the form
  document.getElementById("contactForm").reset();
}

const saveMessages = (name, emailid, phone, textcontent) => {
  var newContactForm = contactFormDB.push();

  newContactForm.set({
    name: name,
    emailid: emailid,
    phone: phone,
    textcontent: textcontent,
  });
};

const getElementByVal = (id) => {
  return document.getElementById(id).value;
};
