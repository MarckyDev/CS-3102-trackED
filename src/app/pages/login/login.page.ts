import { Component, ElementRef, ViewChild} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import {IonContent,
        IonCard,
        IonCardHeader,
        IonCardTitle,
        IonCardContent,
        IonItem,
        IonInput,
        IonButton,
        IonImg
       } from '@ionic/angular/standalone';


import { DatabaseService } from 'src/app/services/database.service';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
  standalone: true,
  imports: [
    CommonModule,
    FormsModule,
    IonContent,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardContent,
    IonItem,
    IonInput,
    IonButton,
    IonImg
  ]
})

export class LoginPage{
  @ViewChild('inputPassword') inputPassword!: IonInput;
  @ViewChild('inputUser') inputUser!: IonInput;

  constructor(private databaseService: DatabaseService, private auth:AuthService, private router:Router) { }

  async onLogin() {
    const username = await this.databaseService.getInputValue(this.inputUser);
    const passcode = await this.databaseService.getInputValue(this.inputPassword);

    const user = this.auth.authUser([{email:username, password:passcode}]);

    if(user){
      console.log('login Successful');
      this.navigate('/main-dashboard2');
    }else{
      console.log('login not successful')
    }
  }

  async clear() {
    this.databaseService.clearStorage();
  }

  navigate(url: string){
    this.router.navigateByUrl(url);
  }


}