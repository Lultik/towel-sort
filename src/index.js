
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return matrix ? matrix.map((item, index) => {
      if(index%2 === 1) item.reverse()
      return item
  }).flat() : []
}
