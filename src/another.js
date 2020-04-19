console.log('second js file to see if it gets bundled');

function Kerri(name) {
  return 'Hello ' + name;
}

let testFunc = Kerri('Kerri');
console.log(testFunc);

export default testFunc;
