import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-button',
  standalone: true,
  imports: [CommonModule],
  template: `
    <button  #Answer1 (click)="log()">Text 1</button>
    <!-- <button #Answer1 (click)="log(Math.max(1, 2))">Text 2</button>
    <button #Answer1 (click)="log('1', '2')">Text 3</button> -->
    <button #Answer4 (click)="log(Answer4)">Text 4</button>
  `,
  styleUrl: './button.component.css',
})
export class ButtonComponent {


  log(answer?: HTMLElement): void {
    console.log(answer)
  }
}
