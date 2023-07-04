import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HousingListComponent } from './housing-list/housing-list.component';
import { DishesRouteComponent } from './dishes-route/dishes-route.component';

@NgModule({
  declarations: [
    AppComponent,
    HousingListComponent,
    DishesRouteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
