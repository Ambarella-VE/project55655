// ProductsManager.test.ts
import { describe, expect, test, afterEach, beforeEach } from '@jest/globals';
import { ProductData, ProductsManager } from './ProductsManager';

describe('ProductsManager', () => {
  let productManager: ProductsManager;

  beforeEach(() => {
    productManager = new ProductsManager();
  });

  afterEach(() => {
    productManager.items = [];
  });

  test('should start with an empty products array', () => {
    expect(productManager.getItems()).toEqual([]);
  });

  test('should add a product successfully', () => {
    const data: ProductData = {
      title: 'Test Product',
      description: 'This is a test product',
      price: 100,
      thumbnail: 'No image',
      code: 'abc123',
      stock: 10,
    };

    productManager.addItem(data);

    const products = productManager.getItems();

    expect(products).toHaveLength(1);
    expect(products[0]).toEqual(expect.objectContaining(data));
  });

  test('should throw an error when adding a product with a duplicate code', () => {
    const data: ProductData = {
      title: 'Test Product',
      description: 'This is a test product',
      price: 100,
      thumbnail: 'No image',
      code: 'abc123',
      stock: 10,
    };

    productManager.addItem(data);

    expect(() => productManager.addItem(data)).toThrowError('Product with the same code already exists.');
  });

  test('should throw an error when getting a non-existing product', () => {
    const nonExistingProductId = 999;

    expect(() => productManager.getItem(nonExistingProductId)).toThrowError(`Item with ID ${nonExistingProductId} not found.`);
  });
});
