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

import { PageoneComponent } from './pageone/pageone.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { DropdownComponent } from './dropdown/dropdown.component';

@NgModule({
  declarations: [
    HomepageComponent,
    AppComponent,
    PageoneComponent,
    PageNotFoundComponent,
    DropdownComponent
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
      {path: 'post-one', component: PageoneComponent},
      {path: '', redirectTo: '/home-page', pathMatch: 'full'},
      {path: '**', component: PageNotFoundComponent}
    ]),

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
