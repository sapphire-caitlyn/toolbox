import { FileStructure } from './model-files-strings.model';
import { Injectable } from '@angular/core';
import { Variable } from './main/pages/model-view-controller-generator/model-view-controller-generator.component';
import { file as controller_file } from './../app/.default-files.model/model-controller';
import { file as model_file      } from './../app/.default-files.model/model-model';
import { file as crud_file       } from './../app/.default-files.model/model-crud';
import { file as list_file       } from './../app/.default-files.model/model-list';
import { file as view_file       } from './../app/.default-files.model/model-view';
import { file as interface_file  } from './../app/.default-files.model/model-interface';
import { file as service_file    } from './../app/.default-files.model/model-service';

@Injectable({
  providedIn: 'root'
})
export class CodeGenService {

  constructor( ) { }

  generate(Variables: Variable[], Project : FileStructure, selectedFiles: number [], modelNameUp: string = "Grupo", modelNameDown: string = "grupo"):Promise<void>{
    //GenerateController
    return new Promise((resolve, rejects) => {

      var _controller: Boolean = false;
      var _model: Boolean = false;
      var _crud: Boolean = false;
      var _list: Boolean = false;
      var _view: Boolean = false;
      var _interface: Boolean = false;
      var _service: Boolean = false;

      var files: File[] = [];

      for(var i = 0; i < selectedFiles.length; i++){
        if(i == 0){
          _controller = true;
        }else if(i == 1){
          _model = true;
        }else if(i == 2){
          _crud = true;
        }else if(i == 3){
          _list = true;
        }else if(i == 4){
          _view = true;
        }else if(i == 5){
          _interface = true;
        }else if(i == 6){
          _service = true;
        }
      }

      if(_controller){
        var ControllerFile = controller_file;
        ControllerFile = ControllerFile.replaceAll("##imports##", "\n" + Project.ControllerHeader);
        ControllerFile = ControllerFile.replaceAll("##namespace##", Project.ControllerNamespace);
        ControllerFile = ControllerFile.replaceAll("##name_up##", modelNameUp);
        ControllerFile = ControllerFile.replaceAll("##name_down##", modelNameUp);

        files.push({
          FileContent: ControllerFile,
          FileName: `Controller${modelNameUp}`
        });
      }

      if(_model){
        var stringVariables       : string = this.GetStringVariables(Variables);
        var stringVariablesObject : string = this.GetStringVariablesObject(Variables);

        var ModelFile = model_file;
        ModelFile = ModelFile.replaceAll("##imports##", "\n" + Project.ModelHeader);
        ModelFile = ModelFile.replaceAll("##namespace##", Project.ModelNamespace);
        ModelFile = ModelFile.replaceAll("##name_up##", modelNameUp);
        ModelFile = ModelFile.replaceAll("##name_down##", modelNameUp);
        ModelFile = ModelFile.replaceAll("##variables##", stringVariables);
        ModelFile = ModelFile.replaceAll("##variables_object##", stringVariablesObject);

        files.push({
          FileContent: ModelFile,
          FileName: `${modelNameUp}`
        });
      }

      if(_crud){
        var stringVariables : string = this.GetStringVariables(Variables);
        var CrudFile = crud_file;

        CrudFile = CrudFile.replaceAll("##namespace##", Project.CrudNamespace);
        CrudFile = CrudFile.replaceAll("##name_up##", modelNameUp);
        CrudFile = CrudFile.replaceAll("##variables##", stringVariables);

        files.push({
          FileContent: CrudFile,
          FileName: `ViewCrud${modelNameUp}`
        });
      }

      if(_list){
        var stringVariables : string = this.GetStringVariables(Variables);
        var ListFile = list_file;

        ListFile = ListFile.replaceAll("##namespace##", Project.ListNamespace);
        ListFile = ListFile.replaceAll("##name_up##", modelNameUp);
        ListFile = ListFile.replaceAll("##variables##", stringVariables);

        files.push({
          FileContent: ListFile,
          FileName: `ViewList${modelNameUp}`
        });
      }

      if(_view){
        var stringVariables : string = this.GetStringVariables(Variables);
        var ViewFile = view_file;

        ViewFile = ViewFile.replaceAll("##imports##", "\n" + Project.ViewHeader);
        ViewFile = ViewFile.replaceAll("##namespace##", Project.ViewNamespace);
        ViewFile = ViewFile.replaceAll("##name_up##", modelNameUp);
        ViewFile = ViewFile.replaceAll("##variables##", stringVariables);

        files.push({
          FileContent: ViewFile,
          FileName: `View${modelNameUp}`
        });
      }

      if(_interface){
        var InterfaceFile = interface_file;

        InterfaceFile = InterfaceFile.replaceAll("##imports##", "\n" + Project.InterfaceHeader);
        InterfaceFile = InterfaceFile.replaceAll("##namespace##", Project.InterfaceNamespace);
        InterfaceFile = InterfaceFile.replaceAll("##name_up##", modelNameUp);

        files.push({
          FileContent: InterfaceFile,
          FileName: `IService${modelNameUp}`
        });
      }

      if(_service){
        //TO-DO
        var ServiceFile = service_file;

        ServiceFile = ServiceFile.replaceAll("##imports##", "\n" + Project.ServiceHeader);
        ServiceFile = ServiceFile.replaceAll("##namespace##", Project.ServiceNamespace);
        ServiceFile = ServiceFile.replaceAll("##name_up##", modelNameUp);

        files.push({
          FileContent: ServiceFile,
          FileName: `Service${modelNameUp}`
        });
      }

      console.log("Files Generated, Trying to Download It")
      this.ZipIt(files, modelNameUp);

      resolve();
    })
  }

