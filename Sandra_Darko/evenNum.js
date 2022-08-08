
let even_numbers = [];
for (let i = 1; i < 10000; i++) {
    if(i % 2 == 0)
    {
        even_numbers.push(i);
    }
    
}
let sum = 0;
for (let i = 0; i < even_numbers.length; i++) {
    sum += i;
    
}

console.log(even_numbers);
let average = sum / even_numbers.length
console.log("The average is " + average);