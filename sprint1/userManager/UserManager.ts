// UserManager.ts

import { ListManager } from "../listManager/ListManager";

interface UserData {
  name: string;
  photo: string;
  email: string;
  id?: number;
}

class UserManager extends ListManager<UserData> {
  constructor() {
    super();
  }

  addItem(item: UserData): void {
    if (this.items.find((user) => user.email === item.email)) {
      throw new Error("User with the same email already exists.");
    } else {
      super.addItem(item);
    }
  }
}

export { UserData, UserManager };