  GetStringVariables(Variables: Variable[]): string{
    var res : string= "";

    Variables.forEach(variable => {
      res += `public ${variable.List ? `List<${variable.TypeName}>` : `${variable.TypeName}` }${variable.Nullable ? "?": ""}  ${variable.Name} { get; set; } \n`
    });

    return res;
  }
  GetStringVariablesObject(Variables: Variable[]): string{
    var res : string= "";

    Variables.forEach(variable => {
      res += `${variable.Name} = ${variable.Name},\n`
    });

    return res;
  }
  GetStringVariablesViewObject(Variables: Variable[]): string{
    //Nome = view.Nome,
    // Template = view.Template,
    // Ordem = view.Ordem,
    // idEmpresa = view.idEmpresa,
    // Ativo = view.Ativo
    var res : string= "";

    Variables.forEach(variable => {
      res += `${variable.Name} = view.${variable.Name},\n`
    });

    return res;
  }
  GetStringVariablesViewModelObject(Variables: Variable[]): string{
    var res : string= "";

    Variables.forEach(variable => {
      res += `model.${variable.Name} = view.${variable.Name};\n`
    });

    return res;
  }
  GetStringVariablesLinqObject(Variables: Variable[], name_down : string): string{
    var res : string= "";

    Variables.forEach(variable => {
      res += `${variable.Name} = ${name_down}.${variable.Name},\n`
    });

    return res;
  }

  async ZipIt(files: File[], modelNameUp: string){
    var JSZip = require("jszip");
    var zip = new JSZip();

    files.forEach(file => {
      zip.file(`${file.FileName}.cs`, file.FileContent);
    });

    zip.generateAsync({type:"base64"}).then(
      function (base64: string) {
        download(base64, modelNameUp + "files")
        // location.href="data:application/zip;base64," + base64;
        // location.download = "";
      }
    );
  }
}

function download(base64: string, filename: string = "file") {
  console.log("downloading File")
  const linkSource = `data:application/zip;base64,${base64}`;
  const downloadLink = document.createElement("a");
  const fileName = filename + ".zip";

  downloadLink.href = linkSource;
  downloadLink.download = fileName;
  downloadLink.click();
  console.log("downloaded File")
}

class File {
  public FileName    : string = "";
  public FileContent : string = "";
}
