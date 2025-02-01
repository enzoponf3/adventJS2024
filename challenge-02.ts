// Challenge 02

function createFrame(names: string[]): string {
    // Code here
    if(!names) return ''
    let maxLength = 0
    let formattedNames : string [] = []
    names.forEach(name => {
      if(name.length > maxLength){
        maxLength = name.length
      }
      formattedNames.push('* ' + name + ' *');
    })
    let printableNames = '*'.repeat(maxLength+4) + '\n'
    names.map(n => {
      let missingChars = maxLength - n.length
      let frmtName = '* ' + n + ' '.repeat(missingChars) + ' *\n'
      printableNames = printableNames.concat('', frmtName)
    })
    printableNames = printableNames + '*'.repeat(maxLength+4)
    
    return printableNames
  }
  
  
  createFrame(['midu', 'madeval', 'educalvolpz'])