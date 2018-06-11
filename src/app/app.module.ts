import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { MycarouselComponent } from './mycarousel/mycarousel.component';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    MycarouselComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
