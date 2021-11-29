// --- txt exp --- //
let txt = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
console.log(txt.length);

let text = "Please visit Microsoft!";
let newText = text.replace("Microsoft","BGU");
console.log("text = "+text);
console.log("newText = "+newText);

let text1 = "Hello";
let text2 = "World";
let text3 = text1.concat(" ", text2);
console.log(text3);

// --- func exp --- //
function greet() {
    let hour = new Date().getHours();
    console.log("this hour: "+hour);
    if (hour < 18) {
        greeting = "Good day";
    }
    else if (hour == 18) {
        greeting = "Good evening";
    }
    else {
        greeting = "Good night";
    }
    document.getElementById("p_body").innerHTML = greeting;
}

// --- loop exp --- //
let cars = ["Toyota", "Honda", "Mazda"];
console.log(cars);
var cars_txt = "";
for (var i = 0; i < cars.length; i++) {
    if (i == cars.length-1) {
        cars_txt += cars[i]
    }
    else {
        cars_txt += cars[i]+", ";
    }
    
}
console.log(cars_txt);

// -- stop motion exp -- //
var images = ["images/puppy.jpg", "images/pug2.png", "images/pug.jpg"];
var i = 0;

function stopmotionloop() {
    setTimeout(() => {
        document.getElementById("p_1").src = images[i];
        i++;
        if (i < images.length) {
            stopmotionloop();
        }
        else {
            i = 0;
        }
    }, 500)
}

// --- object exp --- //
var person = {
    first_name: "John",
    last_name: "Doe",
    id: 5566,
    full_name: function() {return this.first_name + " " + this.last_name;}
}

console.log(person.full_name());