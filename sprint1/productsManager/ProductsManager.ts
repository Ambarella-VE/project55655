// ProductsManager.ts

import { ListManager } from "../listManager/ListManager";

interface ProductData {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  code: string;
  stock: number;
  id?: number;
}

class ProductsManager extends ListManager<ProductData> {
  constructor() {
    super();
  }

  addItem(item: ProductData): void {
    if (this.items.find(product => product.code === item.code)) {
      throw new Error('Product with the same code already exists.');
    } else {
      super.addItem(item);
    }
  }
}

export { ProductData, ProductsManager };
