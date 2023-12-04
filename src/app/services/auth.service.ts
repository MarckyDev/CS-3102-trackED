import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private storage: Storage) { }

  async authUser(user:any){
    let UserArray = [];
    if(await this.storage.get('Users')){
      UserArray.push(JSON.parse(await this.storage.get('Users')));
    }
    return UserArray.find(p => p.email === user.email && p.password === user.password);
  }
}
