import { ChangeDetectionStrategy, ChangeDetectorRef, Component } from '@angular/core';

@Component({
  selector: 'second-card',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SecondComponent {
  title: string = 'componente 2';

  constructor(private cd: ChangeDetectorRef) { 
    // setTimeout(() => {
    //   console.log('Cambio en el componente 2')
    //   this.title = 'cambio';
    // }, 4000);
  }

  componentChange() {
    console.log('cambio el componente 2');
  }
}
