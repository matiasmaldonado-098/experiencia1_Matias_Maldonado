import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-himouto-umaru-cha',
  templateUrl: './himouto-umaru-cha.page.html',
  styleUrls: ['./himouto-umaru-cha.page.scss'],
})
export class HimoutoUmaruChaPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle();
    }
}
