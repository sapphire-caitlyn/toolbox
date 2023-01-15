export const GuntnerResourceStructure: FileStructure = {
  //#region Controller
  ControllerHeader :
`using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GuntnerResource.Core.Interfaces;
using GuntnerResource.Views.BusinessCrud;
using GuntnerResource.Views.BusinessList;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;`,
  ControllerNamespace : "GuntnerResourceAPI.Controllers",
  //#endregion Controller

  //#region Model
  ModelHeader :
  `using GuntnerResource.Core.Base;
using GuntnerResource.Views.BusinessCrud;
using GuntnerResource.Views.BusinessList;`,
  ModelNamespace: "GuntnerResource.Core.Business",
  //#endregion Model

  //#region ViewCrud
  CrudHeader : `using System;
using System.Collections.Generic;
using System.Text;`,

  CrudNamespace : `GuntnerResource.Views.BusinessCrud`,
  //#endregion ViewCrud

  //#region ViewList
  ListHeader : `using System;
using System.Collections.Generic;
using System.Text;`,
  ListNamespace : "GuntnerResource.Views.BusinessList",
  //#endregion ViewList

  //#region View
  ViewNamespace: `GuntnerResource.Views.BusinessSpecific`,
  ViewHeader : `using GuntnerResource.Views.BusinessCrud;
using System;
using System.Collections.Generic;
using System.Text;`,
  //#endregion View

  //#region Interface
  InterfaceHeader : `using System;
using System.Collections.Generic;
using System.Text;
using GuntnerResource.Views.BusinessCrud;
using GuntnerResource.Views.BusinessList;`,
  InterfaceNamespace : `GuntnerResource.Core.Interfaces`,
  //#endregion Interface

  //#region Service
  ServiceHeader: `using GuntnerResource.Core.Base;
using GuntnerResource.Core.Business;
using GuntnerResource.Core.Interfaces;
using GuntnerResource.Data;
using GuntnerResource.Services.Commons;
using GuntnerResource.Views.BusinessCrud;
using GuntnerResource.Views.BusinessList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tools;
`,
  ServiceNamespace: `GuntnerResource.Services.Specific`
  //#endregion Service
}

export const GSToolsStructure: FileStructure = {
  //#region Controller
  ControllerHeader :
`using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using GSTools.Core.Interfaces.Base;
using GSTools.Views.BusinessCrud.Base;
using GSTools.Views.BusinessCrud.Core;
using GSTools.Views.BusinessCrud;
using GSTools.Views.BusinessList.Base;
using GSTools.Views.BusinessList;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;`,
  ControllerNamespace : "GSApi.Controllers",
  //#endregion Controller

  //#region Model
  ModelHeader :
  `using GSTools.Core.Base;
using GSTools.Views.BusinessCrud.Core;
using GSTools.Views.BusinessList.Core;`,
  ModelNamespace: "GSTools.Core.Business.Core",
  //#endregion Model

  //#region ViewCrud
  CrudHeader : `using System;
using System.Collections.Generic;
using System.Text;`,

  CrudNamespace : `GSTools.Views.BusinessCrud`,
  //#endregion ViewCrud

  //#region ViewList
  ListHeader : `using System;
using System.Collections.Generic;
using System.Text;`,
  ListNamespace : "GSTools.Views.BusinessList",
  //#endregion ViewList

  //#region View
  ViewHeader : `using GSTools.Views.BusinessCrud;
using System;
using System.Collections.Generic;
using System.Text;`,
  ViewNamespace: `GSTools.Views.BusinessGeneric`,
  //#endregion View

  //#region Interface
  InterfaceHeader : `using GSTools.Views.BusinessCrud.Base;
  using GSTools.Views.BusinessList.Base;
  using System.Collections.Generic;`,
  InterfaceNamespace : `GSTools.Core.Interfaces.Base`,
  //#endregion Interface

  //#region Service
  ServiceHeader: `using GuntnerResource.Core.Base;
using GuntnerResource.Core.Business;
using GuntnerResource.Core.Interfaces;
using GuntnerResource.Data;
using GuntnerResource.Services.Commons;
using GuntnerResource.Views.BusinessCrud;
using GuntnerResource.Views.BusinessList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Tools;
`,
  ServiceNamespace: `GuntnerResource.Services.Specific`
  //#endregion Service
}






export class FileStructure{
  public ControllerHeader     : string = "";
  public ControllerNamespace  : string = "";

  public ModelHeader          : string = "";
  public ModelNamespace       : string = "";

  public CrudHeader           : string = "";
  public CrudNamespace        : string = "";

  public ListHeader           : string = "";
  public ListNamespace        : string = "";

  public ViewHeader           : string = "";
  public ViewNamespace        : string = "";

  public InterfaceHeader      : string = "";
  public InterfaceNamespace   : string = "";

  public ServiceHeader        : string = "";
  public ServiceNamespace     : string = "";
}
