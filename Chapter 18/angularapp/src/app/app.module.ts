import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { DataModelModule } from './data/data.module';
import { ProductItem } from './productItem.component';
import { CategoryList } from './categoryList.component';
import { Header } from './header.component';
import { ProductList } from './productList.component';

@NgModule({
  declarations: [ AppComponent, ProductItem, CategoryList, Header, ProductList ],
  imports: [ BrowserModule, AppRoutingModule, FormsModule, DataModelModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
