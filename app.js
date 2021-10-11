var ele1 = document.body.querySelector(".first");
var number = document.body.querySelector(".number")



var numberchange = 5

var list = [
    {
        name: "Harry",
        age: 25
    },
    {
        name: "Larry",
        age: 15
    },
    {
        name: "Bert",
        age: 45
    },
    {
        name: "Jerry",
        age: 35
    },
    {
        name: "Berry",
        age: 5
    },
    {
        name: "Bart",
        age: 55
    }
];

for(var i=0; i<list.length; i++){
    var ele = document.createElement("div");
    var nameEle = document.createElement("h2");
    var ageEle = document.createElement("h4");

    nameEle.innerHTML = "Name: " + list[i].name;
    ageEle.innerHTML = "Age: " + list[i].age;

    ele.appendChild(nameEle);
    ele.appendChild(ageEle);
    ele1.appendChild(ele);
    if(list[i].age > 25){
        ageEle.style.color = "green"
    }
}

number.innerHTML = "Your number is: " + numberchange

document.body.querySelector(".counter").addEventListener("click", function(){
    numberchange = numberchange + 1
    number.innerHTML = "Your number is: " + numberchange
})