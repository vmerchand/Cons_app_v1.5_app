(function(window, undefined) {
  var dictionary = {
    "d79fe8d9-c249-43a9-8cc3-a475bf430f15": "dialogoGuardarSalir",
    "18ad1943-6595-4efd-ab76-7db5b6ae047b": "FormularioSallir1",
    "b9b09868-35ab-4da4-8368-f644f11d3ca1": "audiencias_primer_pregunta",
    "58d885fe-5251-4c5c-8c98-a4b27863871e": "Menu",
    "d8a8bd87-f138-46eb-b1cd-e214c349a8f1": "audiencia_1_control_detencion",
    "96d8b75c-9af2-411a-860c-f983eab0380f": "tmp_salir",
    "2ed531ac-a968-4769-9bb5-0bb943e08acb": "salas_general",
    "60aad723-6685-4a01-92ee-b631ea06be97": "sala_photo",
    "40460924-2152-4147-b90e-cdd470103834": "sala_galeria",
    "d12245cc-1680-458d-89dd-4f0d7fb22724": "Login",
    "82a02069-7dee-416f-bf41-6a016dbbadb9": "menu_guias",
    "94f802ff-0c78-4275-baac-70ff16a3eeb0": "guia_audiencias",
    "e59cafce-2294-4653-ac36-2651a7082c2c": "audiencias_menu",
    "53c69bf5-cecd-4d1d-8883-c8a717845ebb": "sala_graba_audio",
    "9f38956c-7fbe-444d-a235-9741a38d3303": "salas_obaervacion_fuera_audienciaA",
    "3c00b9e6-569d-4b07-ae86-bf5778714627": "tmp_back_audiencias_general",
    "917cc990-4cfa-416f-ba09-e868f750ab9e": "tmp_back_herramientas",
    "6fe6502b-1dd0-4961-9e15-6a18aaa7b10f": "tmp_back_audiencias_detalle",
    "8e045938-a9cd-4e73-bc83-6180996df72a": "tmp_back_salas_general",
    "e21d721b-11d8-4817-bd27-f99723ac0e92": "tmp_blanco",
    "1fe74c68-f646-4e8a-9387-700c7217ddfe": "tmp_back_salas_detalle",
    "403340a5-bec8-413f-921e-8398dab3c084": "tmp_back_herramientas_hamburguer",
    "f39803f7-df02-4169-93eb-7547fb8c961a": "tmp_back_azul",
    "d42d01f0-5d16-4933-b7a8-0c9c170f7433": "tmp_gris",
    "bb8abf58-f55e-472d-af05-a7d1bb0cc014": "default"
  };

  var uriRE = /^(\/#)?(screens|templates|masters|scenarios)\/(.*)(\.html)?/;
  window.lookUpURL = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, url;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      url = folder + "/" + canvas;
    }
    return url;
  };

  window.lookUpName = function(fragment) {
    var matches = uriRE.exec(fragment || "") || [],
        folder = matches[2] || "",
        canvas = matches[3] || "",
        name, canvasName;
    if(dictionary.hasOwnProperty(canvas)) { /* search by name */
      canvasName = dictionary[canvas];
    }
    return canvasName;
  };
})(window);