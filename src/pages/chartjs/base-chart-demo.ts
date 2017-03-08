import { Component } from '@angular/core';

@Component({
  selector: 'base-chart-demo',
  templateUrl: 'base-chart-demo.html'
})
export class BaseChartDemoComponent {
  // lineChart
  public lineChartData:Array<any> = [{
      data: [40000, 38000, 39000, 41000, 42000, 43000, 42000, 41000, 40000, 37000, 38000, 40000],
      label: 'Charge数',
      fill: true}];
  public barcolors = [{ backgroundColor: "rgb(255, 193, 206)"}];//red
  //public barcolors = [{ backgroundColor: "rgb(255, 226, 154)"}];//yellow

 // public lineChartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July'];
  public lineChartLabels:string[] = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul' ,'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
  public lineChartType:string = 'line';
  public pieChartType:string = 'pie';

  // Pie
  public pieChartLabels:string[] = ['Download Sales', 'In-Store Sales', 'Mail Sales'];
  public pieChartData:number[] = [300, 500, 100];

  public randomizeType():void {
    this.lineChartType = this.lineChartType === 'line' ? 'bar' : 'line';
    this.pieChartType = this.pieChartType === 'doughnut' ? 'pie' : 'doughnut';
  }

  public chartClicked(e:any):void {
      console.log(e);
  }

  public chartHovered(e:any):void {
      console.log(e);
  }
}