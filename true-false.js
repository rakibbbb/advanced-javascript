//Falsy:
// 0
// ""
// undefined
// null
// NaN

//Truty
// number, string, " ", [], {}

let age = 0 ;
console.log(age);
if(age || age == 0){
    console.log('Condition is true.');
}
else{
    console.log('Conditon is false.');
}