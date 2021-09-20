import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-re-zero',
  templateUrl: './re-zero.page.html',
  styleUrls: ['./re-zero.page.scss'],
})
export class ReZeroPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  
  openMenu(){
    this.menu.toggle();
    }
}
