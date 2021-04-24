import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const URL ='https://api.sheety.co'
@Injectable({
  providedIn: 'root'
})
export class CsvService {

  constructor(private http: HttpClient) { }


  getProducts(){
    return new Promise((resolve)=>{

      this.http.get(`${URL}/a5d273c58bb3fc9320b1b87e58eb21a1/segundoEspejoLaArgentinaV13/csvFile`)
      .subscribe((ob)=>{
        console.log(ob)
        resolve(ob)
      })
    })
  }

  
  getLogs(){
    return new Promise((resolve)=>{

      this.http.get(`${URL}//a5d273c58bb3fc9320b1b87e58eb21a1/segundoEspejoLaArgentinaV13/log`)
      .subscribe((ob)=>{
        console.log(ob)
        resolve(ob)
      })
    })
  }
}
