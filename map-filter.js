//javascript map
const number = [3, 5, 7, 9, 12, 18];
const output = [];
for (let i = 0; i < number.length; i++) {
    const element = number[i];
    result = element * element;
    output.push(result);
}
console.log(output);

const num = [5, 7, 8, 11, 15];
const output1 = num.map(function(element){
    return element * element;
});
console.log(output1);

const output2 = num.map(x => x * x);
console.log(output2);

//javascript filter
const bigger = number.filter(x => x > 7);
console.log(bigger);
const smaller = number.filter(x => x < 10);
console.log(smaller);