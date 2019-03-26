let sum = 0,
    i,
    upper_bound = 1000;

for(i = 1; i < upper_bound; i++){
    if(i % 3 === 0|| i % 5 === 0){
        sum += i;
    }
}
console.log(sum);