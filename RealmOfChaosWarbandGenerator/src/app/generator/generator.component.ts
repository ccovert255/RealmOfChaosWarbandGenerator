import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatDivider, MatDividerModule } from '@angular/material/divider';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-generator',
  standalone: true,
  imports: [MatIconModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatDivider, FormsModule, MatDividerModule, CommonModule],
  templateUrl: './generator.component.html',
  styleUrl: './generator.component.scss'
})
export class GeneratorComponent {

}
