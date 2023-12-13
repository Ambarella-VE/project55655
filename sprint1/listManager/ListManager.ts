// ListManager.ts
interface Identifiable {
  id?: number;
}
class ListManager<T extends Identifiable> {
  items: T[] = [];

  generateId(): number {
    return this.items.length === 0 
    ? 1 
    : this.items[this.items.length - 1].id! + 1;
  }

  addItem(item: T): void {
    const newItem = {
      ...item,
      id: this.generateId()
    }
    this.items.push(newItem);
  }

  getItems(): T[] {
    return this.items;
  }

  getItem(id: number): T {
    const itemFound = this.items.find(item => item.id === id);
    
    if (!itemFound) {
      throw new Error (`Item with ID ${id} not found.`)
    }
    return itemFound

  }
}

export { ListManager }
