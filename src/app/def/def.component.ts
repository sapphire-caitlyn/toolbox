import { NierString } from './../app.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-def',
  templateUrl: './def.component.html',
  styleUrls: ['./def.component.scss'],
})
export class DefComponent implements OnInit {

  constructor() { }

  audio = new Audio('./assets/audio/nier_notif.ogg');
  title: NierString = new NierString("NieR:Automata YoRHa UI")


  ngOnInit() {}

  onButtonClick(){
    this.audio.play();
  }
}
