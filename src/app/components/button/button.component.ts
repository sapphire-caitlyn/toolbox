import { NierString } from './../../app.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nier-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
})
export class ButtonComponent implements OnInit {
  file1 = "./../assets/lsEiej1.png";
  file2 = "./../assets/Me4Vy3l.png";
  @Input('remove_indicator_status')remove_indicator_status: boolean = false;
  @Input('indicator_status')indicator_status: number = 2;
  @Input('force_hover')force_hover: boolean = false;
  @Input('menu')menu: boolean = false;
  @Input('button_text')button_text: string = "Button Placeholder Txt";
  @Input('icon')icon: number = -1;
  @Input('disabled')disabled: boolean = false;

  title: NierString = new NierString("");

  hovering: boolean = false;

  click : HTMLAudioElement = new Audio('./assets/audio/nier_notif.ogg');

  svgArr : any[] = [`M0.111,0.111 L0.222,0.111 L0.222,0 L0.333,0 L0.333,0.111 L0.444,0.111 L0.444,0 L0.556,0 L0.556,0.111 L0.667,0.111 L0.667,0 L0.667,0 L0.778,0 L0.778,0.111 L0.889,0.111 L0.889,0.222 L1,0.222 L1,0.333 L0.889,0.333 L0.889,0.444 L1,0.444 L1,0.556 L0.889,0.556 L0.889,0.667 L1,0.667 L1,0.778 L0.889,0.778 L0.889,0.889 L0.778,0.889 L0.778,1 L0.667,1 L0.667,0.889 L0.556,0.889 L0.556,1 L0.444,1 L0.444,0.889 L0.333,0.889 L0.333,0.889 L0.333,1 L0.222,1 L0.222,0.889 L0.111,0.889 L0.111,0.778 L0,0.778 L0,0.667 L0.111,0.667 L0.111,0.556 L0,0.556 L0,0.444 L0.111,0.444 L0.111,0.333 L0,0.333 L0,0.222 L0.111,0.222 L0.111,0.111 L0.222,0.222 L0.222,0.778 L0.778,0.778 L0.778,0.222 L0.222,0.222`,
                    ];

  constructor() {}

  ngOnInit() {
    this.title = new NierString(this.button_text);
  }

  hoverChange(hovering: boolean){
    if(hovering){
      if(!this.disabled){
        this.hovering = true;
        this.indicator_status = 1;
      }
    }else{
      this.hovering = false;
      this.indicator_status = 2;
    }
  }

  onClickEvent(){
    if(!this.disabled){
      this.click.play()
    }
  }
}
