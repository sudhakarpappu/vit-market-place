/*
var data = {
  name: ["tv", "mouse", "phone", "bag"],
  price: [10000],
  descp: ["good supper"],
  place: ["chennai,tamil nadu"],
};
alert("loaded");
function hello() {
  var t = document.getElementsByClassName("it");
  var v = "";
  for (var i = 0; i < data.name.length; i++) {
    v +=
      "<div class='obj1'>" +
      "<p>Name: " +
      data.name[i] +
      "</p>" +
      "<p>Price: " +
      data.price[i] +
      "</p>" +
      "<p>Description: " +
      data.descp[i] +
      "</p>" +
      "<p>Place: " +
      data.place[i] +
      "</p>" +
      "</div>";
  }

  for (var j = 0; j < t.length; j++) {
    t[j].innerHTML = v;
  }
}

var log = { username: ["sudhakar"], password: ["123"] };
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

var log = { username: ["sudhakar"], password: ["123"] };

function check() {
  var u = document.getElementById("username").value;
  var p = document.getElementById("password").value;
  alert("hii");
  if (log.username === u && log.password === p) {
    console.log("hello");
    location.href = "/home1.html";
    window.open("trial.html", "_blank");
    document.getElementsByClassName(".hi").innerHTML = "hello";

    return true;
  } else {
    console.log("nope");
    alert("Incorrect username or password!");
    return false;
  }
}
function check3() {
  uname = document.getElementsById("username").innerHTML;
  upass = document.getElementById("password").innerHTML;
  alert(uname + upass);
  var i = log.username.length;
  log.username[i + 1] = uname;
  log.password[i + 1] = upass;
}
*/
var data = {
  1: {
    image: "lap1.jpeg",
    name: "HP laptop",
    price: "RS. 89999.00",
    stock: 50,
    type: "Electronics",
  },
  2: {
    name: "OPPO Smartphone",
    price: "RS. 59999.00",
    stock: 100,
    type: "Electronics",
    image: "oppo.jpeg",
  },
  3: {
    name: "Realme Headphones",
    price: "RS. 2999.00",
    stock: 200,
    type: "Electronics",
    image: "realme.jpeg",
  },
  4: {
    name: "Oneplus y50 Television",
    price: "RS. 79999.00",
    stock: 30,
    type: "Electronics",
    image: "oneplus.jpeg",
  },
  5: {
    name: "Samsung Tablet",
    price: "RS. 44999.00",
    stock: 80,
    type: "Electronics",
    image: "samsung.jpeg",
  },
  6: {
    name: "Coffee Maker",
    price: "RS. 2499.00",
    stock: 150,
    type: "Appliances",
    image: "coffee.jpeg",
  },
  7: {
    name: "JBL Bluetooth Speaker",
    price: "RS. 1999.00",
    stock: 120,
    type: "Electronics",
    image: "jbl.jpeg",
  },
  8: {
    name: "ASUS Wireless Mouse",
    price: "RS. 599.00",
    stock: 300,
    type: "Electronics",
    image: "asus.jpeg",
  },
  9: {
    name: "PS5 Console",
    price: "RS. 34999.00",
    stock: 50,
    type: "Electronics",
    image: "ps5.jpeg",
  },
  10: {
    name: "Fitness Tracker",
    price: "RS. 2999.00",
    stock: 100,
    type: "Fitness",
    image: "fit.jpeg",
  },
};
function hello() {
  var t = document.getElementsByClassName("it");
  var v = "";
  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      v +=
        "<div class='obj1'>" +
        "<img src='" +
        data[key].image +
        "' alt='" +
        data[key].name +
        "'>" +
        "<p>Name: " +
        data[key].name +
        "</p>" +
        "<p>Price: " +
        data[key].price +
        "</p>" +
        "<p>Stock: " +
        data[key].stock +
        "</p>" +
        "<p>Type: " +
        data[key].type +
        "</p>" +
        "</div>";
    }
  }
  // Append the generated HTML to the elements with class "it"
  for (var i = 0; i < t.length; i++) {
    t[i].innerHTML = v;
  }
}
