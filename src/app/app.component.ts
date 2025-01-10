import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import {HeaderComponent} from './header/header.component';
import {NotesListComponent} from './notes-list/notes-list.component'

@Component({
  selector: 'app-root',
  imports: [FormsModule, RouterOutlet, HeaderComponent, NotesListComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'NoteApp';
}
