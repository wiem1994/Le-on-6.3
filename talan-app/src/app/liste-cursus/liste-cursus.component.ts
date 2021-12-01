import { Component, OnInit } from '@angular/core';
import  {CURSUS} from '../cursus-exemple'
import {Cursus} from '../cursus'
import { FormBuilder, Validators, FormGroup, FormControl, FormsModule } from '@angular/forms';


@Component({
  selector: 'app-liste-cursus',
  templateUrl: './liste-cursus.component.html',
  styleUrls: ['./liste-cursus.component.css']
})
export class ListeCursusComponent implements OnInit {
  curs = CURSUS;

  selectedCursus?: Cursus;
  onSelect(cursus: Cursus): void {
  this.selectedCursus = cursus;
}


constructor(private fb: FormBuilder){}
registrationForm = this.fb.group(
{
  nom: ['', Validators.required],
  description: '',
  image: '',
  motsCles: ''
});
  
  ngOnInit(): void {
  }

}
