import { Component, OnInit } from '@angular/core';
import { CsvService } from '../../services/csv.service';

@Component({
  selector: 'app-csv-connect',
  templateUrl: './csv-connect.page.html',
  styleUrls: ['./csv-connect.page.scss'],
})
export class CsvConnectPage implements OnInit {
  products: any;

  constructor(private csvService:CsvService) { }

  ngOnInit() {
  }

  ionViewWillEnter(){
   this.csvService.getProducts().then((data:any)=>{
     console.log(data)
     this.products = data.csvFile
   })
  }
}
