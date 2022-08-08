let objToCopy = {
  foo: 1,
  bar: 2,
  qux: 3,
};

function copyObj(object, array) {
  let copy = {};
  
  if (array) {
    array.forEach(function(key) {
      copy[key] = object[key];
    });
    return copy;
  } else {
    return Object.assign(copy, object);
  }
}

let newObj = copyObj(objToCopy);
console.log(newObj);

let newObj2 = copyObj(objToCopy, [ 'foo', 'qux' ]);
console.log(newObj2);

let newObj3 = copyObj(objToCopy, [ 'bar' ]);
console.log(newObj3);

