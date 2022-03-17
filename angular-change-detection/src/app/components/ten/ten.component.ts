import { ChangeDetectionStrategy, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'ten-card',
  template: `{{ componentChange() }}`,
  changeDetection: ChangeDetectionStrategy.Default
})
export class TenComponent {
  title: string = 'componente 10';

  constructor(private el: ElementRef) { }

  componentChange() {
    console.log('Cambio el componente 10');
   }
}
