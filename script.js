console.log("This is javascript. Is it working")

let author = "Radek Livečka"

console.log(author);

let post = {
    title: "My post",
    description: "My first post",
    likeCount: 12,
    comments: ["cool", "nice job"],
}; 

let colors = ["orange", "blue", "red", "black"]

console.log(colors);

console.log(post.title);

let age = 18;

if (age >= 18) {
    console.log("you are ok");
}
else{
    console.log("you are too young!");
}

for (let i = 0; i < 10;  i++) {
    console.log(i);
    
}

colors.forEach(prdel => {
    console.log(prdel);    
});

let name = ["Petr", "Jan", "Karel"]

name.forEach(x => {
    console.log("Nazdar " + x);
})

let pozdrav = name =>{
    console.log(`Ahoj ${name}`);
}

pozdrav("Pepa")
pozdrav("Honza")

// Jquery

// $(selector).action()

// $("div").text("hello world")

let piv = [".first", ".second", ".third", ".fifth"]

$(".btn").click(() => {
    $(piv[0]).toggleClass("fifth");
}
)

console.log(piv[0])

let names = ["Karel", "Pepa", "Ondra", "Jirka", "Honza"]

names.push("Eulálie")

if (names[1].length <= 4 ) {
    console.log("Krátký");
} else {
    console.log("Dlouhý");
};

names.forEach(x => {
    console.log(x)
});

let barvy = {
    title: "Barvy",
    seznam: ["green", "blue", "red", "yellow"],
    count: 4,
}


// barvy.forEach(xx => {
//     console.log(xx);
// });

let jablka = 4;

for (let i = 0; i < jablka; i++) {
    console.log(i);  
}

for (let i = 0; i < 21; i++) {
    console.log(i);
    
}

let add = (a, b) => {
    for (a ; a <= b; a++) {
         console.log(a);
        
    }
  };
  
  add(1, 15)

 let printNumberTill = (x) => {
     for (let i = 1; i <= x; i++) {
         console.log(i);
         
     }

 }

 printNumberTill(20)



 let getGreetingTo = (x) => {
     console.log("Hello " + x);
 }

 getGreetingTo("Mark")

 let seznam1 = [ 0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

 let printValues = seznam1 => {
     for (let i = 0; i < seznam1.length; i++){
         console.log(seznam1[i])
     }
 }

 printValues([0 ,3, 6, 7, 9]);

 seznam1.forEach((number) => {
     console.log(number);
 });

 let myNumbers = [10, 20, 30, 50, 12];

