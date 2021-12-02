import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { AprentisComponent } from './aprentis/aprentis.component';
import { ListeCursusComponent } from './liste-cursus/liste-cursus.component';
import { AcceuilComponent } from './acceuil/acceuil.component';



const routes: Routes = [{path: 'aprentis', component: AprentisComponent },{path: 'cursus', component: ListeCursusComponent }
,{path: '', component: AcceuilComponent }];
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports : [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [AprentisComponent,ListeCursusComponent,AcceuilComponent]