jQuery("#simulation")
  .on("click", ".s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 .click", function(event, data) {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_1 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_1": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#00A72B",
                        "background-attachment": "scroll",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_1 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_1": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#7D7D7D",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_2": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_2 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_2": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_2 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_2": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_2 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FF041C",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_2": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_2 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_2": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_1 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#7D7D7D",
                        "background-attachment": "scroll",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_1": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_1 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_1": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_3 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_3": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#00A72B",
                        "background-attachment": "scroll",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_3": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_3 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_3": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#7D7D7D",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_4": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_4 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_4": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_4 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_4": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_4 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FF041C",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_4": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_4 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_4": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_3 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#7D7D7D",
                        "background-attachment": "scroll",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_3": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_3 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_3": {
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
    } else if(jFirer.is("#s-Button_7")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_7 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_7": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#00A72B",
                        "background-attachment": "scroll",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_7": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_7 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_7": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#7D7D7D",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_8": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_8 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_8": {
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
    } else if(jFirer.is("#s-Button_8")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_8 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_8": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_8 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FF041C",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_8": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_8 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_8": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_7 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#7D7D7D",
                        "background-attachment": "scroll",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_7": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_7 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_7": {
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
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_9 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_9": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#00A72B",
                        "background-attachment": "scroll",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_9": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_9 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_9": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#7D7D7D",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_10": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_10 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_10": {
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
    } else if(jFirer.is("#s-Button_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_10 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_10": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FF041C",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_10": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_10 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_10": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#7D7D7D",
                        "background-attachment": "scroll",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_9": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_9 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Button_9": {
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
    } else if(jFirer.is("#s-btnExit")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/18ad1943-6595-4efd-ab76-7db5b6ae047b"
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
  .on("pageload", ".s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 .pageload", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-txtgUIAS")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimPause",
                  "parameter": {
                    "pause": 1900
                  },
                  "exectype": "serial",
                  "delay": 0
                }
              ]
            }
          ],
          "exectype": "serial",
          "delay": 0
        },
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimShow",
                  "parameter": {
                    "target": [ "#s-txtgUIAS" ],
                    "effect": {
                      "type": "drop",
                      "easing": "linear",
                      "duration": 500
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
  .on("focusin", ".s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 .focusin", function(event, data) {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Input_7 > .backgroundLayer": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Input_8 > .backgroundLayer": {
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
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Input_10 > .backgroundLayer": {
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
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Input_11 > .backgroundLayer": {
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
  .on("focusout", ".s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 .focusout", function(event, data) {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Input_7 > .backgroundLayer": {
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
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Input_8 > .backgroundLayer": {
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
    } else if(jFirer.is("#s-Input_10")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Input_10 > .backgroundLayer": {
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
    } else if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-d8a8bd87-f138-46eb-b1cd-e214c349a8f1 #s-Input_11 > .backgroundLayer": {
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