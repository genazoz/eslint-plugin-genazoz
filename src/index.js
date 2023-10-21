const hello = () => {
  console.log("Hello World");
};

hello();
// Custom include
const toSomeFunction = () => {
  console.log("Hello ");
};
// Custom exclude
const excludeSomeFunction = () => {
  console.log("Hello 1");
};
toSomeFunction();
excludeSomeFunction();
