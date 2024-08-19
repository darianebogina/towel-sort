module.exports = function towelSort (matrix) {
    let array = [];
    for (let i = 0; i < matrix.length; i++) {
        if ((i == 0) || (i % 2 == 0)){
            for (let j = 0; j < matrix[0].length; j++) {
                array.push(matrix[i][j]);
            }
        }
        else {
            
        }
        
    }
    return array;
}
