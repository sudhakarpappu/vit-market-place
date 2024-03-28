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
        "<img src='" +
        data[key].image +
        "' alt='" +
        data[key].name +
        "'>" +
        "</div>";
    }
  }
  // Append the generated HTML to the elements with class "it"
  for (var i = 0; i < t.length; i++) {
    t[i].innerHTML = v;
  }
}
