function getprimenumbers(n1, n2) {
  let arr = [];
  for (let i = n1; i <= n2; i++) {
    if (isprime(i)) {
      arr.push(i);
    }
  }
  return arr;
}

function isprime(n) {
  if (n < 2) return false;
  for (let i = 2; i < n; i++) {
    if (n % i == 0) {
      return false;
    }
  }
  return true;
}
