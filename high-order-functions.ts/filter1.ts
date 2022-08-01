const a = [1, 2, 3, 4, 5];

{
  // imperative

  const b: number[] = [];
  for (const x of a) {
    if (x % 2 == 0) {
      b.push(x);
    }
  }

  console.log(b); // [ 2, 4 ]
}

{
  // using filter()
  const b = a.filter((v) => v % 2 == 0);

  console.log(b); // [ 2, 4 ]
}

export {};
