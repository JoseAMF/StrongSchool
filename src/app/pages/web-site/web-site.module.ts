import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { WebSiteRoutingModule } from './web-site-routing.module';
import { AboutUsComponent } from './about-us/about-us.component';
import { CarouselComponent } from './carousel/carousel.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { TestimonialComponent } from './testimonial/testimonial.component';
import { HomePageComponent } from './home-page/home-page.component';
import { ContactComponent } from './contact/contact.component';


@NgModule({
  declarations: [AboutUsComponent, CarouselComponent, NavBarComponent, TestimonialComponent, HomePageComponent, ContactComponent],
  imports: [
    CommonModule,
    WebSiteRoutingModule
  ]
})
export class WebSiteModule { }
