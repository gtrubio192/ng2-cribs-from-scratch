// Auto generated file from Angular CLI
// > ng g component crib-listing
import { Component, OnInit } from '@angular/core';
import { cribs } from '../data/cribs';

@Component({
  selector: 'app-crib-listing',
  templateUrl: './crib-listing.component.html',
  styleUrls: ['./crib-listing.component.css']
})
// 
export class CribListingComponent implements OnInit {

  // Declaration of local property 'cribs' of type Array being assinged value of imported 'cribs'
  cribs: Array<any> = cribs;

  constructor() { }

  ngOnInit() {
  }

}
