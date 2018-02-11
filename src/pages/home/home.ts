import { Component } from '@angular/core';
import {ModalController} from 'ionic-angular';
import {SubirPage} from "../subir/subir";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(private mdalCtrl: ModalController) {

  }

  mostrarModal() {
    let modal = this.mdalCtrl.create( SubirPage );

    modal.present();
  }
}
