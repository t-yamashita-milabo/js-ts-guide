const a = [1, 2, 3, 4, 5];

{
  // imperative
  const b: number[] = [];
  for (const x of a) {
    b.push(x ** 2);
  }

  console.log(b); // [ 1, 4, 9, 16, 25 ]
}

{
  // using map()
  const b = a.map((v) => v ** 2);

  console.log(b); //[ 1, 4, 9, 16, 25 ]
}

export {};
