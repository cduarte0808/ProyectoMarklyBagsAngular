import { Routes } from '@angular/router';
import { HomeComponent } from './modules/home/components/home/home.component';
import { BagsComponent } from './modules/home/components/bags/bags.component';
import { AccesoriesComponent } from './modules/home/components/accesories/accesories.component';
import { BlogComponent } from './modules/home/components/blog/blog.component';
import { ContactComponent } from './modules/home/components/contact/contact.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'home', component: HomeComponent },
    { path: 'bags', component: BagsComponent },
    { path: 'accesories', component: AccesoriesComponent },
    { path: 'blog', component: BlogComponent },
    { path: 'contact', component: ContactComponent },
];
