import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root'
})



export class JsonhandlerService {
  

  constructor(private storage:Storage) { }

  load(){
    const reader = new FileReader();
    /*
    
     reader.onload = (e) => {
      const jsonData = JSON.parse(e.target?.result);
      
    }
    
    */
   
  }

}
