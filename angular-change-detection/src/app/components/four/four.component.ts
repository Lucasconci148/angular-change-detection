import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'four-card',
  templateUrl: './four.component.html',
  styleUrls: ['./four.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class FourComponent {
  title: string = 'componente 4';

  constructor() { }

  componentChange() {
    console.log('Cambio el componente 4');
  }
}
