import { Component, Input } from '@angular/core';
import { NgIf, NgClass } from '@angular/common';
import { Warband, Profile, Weapon, Armor, ChaosAttribute, Champion } from '../shared/models';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [NgIf, NgClass],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.scss'
})
export class ProfileComponent {
  @Input() champion?: Champion;
}
