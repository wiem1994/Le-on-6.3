import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ListeCursusComponent } from './liste-cursus/liste-cursus.component';
import { DetailCursusComponent } from './detail-cursus/detail-cursus.component';
import { SortnamePipe } from './sortname.pipe';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ListeCursusComponent,
    DetailCursusComponent,
    SortnamePipe
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
