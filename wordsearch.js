const transpose = function(matrix) {
  let newMatrix = [];
  for (let i = 0; i < matrix[0].length; i++) {
    newMatrix.push(matrix.map(row => row[i]));
  }
  return newMatrix;
};

const wordSearch = (letters, word) => { 
  if(letters.length===0){
    return 'empty array'
  }
  const horizontalJoin = letters.map(ls => ls.join(''))
  const verticleJoin=transpose(letters).map(col=>col.join(''))
  for (l of horizontalJoin) {
    // console.log(l)
      if (l.includes(word)) return true
      
  }
  for (row of verticleJoin){
    if (row.includes(word)) return true
  }

  return false
}

module.exports = wordSearch