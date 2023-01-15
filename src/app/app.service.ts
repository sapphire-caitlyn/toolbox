import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  constructor(){}
}

export class NierString{

  constructor(string: string) { this.OriginalString = string;
    this.Run();
  }

  public CurrentString: string = "";
  public OriginalString: string = "Hello World!";
  CurrentChar = 0;

  Run(){
    var charArr: string[] = this.OriginalString.split('');
    var stop = setInterval(() => {
      this.CurrentChar++;
      this.CurrentString = this.FillRemaining(this.CurrentChar, charArr);

      if(this.CurrentChar == this.OriginalString.length){
        clearInterval(stop);
        this.CurrentString = this.OriginalString;
        this.Flick();
      }
    }, 50);

  }

  FillRemaining(minimum: number, original: string[]): string{
    var local: string = "";
    for(var i = 0; i < original.length; i++){
      if(i <= minimum){
        local += original[i];
      }else{
        if(i == this.CurrentChar + 1){
          local += getRandomChar(1);
        }
      }
    }

    return local;
  }

  Flick(){
    var interval = Math.floor(Math.random() * 5000) + 5000;

    setInterval(() => {
      var char1 = Math.floor(Math.random() * this.CurrentString.length + 1);
      var char2 = Math.floor(Math.random() * this.CurrentString.length + 1);
      var char3 = Math.floor(Math.random() * this.CurrentString.length + 1);
      var charArr: string[] = this.OriginalString.split('');
      var string: string = "";

      for(let i = 0; i < this.CurrentString.length; i++){
        if(i == char1){
          string += getRandomChar(1);
        }else
        if(i == char2){
          string += getRandomChar(1);
        }else
        if(i == char3){
          string += getRandomChar(1);
        }else{
          string += this.CurrentString[i];
        }
      }

      this.CurrentString = string;

      setTimeout(() => {
        this.CurrentString = this.OriginalString;
      }, 100);
    }, interval);
  }
}

function getRandomChar(length: number) {
  var result           = '';
  var characters       = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789Ç"><./';
  var charactersLength = characters.length;
  for ( var i = 0; i < length; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}
