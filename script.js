console.log("This is javascript. Is it working")

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