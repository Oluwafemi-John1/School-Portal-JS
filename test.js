const sumFact = (val) => {
    console.time("sum")
    let sum = 0     
    // run once
    for (let i = 1; i <= val; i++) {
        sum += i 
        // run as many times as the input (n)
    }
     console.timeEnd("sum")
    return sum;
   
    // Once
}
// n
// Big O - O(n) - Linear complexity
console.log(sumFact(4))
