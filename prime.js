// numbers divisible by 1 and itself

// divide by every number - 

// function prime(num){
//     if(num < 2){
//         return false
//     }
//     for(let i =2; i < num; i++){
//         if(num%i==0){
//             return false
//         }
//     }
//     return true
// }

function prime(num){
    if(num < 2){
        return false
    }
    for(let i =2; i <= Math.sqrt(num); i++){
        if(num%i==0){
            return false
        }
    }
    return true
}
console.log(prime(5))
// Big O Notation - O(n)
// Big O Notation - O(sqrt(n))

// Power of 2 - 2^0 = 1, 2^1 = 2, 2^2 = 4, 2^3 = 8
// Array and Object Methods - Big O