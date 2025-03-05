import { Component } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgIf, NgClass, FormsModule] // Enable FormsModule here
})
export class AppComponent {
  title = 'Helloworld';

  // Property to hold user input
  userName: string = '';

  // Method to validate user input
  isValidUserName(): boolean {
    const namePattern = /^[A-Z][a-zA-Z]{2,}$/;
    return namePattern.test(this.userName);
  }
}



