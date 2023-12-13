// ListManager.ts
import * as fs from "fs";

interface Identifiable {
  id?: number;
}

class ListManager<T extends Identifiable> {
  location: string;
  itemName: string;
  fullPath: string;
  
  private createFile(){
    fs.promises
    .writeFile(this.fullPath, JSON.stringify([]))
    .catch((error: Error) => {
      throw new Error(`Could not create the file ${this.itemName}.json in ${this.location}`);
    });
  }

  constructor(path: string,itemName: string){
    this.location = path;
    this.itemName = itemName;
    this.fullPath = `${this.location}/${this.itemName}.json`
    this.createFile();
  }
  
  read(): T[] | void {
    fs.readFile(this.fullPath,'utf8')
      .then((data: string) => {
        const jsonObject = JSON.parse(data);
        return jsonObject;
      })
      .catch((error: Error) => {
        throw new Error(`Could not read the file ${this.itemName}.json in ${this.location}`);
      });
  }

  readOne(id: number) {
    fs.readFile(this.fullPath, 'utf8')
      .then((data: string) => {
        const jsonObject = JSON.parse(data);
        return jsonObject;
      })
      .then((jsonObject: T[]) => {
        const item = jsonObject.find((item: T) => item.id === id);
        if (item === undefined) {
          throw new Error(`Item with id ${id} not found`);
        }
        return item;
      })
      .catch((error: Error) => {
        if (error instanceof SyntaxError) {
          throw new Error(`Error parsing JSON: ${error.message}`);
        } else {
          throw new Error(`Could not read the file ${this.itemName}.json in ${this.location}: ${error.message}`);
        }
      });
  }
    
}
