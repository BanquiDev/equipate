import { Component, OnInit, ViewChild } from '@angular/core';
import { IonInfiniteScroll, LoadingController } from '@ionic/angular';
import { CsvService } from '../../services/csv.service';

@Component({
  selector: 'app-log-screen',
  templateUrl: './log-screen.page.html',
  styleUrls: ['./log-screen.page.scss'],
})
export class LogScreenPage implements OnInit {
  @ViewChild(IonInfiniteScroll) infiniteScroll: IonInfiniteScroll;
  logs: any[]=[]
  loading: HTMLIonLoadingElement;
  totalLogs: any;
  limit: number=10


  constructor(private csvService:CsvService, private loadingController:LoadingController) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.getData()
  }

  async getData(){
    this.loading = await this.loadingController.create({
      message: 'Cargando Datos...',
      spinner: 'crescent',
      duration: 2000
    });
    await this.loading.present();

  this.csvService.getLogs().then((data:any)=>{
    console.log(data)
    this.totalLogs = data.log.length
    // for(let log of data.log){
    //   this.logs.push(log)
    // }
    for (let index = 0; index < 100; index++) {
      const element = data.log[index];
      this.logs.push(element)
    }
    this.hideLoading()
  })
  }
  private hideLoading() {
    this.loading.dismiss();
  }

  loadMoreLogs(event) {
    setTimeout(() => {
      console.log('Begin async operation');
      this.limit += 10;
      event.target.complete();

      if (this.logs.length < this.limit) {
        event.target.disabled = true;
      }
    }, 500);
  }

  toggleInfiniteScroll() {
    this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
  }

}
