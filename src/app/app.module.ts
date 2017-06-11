import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CribListingComponent } from './crib-listing/crib-listing.component';
// '@' == decorator, decorators take an object
// NgModule tells angular how our app will fit together
@NgModule({
  // tells our app what components we made
  declarations: [
    AppComponent,
    CribListingComponent
  ],
  // tells our app what imports we have from angular
  imports: [
    BrowserModule
  ],
  // tells app which services we are using
  providers: [],
  // tells app which is the top level component to hook into 
  bootstrap: [AppComponent]
})
export class AppModule { }
