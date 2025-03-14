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
import { ContactComponent } from './features/contact/contact.component';
import { ReservationComponent } from './features/reservation/reservation.component';

import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { HeroComponent } from './features/home/hero/hero.component';
import { MenuSectionComponent } from './features/home/menu-section/menu-section.component';
import { ServicesSectionComponent } from './features/home/services-section/services-section.component';
import { TestimonialsComponent } from './features/home/testimonials/testimonials.component';
import { DeliverySectionComponent } from './features/home/delivery-section/delivery-section.component';
import { MenuCardComponent } from './shared/components/menu-components/menu-card/menu-card.component';
import { MenuCardHomeComponent } from './shared/components/home-components/menu-card-home/menu-card-home.component';
import { AboutSectionComponent } from './features/home/about-section/about-section.component';
import { ImageAndCardComponent } from './shared/components/home-components/image-and-card/image-and-card.component';
import { TestimonialCardComponent } from './shared/components/home-components/testimonial-card/testimonial-card.component';
import { AboutSectionPrincipalComponent } from './features/about/about-section-principal/about-section-principal.component';
import { AboutRestaurantAmbienceComponent } from './features/about/about-restaurant-ambience/about-restaurant-ambience.component';
import { DialogModule } from 'primeng/dialog';
import { ClientInfoComponent } from './features/about/client-info/client-info.component';
import { DeliveryAppsComponent } from './features/menu/delivery-apps/delivery-apps.component';
import { MenuPageComponent } from './features/menu/menu-page/menu-page.component';
import { BlogHomeSectionComponent } from './features/home/blog-home-section/blog-home-section.component';
import { HomeBlogCardComponent } from './shared/components/home-components/home-blog-card/home-blog-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { SharedModule } from './shared/components/shared.module';
import { BlogModule } from './features/blog/blog.module';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthModule } from './features/auth/auth.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    MenuComponent,
    ContactComponent,
    ReservationComponent,
    HeroComponent,
    MenuSectionComponent,
    ServicesSectionComponent,
    TestimonialsComponent,
    DeliverySectionComponent,
    MenuCardComponent,
    AboutSectionComponent,
    ImageAndCardComponent,
    TestimonialCardComponent,
    AboutSectionPrincipalComponent,
    AboutRestaurantAmbienceComponent,
    ClientInfoComponent,
    DeliveryAppsComponent,
    MenuPageComponent,
    MenuCardHomeComponent,
    BlogHomeSectionComponent,
    HomeBlogCardComponent,
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
    HttpClientModule,
    AuthModule,

    ReactiveFormsModule,
    CalendarModule,
    DropdownModule,
    InputNumberModule,
    InputTextareaModule,
    SharedModule,
    BlogModule,
    FormsModule,
  ],
  exports: [],
  providers: [provideHttpClient(withFetch())],
  bootstrap: [AppComponent],
})
export class AppModule {}
