const a = [1, 2, 3, 4, 5];

{
  // get values via index then assign them to variables
  const x = a[0];
  const y = a[1];
  const z = a.slice(2);
  console.log(x, y, z); // 1 2 [ 3, 4, 5 ]
}

{
  // using destructure
  const [x, y, ...z] = a;
  console.log(x, y, z); // 1 2 [ 3, 4, 5 ]
}

export {};
