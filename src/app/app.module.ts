import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ProjectsComponent } from './projects/projects.component';
import { ContactComponent } from './contact/contact.component';
import { FooterComponent } from './footer/footer.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
//Slider
import {MatSliderModule} from '@angular/material/slider';

//Autocomplete
import {MatAutocompleteModule} from '@angular/material/autocomplete';

//checkbox
import {MatCheckboxModule} from '@angular/material/checkbox';

//date picker
import{MatDatepickerModule} from '@angular/material/datepicker';

//importing native date module(moved to core in angular 11)
import {MatNativeDateModule} from  '@angular/material/core';

//Select module
import {MatSelectModule} from '@angular/material/select';

//MatOptionModule moved to core
import {MatOptionModule} from '@angular/material/core';

//badge
import {MatBadgeModule} from '@angular/material/badge';

//menu
import {MatMenuModule} from '@angular/material/menu';

//HTTP client
import {HttpClientModule} from '@angular/common/http';

//Grid
import {MatGridListModule} from '@angular/material/grid-list';

//Divider
import {MatDividerModule} from '@angular/material/divider';

//Radio
import {MatRadioModule} from '@angular/material/radio';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MatSliderModule,
    MatAutocompleteModule,
    MatInputModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatIconModule,
    MatSelectModule,
    MatOptionModule,
    MatBadgeModule,
    MatMenuModule,
    MatButtonModule,
    HttpClientModule,
    HttpClientModule,
    MatGridListModule,
    MatDividerModule, 
    MatRadioModule,
    MatFormFieldModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
