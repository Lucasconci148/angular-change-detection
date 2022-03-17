import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'third-card',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class ThirdComponent {
  title: string = 'componente 3';

  constructor(private el: ElementRef, private cd: ChangeDetectorRef) { }

  componentChange() {
    console.log('Cambio el componente 3');
   }
}
