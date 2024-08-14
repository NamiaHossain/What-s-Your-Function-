// var startMyDay=function(){
//     return "Time for coffee and a shower!";
// };
// console.log(startMyDay());
var favoriteCookie=function (cookie){
    return `My favorite cookie is ${cookie}`;

};
console.log(favoriteCookie("Walnut banana"));
var introduce=function(name,occupation){
    return `My name is ${name} and I am a ${occupation}.`;
};
console.log(introduce("Namia","web developer"));
console.log(introduce("Yusuf","teacher"));

const prompt = require('prompt-sync')();
var hydrationFeedback = function(){
    var numGlasses = prompt("How many glasses of water did you have today?");
    if(numGlasses>=8){
        console.log("Congratulations!");
    }else{
        console.log("Drink more water.")
    }
};
hydrationFeedback(8)

