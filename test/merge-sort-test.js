const assert = require('chai').assert;
const mergeSort = require('../merge-sort')


describe("merge sort", () => {
  it("sort small array by merge sort", () => {
    assert.deepEqual(mergeSort([5,3,4,2,1]), [1,2,3,4,5])
  })
  it("sort large array by merge sort", () => {

    a = Array.from({length: 200000}, (x,i) => i);

    function shuffle(array) {
      var currentIndex = array.length, temporaryValue, randomIndex;

      // While there remain elements to shuffle...
      while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
      }

      return array;
    }
    
    assert.deepEqual(shuffle(a), a)
  })
})
