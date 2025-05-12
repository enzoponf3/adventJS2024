type Shoe = {
  type: 'I' | 'R'
  size: number
}

function organizeShoes(shoes: Shoe[]) : number[]{
  if(!shoes) return []
  const left = shoes.filter(shoe => shoe.type === 'I')
  const right = shoes.filter(shoe => shoe.type ==='R')
  const res: number[] = []
  
  left.forEach(shoe => {
    const matchFound = right.findIndex(rightShoe => rightShoe.size === shoe.size)
    if(matchFound >= 0){
      res.push(shoe.size)
      right.splice(matchFound,1)
    }
  })
  return res
}

const shoes: Shoe[] = [
  { type: 'I', size: 38 },
  { type: 'R', size: 38 },
  { type: 'R', size: 42 },
  { type: 'I', size: 41 },
  { type: 'I', size: 42 }
]

organizeShoes(shoes)
// [38, 42]




//AI Resolution

function organizeShoes(shoes: Shoe[]): number[] {
  if (!shoes) return []

  const leftMap = new Map<number, number>()
  const rightMap = new Map<number, number>()

  // Count occurrences of each size for left and right shoes
  shoes.forEach(shoe => {
    const map = shoe.type === 'I' ? leftMap : rightMap
    map.set(shoe.size, (map.get(shoe.size) || 0) + 1)
  })

  const res: number[] = []

  // Find matches between left and right shoes
  leftMap.forEach((leftCount, size) => {
    const rightCount = rightMap.get(size) || 0
    const matches = Math.min(leftCount, rightCount)
    for (let i = 0; i < matches; i++) {
      res.push(size)
    }
  })

  return res
}


//Sonnet resolution
function organizeShoes(shoes: Shoe[]): number[] {
  if (!shoes?.length) return []
  
  const sizeMap = new Map<number, { left: number; right: number }>()
  
  // Count shoes by size
  for (const shoe of shoes) {
    const counts = sizeMap.get(shoe.size) ?? { left: 0, right: 0 }
    if (shoe.type === 'I') counts.left++
    else counts.right++
    sizeMap.set(shoe.size, counts)
  }
  
  // Find pairs and sort them
  return Array.from(sizeMap.entries())
    .filter(([_, counts]) => counts.left > 0 && counts.right > 0)
    .map(([size]) => size)
    .sort((a, b) => a - b)
}