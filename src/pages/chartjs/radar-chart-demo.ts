import { Component } from '@angular/core';

@Component({
  selector: 'radar-chart-demo',
  templateUrl: 'radar-chart-demo.html'
})
export class RadarChartDemoComponent {
  // Radar
  public radarChartLabels:string[] = ['Corp', 'SCM/LOG', 'TV', 'SAP/Arch', 'SMOJ', 'NEWIT', 'PMO', 'その他'];

  public radarChartData:any = [
    {data: [58, 43, 17, 9, 22, 3, 5, 10], label: 'グループ`人数'}
   // {data: [28, 48, 40, 19, 96, 27, 100], label: 'Series B'}
  ];
  public radarChartType:string = 'radar';

  // events
  public chartClicked(e:any):void {
    console.log(e);
  }

  public chartHovered(e:any):void {
    console.log(e);
  }
}