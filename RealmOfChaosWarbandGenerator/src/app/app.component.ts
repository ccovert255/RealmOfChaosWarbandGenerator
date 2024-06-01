import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneratorComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Realm Of Chaos Warband Generator';
}
