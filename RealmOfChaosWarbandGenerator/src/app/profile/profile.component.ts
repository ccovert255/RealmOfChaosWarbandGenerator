import { Component, Input } from '@angular/core';
import { Warband, Profile, Weapon, Armor, ChaosAttribute } from '../shared/models';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @Input() profile?: Profile;
}
