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

  leadershipStatDisplay(): string {
    if (this.champion?.characterBonus == null) return '';

    if (this.champion.characterBonus.leadership > 0)
      return `${this.champion.profileWithBonuses().leadership}+${this.champion.characterBonus.leadership}`;

    return String(this.champion.profileWithBonuses().leadership);
  }

  intelligenceStatDisplay(): string {
    if (this.champion?.characterBonus == null) return '';

    if (this.champion.characterBonus.intelligence > 0)
      return `${this.champion.profileWithBonuses().intelligence}+${this.champion.characterBonus.intelligence}`;

    return String(this.champion.profileWithBonuses().intelligence);
  }

  coolStatDisplay(): string {
    if (this.champion?.characterBonus == null) return '';

    if (this.champion.characterBonus.cool > 0)
      return `${this.champion.profileWithBonuses().cool}+${this.champion.characterBonus.cool}`;

    return String(this.champion.profileWithBonuses().cool);
  }

  willpowerStatDisplay(): string {
    if (this.champion?.characterBonus == null) return '';

    if (this.champion.characterBonus.willPower > 0)
      return `${this.champion.profileWithBonuses().willPower}+${this.champion.characterBonus.willPower}`;

    return String(this.champion.profileWithBonuses().willPower);
  }
}
