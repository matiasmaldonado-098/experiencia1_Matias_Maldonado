import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-the-rising-of-the-shield-hero',
  templateUrl: './the-rising-of-the-shield-hero.page.html',
  styleUrls: ['./the-rising-of-the-shield-hero.page.scss'],
})
export class TheRisingOfTheShieldHeroPage implements OnInit {

  constructor(private menu: MenuController) { }

  ngOnInit() {
  }
  openMenu(){
    this.menu.toggle();
    }
}
