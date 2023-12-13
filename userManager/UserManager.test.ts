// UserManager.test.ts
import { describe, expect, test, afterEach, beforeEach } from '@jest/globals';
import { UserData, UserManager } from './UserManager';

describe('UserManager', () => {
  let userManager: UserManager;

  beforeEach(() => {
    userManager = new UserManager();
  });

  afterEach(() => {
    userManager.items = [];
  });

  test('should start with an empty users array', () => {
    expect(userManager.getItems()).toEqual([]);
  });

  test('should add a user successfully', () => {
    const data: UserData = {
      name: 'Test User',
      photo: 'No image',
      email: 'test@example.com',
    };

    userManager.addItem(data);

    const users = userManager.getItems();

    expect(users).toHaveLength(1);
    expect(users[0]).toEqual(expect.objectContaining(data));
  });

  test('should throw an error when adding a user with a duplicate email', () => {
    const data: UserData = {
      name: 'Test User',
      photo: 'No image',
      email: 'test@example.com',
    };

    userManager.addItem(data);

    expect(() => userManager.addItem(data)).toThrowError('User with the same email already exists.');
  });

  test('should throw an error when getting a non-existing user', () => {
    const nonExistingUserId = 999;

    expect(() => userManager.getItem(nonExistingUserId)).toThrowError(`Item with ID ${nonExistingUserId} not found.`);
  });
});
