
setTimeout(function(){
    console.log("Naber");
},2000);



let i=0;
let value=setInterval(function(){
i++;
console.log("Sayı:",i);

});
document.getElementById("button").addEventListener("click", function(){
clearInterval(value);
});