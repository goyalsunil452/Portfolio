import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ServiceComponent } from './service/service.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { FooterComponent } from './footer/footer.component';
import { PricingComponent } from './pricing/pricing.component';
import { ContactComponent } from './contact/contact.component';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { EducationComponent } from './education/education.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    PortfolioComponent,
    FooterComponent,
    PricingComponent,
    ContactComponent,
    EducationComponent
  ],
  imports: [
    ReactiveFormsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule
  ],
  exports:[    
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AboutComponent,
    ServiceComponent,
    PortfolioComponent,
    FooterComponent,
    PricingComponent,
    ContactComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
