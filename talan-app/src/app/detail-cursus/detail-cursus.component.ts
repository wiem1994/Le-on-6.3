import { Component, Input, OnInit } from '@angular/core';
import { Cursus } from '../cursus';

@Component({
  selector: 'app-detail-cursus',
  templateUrl: './detail-cursus.component.html',
  styleUrls: ['./detail-cursus.component.css']
})
export class DetailCursusComponent implements OnInit {
 @Input() cursus?: Cursus;
  constructor() { }

  ngOnInit(): void {
  }

}
