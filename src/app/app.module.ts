import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GreenComponent } from './green/green.component';
import { GreyComponent } from './grey/grey.component';
import { BlueComponent } from './blue/blue.component';
import { RedComponent } from './red/red.component';
import { OrangeComponent } from './orange/orange.component';
import { PinkComponent } from './pink/pink.component';

@NgModule({
  declarations: [
    AppComponent,
    GreenComponent,
    GreyComponent,
    BlueComponent,
    RedComponent,
    OrangeComponent,
    PinkComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
