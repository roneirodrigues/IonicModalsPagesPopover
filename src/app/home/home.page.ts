import { Component } from '@angular/core';
import { NavController, ModalController, PopoverController } from '@ionic/angular';
import { ModalPage } from '../pages/modal/modal.page';
import { PopoverPage } from '../pages/popover/popover.page';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  value = '';
  constructor(
    private nav: NavController, 
    private modalController: ModalController, 
    private popoverController: PopoverController) { }


  pushPage() {
    this.nav.navigateForward(`/second/${this.value}`);

  }

  async openModal() {
    const modal = await this.modalController.create({
      component: ModalPage,
      componentProps: {
        custom_id: this.value
      }
    });
    modal.present();
  }


  async openPopover(ev: Event) {

    const popover = await this.popoverController.create({
      component: PopoverPage,
      componentProps: {
        custom_id: this.value
      }
    });
    popover.present();


  }

}
