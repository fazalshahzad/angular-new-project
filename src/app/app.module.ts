import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MainPortal/header/header.component';
import { FooterComponent } from './MainPortal/footer/footer.component';
import { AboutComponent } from './MainPortal/about/about.component';
import { BlogComponent } from './MainPortal/blog/blog.component';
import { ShopComponent } from './MainPortal/shop/shop.component';
import { ContactComponent } from './MainPortal/contact/contact.component';
import { HomeComponent } from './MainPortal/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BlogComponent,
    ShopComponent,
    ContactComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
