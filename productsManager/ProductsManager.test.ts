// ProductsManager.test.ts
import { describe, expect, test, afterEach, beforeEach } from '@jest/globals';
import { ProductData, ProductsManager } from './ProductsManager';

describe('ProductsManager', () => {
  let productManager: ProductsManager;

  beforeEach(() => {
    productManager = new ProductsManager();
  });

  afterEach(() => {
    ProductsManager.products = [];
  });

  test('should start with an empty products array', () => {
    expect(productManager.getProducts()).toEqual([]);
  });

  describe('addProduct', () => {
    test('should add a product successfully', () => {
      const data: ProductData = {
        title: 'producto prueba',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'abc123',
        stock: 25,
      };

      productManager.addProduct(data);

      const products = productManager.getProducts();

      expect(products).toHaveLength(1);
      expect(products[0]).toEqual(expect.objectContaining(data));
    });

    test('should throw an error when adding a product with a duplicate code', () => {
      const data: ProductData = {
        title: 'producto prueba',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'abc123',
        stock: 25,
      };

      // Add the product initially
      productManager.addProduct(data);

      // Attempt to add a product with the same code
      expect(() => productManager.addProduct(data)).toThrowError('Product with the same code already exists.');
    });
  });

  describe('getProductById', () => {
    test('should return the product by ID', () => {
      const data: ProductData = {
        title: 'producto prueba',
        description: 'Este es un producto prueba',
        price: 200,
        thumbnail: 'Sin imagen',
        code: 'abc123',
        stock: 25,
      };

      productManager.addProduct(data);

      const existingProductId = productManager.getProducts()[0].id;
      const existingProduct = productManager.getProductById(existingProductId);
      expect(existingProduct).toEqual(expect.objectContaining(data));
    });

    test('should throw an error for a non-existing product ID', () => {
      const nonExistingProductId = 999;
      expect(() => productManager.getProductById(nonExistingProductId)).toThrowError('Product not found.');
    });
  });
});
