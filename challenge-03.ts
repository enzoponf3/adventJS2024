// Challenge 03
type Inventory = Array<
  { name: string, quantity: number, category: string }
>
type Toy = { 
  [key: string]: number;
}
type Category  = {
  [key: string] : Toy
}

function organizeInventory(inventory: Inventory): object {
  // Code here
  if(!inventory) { return {}}
  
  let mappedInv : Category = {}
  
  inventory.map(obj => {
    if(!Object.keys(mappedInv).includes(obj.category)){
      const newCatergory = {
        [obj.category]: {
            [obj.name]: Number([obj.quantity])
           }
        }
      Object.assign(mappedInv, newCatergory)
      return
    }
    if(!Object.keys(mappedInv[obj.category]).includes(obj.name)){
      Object.assign(mappedInv[obj.category], {[obj.name] : Number([obj.quantity])})
      return
    }
    mappedInv[obj.category][obj.name] = Number(mappedInv[obj.category][obj.name]) + Number(obj.quantity)
  })
  
  return mappedInv
}



//Sulution By Kimulegen

interface InventoryItem {
    name: string;
    quantity: number;
    category: string;
}

interface GroupedInventory {
    [key: string]: {
        [key: string]: number;
    };
}

function organizeInventory(inventory: InventoryItem[]) {
    const groupedInv = {} as GroupedInventory;
    inventory.forEach(({ name, quantity, category }) => {
        groupedInv[category] ??= {};
        groupedInv[category][name] ??= 0;
        groupedInv[category][name] += quantity;
    });

    return groupedInv;
}