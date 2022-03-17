import { ChangeDetectionStrategy, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'six-card',
  templateUrl: './six.component.html',
  styleUrls: ['./six.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class SixComponent {

  title: string = 'componente 6';

  constructor() { }

  componentChange() {
    console.log('Cambio el componente 6');
   }
}
