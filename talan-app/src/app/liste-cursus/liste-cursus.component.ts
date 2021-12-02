import { Component, OnInit } from '@angular/core';
import  {CURSUS} from '../cursus-exemple'
import {Cursus} from '../cursus'
import { FormBuilder, Validators, FormGroup, FormControl, FormsModule } from '@angular/forms';
import { ProductService } from '../product.service';



@Component({
  selector: 'app-liste-cursus',
  templateUrl: './liste-cursus.component.html',
  styleUrls: ['./liste-cursus.component.css']
})
export class ListeCursusComponent implements OnInit {
  curs = CURSUS;
  registrationForm: any;
  urlRegex = /^(?:http(s)?:\/\/)?[\w.-]+(?:\.[\w\.-]+)+[\w\-\._~:/?#[\]@!\$&'\(\)\*\+,;=.]+$/;
  motCleRegex = /^[a-zA-Z]{2,40}(?: +[a-zA-Z]{2,40})+$/;
  selectedCursus?: Cursus;
  onSelect(cursus: Cursus): void {
  this.selectedCursus = cursus;
}


constructor(private fb: FormBuilder, private productService : ProductService){}


  
  ngOnInit() {
     this.registrationForm = this.fb.group(
      {
        nom: ['', Validators.required],
        description: ['', Validators.required],
        image: ['', [Validators.required, Validators.pattern(this.urlRegex)]],
        motsCles: ['', [Validators.required, Validators.pattern(this.motCleRegex)]]
      });
  }



  onSubmit(): void {
    if (this.registrationForm.invalid) {
      console.warn('you did not fill all the inputs');
      return ;
  }
    this.curs.push(this.registrationForm.value)
    console.warn('the item has been successfully added', this.registrationForm.controls);
    this.registrationForm.reset();
  }

}
