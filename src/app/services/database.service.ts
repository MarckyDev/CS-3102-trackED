import { Injectable } from '@angular/core';
import { IonInput } from '@ionic/angular/standalone';

import { Storage } from '@ionic/storage-angular';

import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

// MORE LIKE A UTILS FILE! //
export class DatabaseService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage, private http:HttpClient) {
    this._storage = storage;
    this._storage.create();
  }

   getUserData() {
    const jsonFileURL = 'assets/database/data.json';

    this.http.get(jsonFileURL).subscribe((response) =>{
      console.log(response);
    })
  }

  async getMotivationData() {
    const jsonFileURL = 'assets/database/motivations.json';

    this.http.get(jsonFileURL)
    .pipe(
      map(jsonData => JSON.parse(jsonData = jsonFileURL)),
      catchError((e) => {
        console.error('Error loading data', e);
        throw e;
      })
      ). subscribe(parsedData => {
        this.set('my data', parsedData)
      })
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
