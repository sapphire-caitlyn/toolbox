import { FileStructure, GuntnerResourceStructure, GSToolsStructure } from './../../../model-files-strings.model';
import { Component, OnInit } from '@angular/core';
import { NierString } from 'src/app/app.service';
import { CodeGenService } from 'src/app/code-gen.service';
import { FilesGuntnerResource, FilesGSTools, FilesArpiNextPaint, FilesZaBrazil } from './model-files';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-model-view-controller-generator',
  templateUrl: './model-view-controller-generator.component.html',
  styleUrls: ['./model-view-controller-generator.component.scss'],
})
export class ModelViewControllerGeneratorComponent implements OnInit {
  title: NierString = new NierString("Souce Code File Gen")
  current: NierString = new NierString("");

  Variables: Variable[] = [];
  varHeight: number = 0;

  strings   : Variable[] = []; //0
  ints      : Variable[] = []; //1
  longs     : Variable[] = []; //2
  datetimes : Variable[] = []; //3
  bools     : Variable[] = []; //4
  floats    : Variable[] = []; //5
  decimals  : Variable[] = []; //6
  customs   : Variable[] = []; //7

  currentVariableType: number = -1;
  variableButtons: Base[] =
  [
    { "name": "string"  , "id" : 0 },
    { "name": "int"     , "id" : 1 },
    { "name": "long"    , "id" : 2 },
    { "name": "datetime", "id" : 3 },
    { "name": "bool"    , "id" : 4 },
    { "name": "float"   , "id" : 5 },
    { "name": "double"  , "id" : 6 },
    { "name": "decimal" , "id" : 7 },
    { "name": "custom"  , "id" : 8 },
  ];

  currentVariableNull: number = -1;
  variableTypesNull: Base[] =
  [
    { "name": "Not Nullable"  , "id" : 0 } ,
    { "name": "Nullable"      , "id" : 1 } ,
  ];

  currentVariableList: number = -1;
  variableTypesList: Base[] =
  [
    { "name": "Not a List" , "id" : 0 } ,
    { "name": "List"       , "id" : 1 } ,
  ];

  currentProject: number = -1;
  Projects: Project[] =
  [
    { name: "Guntner"       , id : 0, Files : FilesGuntnerResource , Project : GuntnerResourceStructure },
    { name: "GSTools"       , id : 1, Files : FilesGSTools         , Project : GSToolsStructure },
    { name: "ArpiNextPaint" , id : 2, Files : FilesArpiNextPaint   , Project : GuntnerResourceStructure },
    //{ name: "ZABrazil"      , id : 3, Files : FilesZaBrazil        , Project : GuntnerResourceStructure },
  ];

  selectedFiles: number[] = [];

  input_variable_type: string = "";
  input_variable_name: string = "";
  input_model_name: string = "";

  //=============================================================================

  constructor(
    private serviceCodeGen: CodeGenService,
    private toastController: ToastController
  ) { }

  ngOnInit() {}

  onButtonClick(){
    this.Add()
  }

  SelectProject(item : Project){
    if(this.currentProject != item.id){
      this.currentProject = item.id;
      this.selectedFiles = [];
      item.Files.forEach((file) => {
        this.selectedFiles.push(file.id);
      });
    }
  }

  isFileCurrentlySelected(id : number): boolean{
    var is = false;
    this.selectedFiles.forEach((fileId => {
      if(id == fileId){
        is = true;
      }
    }));
    return is;
  }

  RemoveOrAddFile(id: number){
    var index = -1;
    for(let i = 0; i < this.selectedFiles.length; i++){
      if(this.selectedFiles[i] == id){
        index = i;
      }
    }

    if(index == -1){
      for(let i = 0; i < this.Projects.length; i++){
        if(this.Projects[i].id == this.currentProject){
          for(let j = 0; j < this.Projects[i].Files.length; j++){
            if(this.Projects[i].Files[j].id == id){
              this.selectedFiles.push(this.Projects[i].Files[j].id);
            }
          }
        }
      }
    }else{
      this.selectedFiles.splice(index, 1);
    }

    if (document.activeElement instanceof HTMLElement)
    document.activeElement.blur();
  }

  //Variables

