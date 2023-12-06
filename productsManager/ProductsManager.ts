interface ProductData {
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  code: string;
  stock: number;
}

class ProductsManager{
  title: string;
  description: string;
  price: number;
  thumbnail: string;
  code: string;
  stock: number;
  id:number;

  static products: ProductsManager[] = [];
  
  constructor(){}

  private static generateId(): number {
    return ProductsManager.products.length === 0 
    ? 1 
    : ProductsManager.products[ProductsManager.products.length - 1].id + 1;

  }

  addProduct(data: ProductData){
    this.title = data.title;
    this.description = data.description;
    this.price = data.price;
    this.thumbnail = data.thumbnail;
    this.code = data.code;
    this.stock = data.stock;
    this.id = ProductsManager.generateId();
    
    ProductsManager.products.push(this);
  }

  getProducts(){
    return ProductsManager.products
  }
  
  getProductById(id: number){
    return ProductsManager.products.find(product => product.id === id)
  }
}

export {ProductData, ProductsManager};