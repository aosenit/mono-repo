import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NxWelcomeComponent } from './nx-welcome.component';
import { AuthComponent } from '@fincare/auth';

@Component({
  standalone: true,
  imports: [NxWelcomeComponent, RouterModule, AuthComponent],
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title = 'fincare-app';
}
