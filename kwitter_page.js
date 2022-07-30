var firebaseConfig = {
    apiKey: "AIzaSyAxBeHEc0_9ubWqWWffvQg7ECHo-gx8NDE",
    authDomain: "kwitter-project-c778e.firebaseapp.com",
    databaseURL: "https://kwitter-project-c778e-default-rtdb.firebaseio.com",
    projectId: "kwitter-project-c778e",
    storageBucket: "kwitter-project-c778e.appspot.com",
    messagingSenderId: "300411856961",
    appId: "1:300411856961:web:405d8bc75b0dcdd930fec0",
  };
  
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome" + user_name + "!";


function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
   Room_names = childKey;
  //Start code
  console.log("Room Name - " + Room_names);
  row = "<div class='room_name' id="+Room_name+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
  document.getElementById("output").innerHTML += row;
  //End code
  });});}
getData();

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send()
{
  msg = document.getElementById("msg").value;
  firebase.database().ref(room_name).push({
        name:user_name,
        message:msg,
        like:0
  });


  document.getElementById("msg").value = "";
}

function logout() {
  localStorage.removeItem("user_name");
  localStorage.removeItem("room_name");
  window.location = "index.html";
}