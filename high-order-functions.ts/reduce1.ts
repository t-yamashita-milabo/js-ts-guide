const a = [1, 2, 3, 4, 5];

{
  // imperative
  let sum = 0;
  for (const x of a) {
    sum += x;
  }

  console.log(sum); // 15
}

{
  // using reduce()
  let sum = a.reduce((acc, v) => acc + v, 0);

  console.log(sum); // 15
}

export {};
