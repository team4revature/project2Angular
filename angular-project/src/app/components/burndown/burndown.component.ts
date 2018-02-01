import { Component, OnInit } from '@angular/core';
import {Messages, Message} from 'primeng/primeng';
import {MenuItem} from 'primeng/api';
import { BurndownService } from '../../services/burndown.service';
import { History } from '../../models/history.model';
import { forEach } from '@angular/router/src/utils/collection';
import { DatePipe } from '@angular/common';
import { GlobalEventsManager } from '../../services/global-events.service';


@Component({
  selector: 'app-burndown',
  templateUrl: './burndown.component.html',
  styleUrls: ['./burndown.component.css'],
})
export class BurndownComponent implements OnInit {

  data: any;

  history: History[];

  msgs: Message[];

  chartLabels: string[];

  chartData: number[];


    getHistory(): void{
      this.burndownService.getHistory()
        .subscribe(history1 =>{ this.history = history1; this.bindData(history1); });
    }
  

    bindData(burndown: History[]): void{

      for(const h of burndown){
        console.log("" + h.hid);
      }
      
      for(let i = burndown.length -1; i >= 0; i--){
        for(let j = 1; j <= i; j++){
          if(burndown[j-1].hid > burndown[j].hid){
            let tempHist = burndown[j-1];
            burndown[j-1] = burndown[j];
            burndown[j] = tempHist;
          }
        }
      }
      
      for(const h of burndown){
        console.log("" + h.hid);
      }
      
      let iterations = 0;

      for(const h of burndown){
        if(iterations == 0 && this.chartData.length == 1 && this.chartLabels.length == 1 ){
          this.chartData[0] = h.value;
          this.chartLabels[0] = this.datePipe.transform(h.key,'yyyy-MM-dd');
        } else {
          this.chartData.push(h.value);
          this.chartLabels.push(this.datePipe.transform(h.key,'yyyy-MM-dd'));
        }
        iterations++;
      }

      
      this.data = {
        labels: this.chartLabels,
        datasets: [
            {
                label: 'Burndown',
                data: this.chartData, 
                fill: false,
                borderColor: '#4bc0c0'
            } 
        ]
      };      
    }
  

  constructor(private burndownService: BurndownService, private datePipe: DatePipe, 
    private globalEventsManager: GlobalEventsManager) { // added service to constructor
    //For the Navbar 
    globalEventsManager.showNavBar.emit(true); 

    this.chartData = [0];
    this.chartLabels = [''];
   }

   selectData(event) {
    this.msgs = [];
    this.msgs.push({severity: 'info', summary: 'Data Selected', 'detail': 
    this.data.datasets[event.element._datasetIndex].data[event.element._index]});
  }

  ngOnInit() {
    this.getHistory(); // ! in constructor
   // this.bindData();
  }

}


