import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import {
  IonToolbar,
  IonAccordion,
  IonItem,
  IonLabel,
  IonAccordionGroup,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonCardSubtitle,
  IonDatetime,
  IonFab,
  IonFabButton,
  IonIcon,
  IonButton,
} from '@ionic/angular/standalone';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    IonToolbar,
    IonAccordion,
    IonItem,
    IonLabel,
    IonAccordionGroup,
    IonCard,
    IonCardContent,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonDatetime,
    IonFab,
    IonFabButton,
    IonIcon,
    IonButton,
  ],
})
export class NotesPage {
  notes: any[] = [];

  addNote() {
    // Implement the logic to add a new note
    this.notes.push({});
    // You might also perform additional logic or update other properties as needed.
  }

  handleAddIconClick() {
    // Implement the logic for the click event of the add icon
    // You can add specific functionality here
  }
}
