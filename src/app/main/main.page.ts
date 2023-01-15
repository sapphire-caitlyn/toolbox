import { AppService, NierString } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.page.html',
  styleUrls: ['./main.page.scss'],
})
export class MainPage implements OnInit {

  has: boolean = false;
  menus: Menu[] = [
    { Name : "FILE GEN"    , Route: "generator", Disabled : false },
    { Name : "Unavailable" , Route: ""      , Disabled : true  },
    { Name : "Unavailable" , Route: ""      , Disabled : true  },
    { Name : "Unavailable" , Route: ""      , Disabled : true  },
    { Name : "Unavailable" , Route: ""      , Disabled : true  },
    { Name : "Unavailable" , Route: ""      , Disabled : true  },
    { Name : "Unavailable" , Route: ""      , Disabled : true  },
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
}

class Menu{
  public Name: string = "";
  public Route: string = "";
  public Disabled: boolean = false;
}
