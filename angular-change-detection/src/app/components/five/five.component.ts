import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'five-card',
  templateUrl: './five.component.html',
  styleUrls: ['./five.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FiveComponent {
  title: string = 'Componente 5';

  constructor() { }

  componentChange() {
    console.log('Cambio el componente 5');
  }
}
