import { Component } from '@angular/core';
import { CsvService } from '../services/csv.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products: unknown;

  constructor(private csvService:CsvService) {}

  ionViewWillEnter(){
   this.csvService.getProducts().then((data)=>{
     console.log(data)
     this.products = data
   })
  }
}
