import { Component } from '@angular/core';
import { NgIf, NgFor, NgClass, NgStyle } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [NgIf, NgFor, NgClass, NgStyle, FormsModule] // Enable FormsModule here
})
export class AppComponent {
  title = 'Helloworld';

  // Property to hold user input
  userName: string = '';
}


