import { Component } from '@angular/core';
import {ModalController} from 'ionic-angular';
import {SubirPage} from "../subir/subir";
import {Observable} from "rxjs/Observable";
import {AngularFireDatabase} from "angularfire2/database";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  items: Observable<any[]>;

  constructor(private mdalCtrl: ModalController, private afDB: AngularFireDatabase) {
    this.items = afDB.list('post').valueChanges();
  }

  mostrarModal() {
    let modal = this.mdalCtrl.create( SubirPage );

    modal.present();
  }
}
