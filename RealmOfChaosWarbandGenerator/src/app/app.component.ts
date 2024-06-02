import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component'
import { WarbandsComponent } from './warbands/warbands.component'
import { Warband } from './shared/models';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneratorComponent, WarbandsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Realm Of Chaos Warband Generator';
}
