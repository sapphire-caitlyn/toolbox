import { AppService, NierString } from './app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {

  has: boolean = false;
  menus: Menu[] = [
    { Name : new NierString("MENU_PLACEHOLD"), Audio : new Audio('./assets/audio/nier_notif.ogg') } ,
    { Name : new NierString("MENU_PLACEHOLD"), Audio : new Audio('./assets/audio/nier_notif.ogg') } ,
    { Name : new NierString("MENU_PLACEHOLD"), Audio : new Audio('./assets/audio/nier_notif.ogg') } ,
    { Name : new NierString("MENU_PLACEHOLD"), Audio : new Audio('./assets/audio/nier_notif.ogg') } ,
    { Name : new NierString("MENU_PLACEHOLD"), Audio : new Audio('./assets/audio/nier_notif.ogg') } ,
    { Name : new NierString("MENU_PLACEHOLD"), Audio : new Audio('./assets/audio/nier_notif.ogg') } ,
    { Name : new NierString("MENU_PLACEHOLD"), Audio : new Audio('./assets/audio/nier_notif.ogg') } ,
  ];
  current: number = -1;
  hovering: number = -1;

  audio = new Audio('./assets/audio/nier_notif.ogg');

  constructor(
    public Service: AppService
  ) { }

  ngOnInit() {
  }

  setCurrent(index: number){
    console.log("Current index = " + index)
    this.current = index;
  }

  onButtonClick(index: number){
    if(index != this.current){
      this.current = index;
      this.menus[index].Audio.play();
    }else{
      this.current = index;
    }
    this.log()
  }

  log(){
    console.log(this.menus)
  }
}


class Menu{
  public Name: NierString | undefined;
  public Audio: any = new Audio('./assets/audio/nier_notif.ogg')
}
