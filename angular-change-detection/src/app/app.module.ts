import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CardComponent } from './components/card-component/card.component';
import { FiveComponent } from './components/five/five.component';
import { FourComponent } from './components/four/four.component';
import { SecondComponent } from './components/second/second.component';
import { SevenComponent } from './components/seven/seven.component';
import { SixComponent } from './components/six/six.component';
import { TenComponent } from './components/ten/ten.component';
import { ThirdComponent } from './components/third/third.component';

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,

    SecondComponent,
    ThirdComponent,
    FourComponent,
    FiveComponent,
    SixComponent,
    SevenComponent,
    TenComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
