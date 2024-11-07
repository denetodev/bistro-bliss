import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { MenubarModule } from 'primeng/menubar';

// Componentes do Core
import { HeaderComponent } from './core/header/header.component';
import { FooterComponent } from './core/footer/footer.component';

// Componentes das Features
import { AppComponent } from './app.component';
import { HomeComponent } from './features/home/home.component';
import { AboutComponent } from './features/about/about.component';
import { MenuComponent } from './features/menu/menu.component';
import { BlogComponent } from './features/blog/blog.component';
import { ContactComponent } from './features/contact/contact.component';
import { ReservationComponent } from './features/reservation/reservation.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { HeroComponent } from './features/home/hero/hero.component';
import { ButtonComponent } from './shared/components/home-components/button/button.component';
import { MenuSectionComponent } from './features/home/menu-section/menu-section.component';
import { ServicesSectionComponent } from './features/home/services-section/services-section.component';
import { TestimonialsComponent } from './features/home/testimonials/testimonials.component';
import { DeliverySectionComponent } from './features/home/delivery-section/delivery-section.component';
import { BlogSectionComponent } from './features/home/blog-section/blog-section.component';
import { MenuCardComponent } from './shared/components/home-components/menu-card/menu-card.component';
import { AboutSectionComponent } from './features/home/about-section/about-section.component';
import { ImageAndCardComponent } from './shared/components/home-components/image-and-card/image-and-card.component';
import { TestimonialCardComponent } from './shared/components/home-components/testimonial-card/testimonial-card.component';
import { BlogCardComponent } from './shared/components/home-components/blog-card/blog-card.component';
import { AboutSectionPrincipalComponent } from './features/about/about-section-principal/about-section-principal.component';
import { AboutRestaurantAmbienceComponent } from './features/about/about-restaurant-ambience/about-restaurant-ambience.component';
import { DialogModule } from 'primeng/dialog';
import { ClientInfoComponent } from './features/about/client-info/client-info.component';
import { DeliveryAppsComponent } from './features/menu/delivery-apps/delivery-apps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    BlogComponent,
    ContactComponent,
    ReservationComponent,
    HeroComponent,
    ButtonComponent,
    MenuSectionComponent,
    ServicesSectionComponent,
    TestimonialsComponent,
    DeliverySectionComponent,
    BlogSectionComponent,
    MenuCardComponent,
    AboutSectionComponent,
    ImageAndCardComponent,
    TestimonialCardComponent,
    BlogCardComponent,
    AboutSectionPrincipalComponent,
    AboutRestaurantAmbienceComponent,
    ClientInfoComponent,
    DeliveryAppsComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MenubarModule,
    RouterModule,
    CommonModule,
    ButtonModule,
    CardModule,
    DialogModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
