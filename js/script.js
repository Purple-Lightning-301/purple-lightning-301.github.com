firstFunction = () => {
  let x = 100 + 200;
  console.log("200 + 100 = " + x);

  let myArray = [
    "one",
    "two",
    "three",
    "four",
    "five",
    "six",
    "seven",
    "eight",
    "nine",
    "ten",
  ];
  console.log("mang co do dai:" + myArray.length);

  console.log("phan tu i=7: " + myArray[7]);
  //xoa phan tu thu 5
  let removedArray = myArray.splice(5, 1);
  console.log("mang da xoa:" + myArray);

  let secondArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  let tripleArray = secondArray.map((a) => a * 3);
  console.log(tripleArray);
};
console.log("hello");
firstFunction();
