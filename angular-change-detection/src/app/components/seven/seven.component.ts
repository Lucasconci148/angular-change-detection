import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'seven-card',
  templateUrl: './seven.component.html',
  styleUrls: ['./seven.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SevenComponent {
  title: string = 'componente 7';

  constructor(private cd: ChangeDetectorRef) { 
    // setTimeout(() => {
    //   console.log('Evento de Cambio en el componente 7')
    //   this.title = 'CAMBIO';

    //   this.cd.detectChanges();
    // }, 3000);
  }

  componentChange() {
    console.log('Cambio el componente 7');
  }
}
