import { Injectable } from "@angular/core";

@Injectable()
export class DateService {

   private nowDate: any = new Date();

  //  constructor() {
  //      // alert(this.getMonth());
  //  }
    // public getMonth : any {
    //    // return this.nowDate.getMonth() + 1;
    // }

  //  public addMonth(year: number , month: number, num: number) : string{
  //       if ( (month + num) <=12 && (month + num) >=1) {
  //          return year + "" + (month + num);
  //       } else {
  //         //   if((imonth + num) > 12) {
  //         //       newYear = year + 1;
  //         //       newMonth = month -12;
  //         //       return newYear + "" + newMonth;
  //         //   } 
  //         // if((imonth + num) <1) {
  //         //       newYear = year - 1;
  //         //       newMonth = newMonth + 12;
  //         //       return newYear + "" + newMonth;
  //         //  } 
  //      }
  //  }
}