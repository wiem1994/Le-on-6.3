import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListeCursusComponent } from './liste-cursus/liste-cursus.component';
import { DetailCursusComponent } from './detail-cursus/detail-cursus.component';
import { SortnamePipe } from './sortname.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { AprentisComponent } from './aprentis/aprentis.component';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AcceuilComponent } from './acceuil/acceuil.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeCursusComponent,
    DetailCursusComponent,
    SortnamePipe,
    routingComponents,
    AcceuilComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
