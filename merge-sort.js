const mergeSort = (inputArray) => {
  if(inputArray.length <= 1) {
    return inputArray;
  }
  let middle = Math.floor(inputArray.length/2)
  let leftNumbers = inputArray.slice(0,middle)
  let rightNumbers = inputArray.slice(middle)

  let sortedLeft = mergeSort(leftNumbers)
  let sortedRight = mergeSort(rightNumbers)

  return merge(sortedLeft,sortedRight);
}

const merge = (left,right) => {
  let sorted = []
  while (left.length != 0 && right.length != 0) {
      if(left[0] <= right[0]) {
        sorted.push(left.shift());
      } else {
        sorted.push(right.shift());
      }
  }
  return sorted.concat(left).concat(right);
}


module.exports = mergeSort;
