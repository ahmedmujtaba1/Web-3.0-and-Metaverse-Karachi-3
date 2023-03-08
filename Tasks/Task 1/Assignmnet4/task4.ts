function ToCreateFactorial(num: number) {
  let factorial = num;
  for (var i = 1; i < num; i++) {
    factorial *= i;
  }
  console.log(factorial);
}
ToCreateFactorial(5);
