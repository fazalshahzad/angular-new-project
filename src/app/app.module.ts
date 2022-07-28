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
import { CartComponent } from './MainPortal/cart/cart.component';
import { HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    AboutComponent,
    BlogComponent,
    ShopComponent,
    ContactComponent,
    HomeComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
