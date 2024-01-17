// [0,1,1,2,3,5,8]
// the next number in the sequence is the sum of the previous two numbers
function fibonnaci(value){
    let fibo = [0,1]
    for(let i=2;i<value;i++){
        fibo[i] = fibo[i-1] + fibo[i-2]
    }
    return fibo
}
console.log(fibonnaci(5))

