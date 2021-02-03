console.log('Break');
const num = [1, 2, 3, 4, 5, 6, 7, 8, 9];
for (let i = 0; i < num.length; i++) {
    const element = num[i];
    if(element > 6){
        break;
    }
    console.log(element);
}

console.log('Continue');
const num1 = [1, 2, -3, 4, -5, 6, -7, -8, 9];
for (let i = 0; i < num1.length; i++) {
    const element = num1[i];
    if(element < 0){
        continue;
    }
    console.log(element);
}