  Add(){
    if(this.currentVariableNull == -1){
      this.Present("No Nullable Type Selected");
      return;
    }

    if(this.currentVariableList == -1){
      this.Present("No List Type Selected");
      return;
    }

    if(this.currentVariableType == -1){
      this.Present("No Type Selected");
      return;
    }

    if(this.Verify()){
      return;
    }

    let Type     = this.variableButtons[this.currentVariableType].id;
    console.log(this.variableButtons[this.currentVariableType].id == 8);

    let TypeName = this.variableButtons[this.currentVariableType].id == 8 ? this.input_variable_type : this.variableButtons[this.currentVariableType].name;

    let Nullable = this.currentVariableNull == 1 ? true : false;
    let List     = this.currentVariableList == 1 ? true : false;

    let object_push = {
      Name : `${this.input_variable_name}`,
      Nullable : Nullable,
      Type : Type,
      List: List,
      Label: `${this.input_variable_name} -
      ${TypeName} -
      ${this.currentVariableNull == 1 ? "Nullable" : "Not Nullable"} -
      ${this.currentVariableList == 1 ? "List"     : "Not a List"}`,
      TypeName: TypeName
    }
    this.Variables.push(object_push);

    console.log(object_push)

    this.ArraySort();
  }

  Remove(index: number){
    this.Variables.splice(index, 1);
    this.ArraySort();
  }

  ArraySort(){
    this.strings  = []; //0
    this.ints     = []; //1
    this.longs    = []; //2
    this.datetimes= []; //3
    this.bools    = []; //4
    this.floats   = []; //5
    this.decimals = []; //6
    this.customs  = []; //7

    this.Variables.forEach(el => {
      if(el.Type == 0){
        this.strings.push(el);
      }else if(el.Type == 1){
        this.ints.push(el);
      }else if(el.Type == 2){
        this.longs.push(el);
      }else if(el.Type == 3){
        this.datetimes.push(el);
      }else if(el.Type == 4){
        this.bools.push(el);
      }else if(el.Type == 5){
        this.floats.push(el);
      }else if(el.Type == 6){
        this.decimals.push(el);
      }else if(el.Type == 7){
        this.customs.push(el);
      }
    });

    this.varHeight = 100 / this.Variables.length;
    console.log(this.varHeight)
  }

  percentage(partialValue: number, totalValue: number) {
    return (100 * partialValue) / totalValue;
  }

  Generate(){
    var currentProjectObject = null;
    for(let i = 0; i < this.Projects.length; i++){
      if(this.currentProject == this.Projects[i].id){
        currentProjectObject = this.Projects[i];
      }
    }

    if(this.Variables.length == 0){
      this.Present("No Variables");
      return;
    }

    if(currentProjectObject == null){
      this.Present("No Project Selected");
      return;
    }

    if(this.input_model_name == null || this.input_model_name == ""){
      this.Present("No model Name!");
      return;
    }

    function capitalizeFirstLetter(string: string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    }

    function decapitalizeFirstLetter(string: string) {
      return string.charAt(0).toLocaleLowerCase() + string.slice(1);
    }

    this.serviceCodeGen.generate(this.Variables, currentProjectObject!.Project, this.selectedFiles, capitalizeFirstLetter(this.input_model_name), decapitalizeFirstLetter(this.input_model_name)).then(() => {
      this.Present("Files Generated")
    });
  }

  async Present(text: string = "No text", delay: number = 1000){
    const toast = await this.toastController.create({
      message: text,
      duration: delay,
      cssClass: 'custom-toast',
    });
      await toast.present();
  }

  Verify(): boolean{
    if(this.input_variable_name == ""){
      this.Present(`Variable name cannot be empty!`);
      return true;
    }

    if(this.input_variable_name.split(" ").length > 1){
      this.Present(`Variable name cannot contain spaces!`);
      return true;
    }

    if(this.currentVariableType == 8){
      if(this.input_variable_type == ""){
        this.Present(`Variable type cannot be empty!`);
        return true;
      }

      if(this.input_variable_type.split(" ").length > 1){
        this.Present(`Variable type cannot contain spaces!`);
        return true;
      }
    }
    return false;
  }

  Reset(){
    this.currentVariableList = -1;
    this.currentVariableNull = -1;
    this.currentProject = -1;
    this.currentVariableType = -1;
    this.Variables = [];

    this.input_variable_name = "";
    this.input_variable_type = "";

    this.Present("Form Reseted");

    this.ArraySort();
  }
}

export class Variable{
  public Name: string = "";
  public Type: number = 0;
  public Nullable: boolean = false;
  public List: boolean = false;
  public Label: string = "";
  public TypeName: string = "";
}

export class Base{
  public name: string = "";
  public id  : number = 0;
}

class Project extends Base{
  public Files: Base[] = [];
  public Project : FileStructure = new FileStructure()
}
