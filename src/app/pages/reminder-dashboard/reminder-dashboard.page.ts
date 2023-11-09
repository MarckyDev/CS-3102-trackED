import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-reminder-dashboard',
  templateUrl: './reminder-dashboard.page.html',
  styleUrls: ['./reminder-dashboard.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class ReminderDashboardPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
