import { Component } from '@angular/core';

@Component({
  selector: 'bar-chart-demo',
  templateUrl: 'bar-chart-demo.html'
})
export class BarChartDemoComponent {
  public barChartOptions:any = {
    scaleShowVerticalLines: false,
    responsive: true
  };
  public barChartLabels:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ,'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public barChartType:string = 'bar';
  public barcolors = [{ backgroundColor: "rgb(175, 218, 247)"}];
  public barChartLegend:boolean = true;

  public barChartData:any[] = [
      {data: [40000, 38000, 39000, 41000, 42000, 43000, 42000, 41000, 40000, 37000, 38000, 40000], label: 'Charge数'}
  ];

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }

  public randomize():void {
    // Only Change 3 values
    let data = [
      Math.round(Math.random() * 100),
      59,
      80,
      (Math.random() * 100),
      56,
      (Math.random() * 100),
      40];
    let clone = JSON.parse(JSON.stringify(this.barChartData));
    clone[0].data = data;
    this.barChartData = clone;
    /**
     * (My guess), for Angular to recognize the change in the dataset
     * it has to change the dataset variable directly,
     * so one way around it, is to clone the data, change it and then
     * assign it;
     */
  }
}
