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
    user_name=localStorage.getItem("user_name");
    room_name=localStorage.getItem("room_name");

   function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
         firebase_message_id = childKey;
         message_data = childData;
      } });  }); }
getData();

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