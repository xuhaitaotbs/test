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


   image :string;

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
    this.items = [
      'haitao.a.xu'
    ];
  }

   getItems(ev: any) {
    // Reset items back to all of the items
    this.initializeItems();

    // set val to the value of the searchbar
    let val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.items = this.items.filter((item) => {
        return (item.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }
}