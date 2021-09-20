import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {
 todo_cargando:boolean = false;
  constructor(private menu: MenuController ) { }

  ngOnInit() {

  }

  openMenu(){
    this.menu.toggle();
    }
    
    option = {
      slidesPerView:1.0,
      centeredSlides: true,
      loop: true,
      spaceBetween: 5,
      autoplay: true,
    }
        
      }
     
    

