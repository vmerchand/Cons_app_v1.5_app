jQuery("#simulation")
  .on("click", ".s-9f38956c-7fbe-444d-a235-9741a38d3303 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Button_1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_1 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#00A72B",
                        "background-attachment": "scroll",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_1 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#00A72B",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#7D7D7D",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_2": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_2 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#7D7D7D",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_2")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_2 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_2": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FF041C",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_2": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_2 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_2": {
                      "attributes-ie": {
                        "-pie-background": "#FF041C",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#7D7D7D",
                        "background-attachment": "scroll",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_1 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_1": {
                      "attributes-ie": {
                        "-pie-background": "#7D7D7D",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_3")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_3 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_3": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#00A72B",
                        "background-attachment": "scroll",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_3": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_3 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "#00A72B",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#7D7D7D",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_4": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_4 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "#7D7D7D",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Button_4")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_4 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_4": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FF041C",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_4": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_4 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_4": {
                      "attributes-ie": {
                        "-pie-background": "#FF041C",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "timed",
                  "delay": 100
                },
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#7D7D7D",
                        "background-attachment": "scroll",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_3": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_3 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Button_3": {
                      "attributes-ie": {
                        "-pie-background": "#7D7D7D",
                        "-pie-poll": "false"
                      }
                    }
                  } ],
                  "exectype": "parallel",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-btnAudio1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/53c69bf5-cecd-4d1d-8883-c8a717845ebb",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-btnFoto1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/60aad723-6685-4a01-92ee-b631ea06be97",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-btnGaleria1")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/40460924-2152-4147-b90e-cdd470103834",
                    "transition": {
                      "type": "fade",
                      "duration": 700
                    }
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusin", ".s-9f38956c-7fbe-444d-a235-9741a38d3303 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Input_7 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#0088CC",
                        "border-right-color": "#0088CC",
                        "border-bottom-color": "#0088CC",
                        "border-left-color": "#0088CC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Input_8 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#0088CC",
                        "border-right-color": "#0088CC",
                        "border-bottom-color": "#0088CC",
                        "border-left-color": "#0088CC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  })
  .on("focusout", ".s-9f38956c-7fbe-444d-a235-9741a38d3303 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Input_7 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#CCCCCC",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-color": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    } else if(jFirer.is("#s-Input_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-9f38956c-7fbe-444d-a235-9741a38d3303 #s-Input_8 > .backgroundLayer": {
                      "attributes": {
                        "border-top-color": "#CCCCCC",
                        "border-right-color": "#CCCCCC",
                        "border-bottom-color": "#CCCCCC",
                        "border-left-color": "#CCCCCC"
                      }
                    }
                  } ],
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        }
      ];
      event.data = data;
      jEvent.launchCases(cases);
    }
  });