import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';





@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {
slides = [
{
img: '/assets/04773fa5d781ca725a4ac602596acc78.jpg',
titulo: 'Card Title',
subtitle: 'Card Subtitle'
},
{
  img: '/assets/04773fa5d781ca725a4ac602596acc78.jpg',
  titulo: 'Card Title',
  subtitle: 'Card Subtitle'
  },
  {
    img: '/assets/04773fa5d781ca725a4ac602596acc78.jpg',
    titulo: 'Card Title',
    subtitle: 'Card Subtitle'
    }



];
 
  constructor(private menu: MenuController) { }

  ngOnInit() {
  }

  openMenu(){
  this.menu.toggle();
  }

}
