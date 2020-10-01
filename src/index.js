
exports.min = function min (array) {
  if (!Array.isArray(array) || !array.length) {
    return 0;
  }
  let min = array[0];
  array.forEach(element => {
    if (element<min) {
      min = element;
    }
  });
  return min;
}

exports.max = function max (array) {
  if (!Array.isArray(array) || !array.length) {
    return 0;
  }
  let max = array[0];
  array.forEach(element => {
    if (element>max) {
      max = element;
    }
  });
  return max;
}

exports.avg = function avg (array) {
  if (!Array.isArray(array) || !array.length) {
    return 0;
  }
  

  let sum = 0;
  array.forEach(element => {
    sum += element;
  });
  return sum/array.length;
}
