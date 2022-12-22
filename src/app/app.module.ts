import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from "@angular/common/http"

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ProductListComponent } from './product-list/product-list.component';
import { StarComponent } from './shared/star/star.component';
import { ProductDetailsComponent } from './product-list/product-details.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { ConvertToSpacesPipe } from './shared/convert-to-spaces.pipe';
import { FooterComponent } from './footer/footer.component';
import { RegistrationComponent } from './registration/registration.component';




@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ProductListComponent,
    StarComponent,
    ProductDetailsComponent,
    WelcomeComponent,
    RegistrationComponent,
    ConvertToSpacesPipe,
    FooterComponent,
    
  
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
