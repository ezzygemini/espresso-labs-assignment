import { writeFileSync, existsSync, readFileSync, unlink } from "fs";

class LocalStorage {
  private items: { [k: string]: any };

  constructor() {
    if (existsSync("localStorage.json")) {
      const txt = String(readFileSync("localStorage.json"));
      this.items = JSON.parse(txt);
    } else {
      this.items = {};
    }
  }

  get length() {
    return Object.keys(this.items).length;
  }

  getItems<T = any>(): T[] {
    return Object.values(this.items) satisfies T[];
  }

  getItem<T = any>(key: string) {
    return this.items[key] satisfies T;
  }

  async setItem<T = any>(key: string, value: T) {
    this.items[key] = value;
    this.writeItemsToLocalstorage();
  }

  async removeItem(key: string) {
    delete this.items[key];
    this.writeItemsToLocalstorage();
  }

  clear() {
    this.items = {};
    unlink("localStorage.json", () => {
      console.log("localStorage file is removed");
    });
  }

  writeItemsToLocalstorage() {
    try {
      writeFileSync("localStorage.json", JSON.stringify(this.items));
    } catch (e) {
      console.error("Error occurred during writing file");
    }
  }
}

export const localStorage = new LocalStorage();
