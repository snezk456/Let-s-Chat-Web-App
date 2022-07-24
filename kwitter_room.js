// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyAxBeHEc0_9ubWqWWffvQg7ECHo-gx8NDE",
  authDomain: "kwitter-project-c778e.firebaseapp.com",
  databaseURL: "https://kwitter-project-c778e-default-rtdb.firebaseio.com",
  projectId: "kwitter-project-c778e",
  storageBucket: "kwitter-project-c778e.appspot.com",
  messagingSenderId: "300411856961",
  appId: "1:300411856961:web:405d8bc75b0dcdd930fec0",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

  user_name = localStorage.getItem("user_name");
document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

function addRoom()
{
  room_name = document.getElementById("room_name").value;

  firebase.database().ref("/").child(room_name).update({
    purpose : "adding room name"
  });

    localStorage.setItem("room_name", room_name);
    
    window.location = "chatApp_page.html";
}

function getData() {  firebase.database().ref("/").on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key;
       Room_names = childKey;
       console.log("Room Name - " + Room_names);
      row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#"+ Room_names +"</div><hr>";
      document.getElementById("output").innerHTML += row;
    });
  });

}

getData();

function redirectToRoomName(name)
{
  console.log(name);
  localStorage.setItem("room_name", name);
    window.location = "chatApp_page.html";
}
