var firebaseConfig = {
      apiKey: "AIzaSyCJ19d3aAQVKQJGDctBTNyGCGeqCLqrXNU",
      authDomain: "kwitter-6e649.firebaseapp.com",
      databaseURL: "https://kwitter-6e649-default-rtdb.firebaseio.com",
      projectId: "kwitter-6e649",
      storageBucket: "kwitter-6e649.appspot.com",
      messagingSenderId: "408127120333",
      appId: "1:408127120333:web:60ffb59ca0f36e0e825a84"
    };
    firebase.initializeApp(firebaseConfig);

    function addRoom()
    {
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child(room_name).update({
            purpose : "adding room name"
      });
      
      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
    }

function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
console.log("Room name - "+ Room_names);
row = "<div class='room_name' id=" + Room_names +"onclick='redirectToRoomName(this.id)'>#" + Room_names + "</div><hr>";
document.getElementById("output").innerHTML +=row;
    });});}
getData();

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
      window.location = "kwitter_page.html";
}
function logout()
{
      localStorage.removeItem("user_name")
      localStorage.removeItem("room_name")
      window.location = "index.html"
}
