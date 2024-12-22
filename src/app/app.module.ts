import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  HttpClientModule } from '@angular/common/http';
import {MatTableModule} from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MatIconModule } from '@angular/material/icon';
// Import Angular Material Modules
import { MatToolbarModule } from '@angular/material/toolbar';
 
import { DataMangementComponent } from './pages/data-mangement/data-mangement.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
 @NgModule({
  declarations: [
    AppComponent,
    DataMangementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,MatSortModule,MatIconModule,MatToolbarModule,
    HttpClientModule,MatPaginatorModule,MatFormFieldModule,MatInputModule,
    BrowserAnimationsModule,MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
