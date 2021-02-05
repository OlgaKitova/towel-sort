
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if(!matrix) {
    return [];
  }
  matrix = matrix.map((item, index, array) => index % 2 == 0 ? item : item.reverse());
  return matrix.flat(Infinity);
}
