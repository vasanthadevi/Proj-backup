import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import { SideComponent } from './side/side.component';
import { ContinfoComponent } from './continfo/continfo.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { ActivatedRoute } from '@angular/router';


@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    SideComponent,
    ContinfoComponent
  ],
  imports: [
    BrowserModule,
    RouterModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
