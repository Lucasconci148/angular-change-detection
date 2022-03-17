import { ChangeDetectionStrategy, ChangeDetectorRef, Component, ElementRef } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default
})
export class CardComponent {

  title: string = 'componente 1';
  private interval = 0;

  constructor(private cd: ChangeDetectorRef) {
    
    // this.cd.detach();

    // setInterval(() => {
    //   this.interval++;
    //   console.log(`Intervalo ${this.interval}`);

    //   if(this.interval > 500) {
    //     this.cd.reattach();
    //   }

    // }, 100);
  }

  componentChange() {
    console.log('Cambio el componente 1');
  }
}
