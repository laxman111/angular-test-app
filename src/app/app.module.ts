import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { ProductListingComponent } from './product-listing/product-listing.component';
import { ItemPanelComponent } from './item-panel/item-panel.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListingComponent,
    ItemPanelComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
