module.exports = function towelSort (matrix) {
    return matrix ? matrix.map((array, index) => {
        return index % 2 === 1 ? array.reverse() : array;
    }).flat() : [];
}
