import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AppComponent } from '../../app.component';
import { HomeComponent } from './components/home/home.component';
import { BagsComponent } from './components/bags/bags.component';
import { AccesoriesComponent } from './components/accesories/accesories.component';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from '../../app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    BrowserModule, 
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ]
})
export class HomeModule { }
