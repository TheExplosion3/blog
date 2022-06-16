import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomepageComponent } from './homepage/homepage.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { PageoneComponent } from './pageone/pageone.component';
import { RouterModule } from '@angular/router';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

@NgModule({
  declarations: [
    HomepageComponent,
    AppComponent,
    PageoneComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule,
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
