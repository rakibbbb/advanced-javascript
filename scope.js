function sum(first, second) {
    const result = first + second;
    if(result > 30){
        var mood = 'happy';
    }
    console.log(mood);
    return result;
}

const output = sum(15, 19);
console.log(output);
