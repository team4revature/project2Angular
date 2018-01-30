import { Component, OnInit } from '@angular/core';
import {Messages, Message} from 'primeng/primeng'; // REMEMBER THIS
//import {AccordionModule} from 'primeng/accordion';     //accordion and accordion tab David Graves
import {MenuItem} from 'primeng/api';                   //api David Graves
import { BurndownService } from '../../services/burndown.service';
import { History } from '../../models/history.model';
import { forEach } from '@angular/router/src/utils/collection';
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

      // this.history = this.burndownService.getHistory(); // add to the service
    }
  

    bindData(burndown: History[]): void{
      
      // let arrayLength = this.history.length;
      let iterations = 0;
      for(const h of burndown){
        if(iterations == 0 && this.chartData.length == 1 && this.chartLabels.length == 1 ){
          this.chartData[0] = h.value;
          this.chartLabels[0] = h.key;
        } else {
          this.chartData.push(h.value);
          this.chartLabels.push(h.key);
        }
        iterations++;
      }

      
      this.data = {
        labels: this.chartLabels, // ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
        datasets: [
            {
                label: 'First Dataset',
                data: this.chartData, // [65, 59, 80, 81, 56, 55, 40],
                fill: false,
                borderColor: '#4bc0c0'
            } // ,
        ]
      };      
    }

  constructor(private burndownService: BurndownService, private globalEventsManager: GlobalEventsManager) { // added service to constructor
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


