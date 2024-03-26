/*var log = { username: ["sudhakar"], password: ["123"] };

function check() {
  var u = document.getElementById("username").innerHTML;
  var p = document.getElementById("password").innerHTML;
  for (var i = 0; i < log.length; i++) {
    if (log.username[i] == u && log.password[i] == p) {
      console.log("hello");
      return true;
    } else {
      console.log("nope");
      return false;
    }
  }
}

var log = { username: "sudhakar", password: "123" };

function check() {
  var u = document.getElementById("username").value;
  var p = document.getElementById("password").value;

  if (log.username === u && log.password === p) {
    console.log("hello");
    location.href = "home1.html";
    window.open("home1.html", "_blank");
  } else {
    console.log("nope");
    alert("Incorrect username or password!");
    return false;
  }
}
*/
var log = { username: "sudhakar", password: "123" };

function check() {
  var u = document.getElementById("username").value;
  var p = document.getElementById("password").value;

  if (log.username === u && log.password === p) {
    console.log("hello");
    location.href = "/home1.html"; // Redirects to the home page in the same tab
    window.open("trial.html", "_blank");
    document.getElementsByClassName(".hi").innerHTML = "hello";

    return true;
  } else {
    console.log("nope");
    alert("Incorrect username or password!");
    return false;
  }
}
