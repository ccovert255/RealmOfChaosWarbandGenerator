import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { RouterOutlet } from '@angular/router';
import { GeneratorComponent } from './generator/generator.component'
import { WarbandsListComponent } from './warbands-list/warbands-list.component'
import { AlertService } from './alert.service';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, GeneratorComponent, WarbandsListComponent, MatIconModule],
  providers: [AlertService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Realm Of Chaos Warband Generator';
}
