// Find 6th prime number before the number if it  is even
num = 67;
limit= 5
if (num > 1) {
  count = 0;
   prime=0
  while (count < limit) {
    num--;
    if(num>1){
    fact = 0;
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        fact++;
        break;
      }
    }
    if(fact==0){
        count++
        prime=num
    }
  }
  else{
    break
}
}
  if(count<limit){
    console.log("not enough primes");
  }else{
console.log(prime)
  }
}
// Find 6th prime number after the number if it is odd
num = 67;
limit= 5
if (num > 1) {
  count = 0;
   prime=0
  while (count < limit) {
    num++;
    if(num>1){
    fact = 0;
    for (i = 2; i < num; i++) {
      if (num % i === 0) {
        fact++;
        break;
      }
    }
    if(fact==0){
        count++
        prime=num
    }
  }
  else{
    break
}
}
  if(count<limit){
    console.log("not enough primes");
  }else{
console.log(prime)
  }
}