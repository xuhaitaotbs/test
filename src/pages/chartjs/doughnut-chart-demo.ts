import { Component } from '@angular/core';

@Component({
  selector: 'doughnut-chart-demo',
  templateUrl: 'doughnut-chart-demo.html'
})
export class DoughnutChartDemoComponent {
  // Doughnut
  public doughnutChartLabels:string[] = ['正確率', '錯誤率'];
  public barcolors = [{ backgroundColor: "rgb(255, 193, 206)"}, {backgroundColor: "rgb(255, 226, 154)"}];//red

  public doughnutChartData:number[] = [0, 1];
  public doughnutChartType:string = 'doughnut';

  // events
  public chartClicked(e:any):void {
      console.log(e);
  }

  public chartHovered(e:any):void {
      console.log(e);
  }
}
