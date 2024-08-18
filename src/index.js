module.exports = function towelSort (matrix) {
    let str = '';
    for (let i = 0; i < matrix[0].length; i++) {
        for (let j = 0; j < matrix[0].length; j++) {
            str += matrix[i][j];
        }
    }
    return str.toArray();
}
