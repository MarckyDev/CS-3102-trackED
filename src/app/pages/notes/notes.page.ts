import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

import { addIcons } from "ionicons";

import { 
  createOutline,
  trashOutline,
  checkmarkOutline,
} from "ionicons/icons";


import {
  IonToolbar,
  IonTextarea,
  IonAccordion,
  IonItem,
  IonInput,
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
  IonSearchbar,
  IonButton,
} from '@ionic/angular/standalone';
import { DatabaseService } from 'src/app/services/database.service';



@Component({
  selector: 'app-notes',
  templateUrl: './notes.page.html',
  styleUrls: ['./notes.page.scss'],
  standalone: true,
  imports: [
    IonicModule,
    IonTextarea,
    CommonModule,
    FormsModule,
    IonToolbar,
    IonAccordion,
    IonItem,
    IonInput,
    IonSearchbar,
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
    FormsModule,
  ],
})
export class NotesPage implements OnInit {
  notes: any[] = [];

  constructor(private database: DatabaseService){
    addIcons({ 
      createOutline,
      trashOutline,
      checkmarkOutline,
     })

     this.parseData();
  }

  ngOnInit() {
    // Add an initial note
    this.addNote();
  }

  addNote() {
    const newNoteNumber = this.notes.length + 1;
    const newNote = {
      title: `Notes ${newNoteNumber}`,
      content: '',
    };
    this.notes.push(newNote);
  }

  editNote(note: any) {
    // Implement edit functionality
    console.log('Edit Note:', note);
  }

  deleteNote(note: any) {
    // Implement delete functionality
    const index = this.notes.indexOf(note);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
  }

  saveNote(note: any) {
    // Implement save functionality
    console.log('Save Note:', note);
  }

  async parseData(){
    let notes = this.database.getNotes();
    console.log(notes);
  }
}