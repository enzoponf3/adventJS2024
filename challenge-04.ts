// Challente 04

function createXmasTree(height: number, ornament: string): string {
    /* Code here */
    if(height < 1) {return ''}
    let maxLenght = height * 2 - 1
    let result = ''
    for(let i = 1; i <= height; i++){
      let formattedString = '_'.repeat(maxLenght)
      result = result.concat(formattedString.substring(0, maxLenght/2 - i + 1) + `${ornament}`.repeat(i+(i-1)) + formattedString.substring(maxLenght/2 + i) + '\n')
    }
    result = result.concat('_'.repeat(maxLenght/2) + '#' + '_'.repeat(maxLenght/2) + '\n')
    result = result.concat('_'.repeat(maxLenght/2) + '#' + '_'.repeat(maxLenght/2))
    return result
  }
  
  const tree = createXmasTree(5, '*')
  console.log(tree)
  /*
  ____*____
  ___***___
  __*****__
  _*******_
  *********
  ____#____
  ____#____
  */