type Library = {
  name: string;
  lang: string;
};

const libs: Library[] = [
  {
    name: "react",
    lang: "javascript",
  },
  {
    name: "numpy",
    lang: "python",
  },
  {
    name: "pandas",
    lang: "python",
  },
  {
    name: "lombok",
    lang: "java",
  },
  {
    name: "axios",
    lang: "javascript",
  },
];

{
  // imperative
  const lang2Libs: Map<string, string[]> = new Map();
  for (const lib of libs) {
    lang2Libs.set(lib.lang, [...(lang2Libs.get(lib.lang) || []), lib.name]);
  }

  console.log(lang2Libs);
  // Map(3) {
  //   'javascript' => [ 'react', 'axios' ],
  //   'python' => [ 'numpy', 'pandas' ],
  //   'java' => [ 'lombok' ]
  // }
}

{
  // using reduce
  const lang2Libs: Map<string, string[]> = libs.reduce(
    (acc, v) => acc.set(v.lang, [...(acc.get(v.lang) || []), v.name]),
    new Map()
  );

  console.log(lang2Libs);
  // Map(3) {
  //   'javascript' => [ 'react', 'axios' ],
  //   'python' => [ 'numpy', 'pandas' ],
  //   'java' => [ 'lombok' ]
  // }
}

export {};
