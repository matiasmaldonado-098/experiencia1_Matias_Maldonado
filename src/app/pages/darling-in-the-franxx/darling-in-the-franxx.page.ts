import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-darling-in-the-franxx',
  templateUrl: './darling-in-the-franxx.page.html',
  styleUrls: ['./darling-in-the-franxx.page.scss'],
})
export class DarlingInTheFranxxPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle();
    }
}
