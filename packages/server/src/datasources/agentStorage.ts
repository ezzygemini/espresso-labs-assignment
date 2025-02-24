import { v4 } from "uuid";
import { localStorage } from "./localStorage";

interface GenericObject {
  [k: string]: any;
}

export const agentStorage = {
  async create<T = GenericObject>(input: Partial<T>): Promise<T> {
    const id = v4();
    const newItem = { id, ...input };
    await localStorage.setItem(id, newItem);
    return newItem as T;
  },
  async read<T = GenericObject>(id?: string): Promise<T | T[]> {
    if (id) {
      return await localStorage.getItem<T>(id);
    }
    return localStorage.getItems<T>();
  },
  async update<T = GenericObject>(id: string, input: Partial<T>): Promise<T> {
    const old = this.read(id);
    const newItem = { ...old, ...input };
    await localStorage.setItem(id, newItem);
    return newItem as T;
  },
  async delete(id: string): Promise<boolean> {
    await localStorage.removeItem(id);
    return true;
  },
};
