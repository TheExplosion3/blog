import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field'
import { MatOptionModule } from '@angular/material/core';
import { MatSelectModule } from '@angular/material/select'

import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropdownComponent } from './dropdown/dropdown.component';
import { PageoneComponent } from './dropdown/pageone/pageone.component';
import { PagetwoComponent } from './dropdown/pagetwo/pagetwo.component';

@NgModule({
  declarations: [
    HomepageComponent,
    AppComponent,
    PageNotFoundComponent,
    DropdownComponent,
    PageoneComponent,
    PagetwoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatOptionModule,
    MatSelectModule,
    BrowserModule,
    RouterModule.forRoot([
      {path: 'home-page', component: HomepageComponent},
      {path: '', redirectTo: '/home-page', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
