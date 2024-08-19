module.exports = function towelSort (matrix) {
    let array_odd = [];
    let array_even = [];
    for (let i = 0; i < matrix.length; i++) {
        if ((i == 0) || (i % 2 == 0)){
            for (let j = 0; j < matrix[0].length; j++) {
                array_even.push(matrix[i][j]);
            }
        }
        else {
            for (let j = 0; j < matrix[0].length; j++) {
                array_odd.push(matrix[i][j]);
            }
            array_odd.reverse();
        }
        
    }
    return array_odd;
}
