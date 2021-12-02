import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup, FormControl, FormsModule } from '@angular/forms';
import {CURSUS} from "../cursus-exemple"
@Component({
  selector: 'app-aprentis',
  templateUrl: './aprentis.component.html',
  styleUrls: ['./aprentis.component.css']
})
export class AprentisComponent implements OnInit {
  registrationForm: any;
  curs = CURSUS;
  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.registrationForm = this.fb.group(
     {
       nom: ['', Validators.required],
       prenom: ['', Validators.required],
       cursus: ['',Validators.required]
     });
 }

 onSubmit(): void {
  if (this.registrationForm.invalid) {
    console.warn('you did not fill all the inputs');
    return ;
}
  console.warn('the item has been successfully added', this.registrationForm.value);
  this.registrationForm.reset();
}


}
