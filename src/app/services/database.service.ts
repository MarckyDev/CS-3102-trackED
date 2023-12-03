import { Injectable } from '@angular/core';
import { IonInput } from '@ionic/angular/standalone';

import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})

export class DatabaseService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this._storage = storage;
    this.init();
  }

  async init(){
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public async set(key: string, value: any){
    let result = await this._storage?.set(key, value);
    console.log(result);
  }

  public async get(key: string){
    let value = await this._storage?.get(key);
    console.log(value);
    return value;
  }

  public async viewStorage(){
    let value = await this._storage?.keys()
    console.log(value);
    return value;
  }

  public async clearStorage(){
    await this._storage?.clear()
  }

  public async removeKey(key: any){
    await this._storage?.remove(key)
  }

  public async getInputValue(input: IonInput): Promise<string> {
    const inputElement = await input.getInputElement();
    return inputElement.value || '';
  }


}
