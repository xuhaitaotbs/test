import { Component, OnInit } from "@angular/core";
import  PersonListAction  from "./personlist.action";
import { PersonListState } from "./personlist.state";
import { PersonListStore } from "./personlist.store";
import { NavController } from "ionic-angular/index";
import { ModalController} from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: "personlist",
  providers: [PersonListAction, PersonListState, PersonListStore],
  templateUrl: "personlist.html",
})
export class PersonListComponent implements OnInit {

  searchQuery: string = '';
  items: string[];

  constructor(private action: PersonListAction,
         private state: PersonListState,
         private store: PersonListStore,
         private navCtrl: NavController) {
      this.ngOnInit();
  }

  public ngOnInit() {
      this.action.init();
  }

  initializeItems() {
    
  }

   getItems(ev: any) {
    // Reset items back to all of the items
    //this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;
    //alert(val);

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.state.personInfo = this.state.personInfo.filter((item) => {
        return (item.eid.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    } else {
      this.action.init();
    }
  }
}