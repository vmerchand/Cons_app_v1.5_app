jQuery("#simulation")
  .on("click", ".s-94f802ff-0c78-4275-baac-70ff16a3eeb0 .click", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-guia")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimNavigation",
                  "parameter": {
                    "target": "screens/82a02069-7dee-416f-bf41-6a016dbbadb9"
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
    } else if(jFirer.is("#s-Button_9")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_9 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_9": {
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
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#00A72B",
                        "background-attachment": "scroll",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_9": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_9 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_9": {
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
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#7D7D7D",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_10": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_10 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_10": {
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
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_10 > .backgroundLayer": {
                      "attributes": {
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_10": {
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
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_10 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#FF041C",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_10": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_10 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_10": {
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
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_9 > .backgroundLayer": {
                      "attributes": {
                        "background-color": "#7D7D7D",
                        "background-attachment": "scroll",
                        "box-shadow": "none"
                      }
                    }
                  },{
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_9": {
                      "attributes": {
                        "text-shadow": "none"
                      }
                    }
                  },{
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_9 span": {
                      "attributes": {
                        "color": "#FFFFFF"
                      }
                    }
                  },{
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Button_9": {
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
    }
  })
  .on("focusin", ".s-94f802ff-0c78-4275-baac-70ff16a3eeb0 .focusin", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Input_11 > .backgroundLayer": {
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
  .on("focusout", ".s-94f802ff-0c78-4275-baac-70ff16a3eeb0 .focusout", function(event, data) {
    var jEvent, jFirer, cases;
    if(data === undefined) { data = event; }
    jEvent = jimEvent(event);
    jFirer = jEvent.getEventFirer();
    if(jFirer.is("#s-Input_11")) {
      cases = [
        {
          "blocks": [
            {
              "actions": [
                {
                  "action": "jimChangeStyle",
                  "parameter": [ {
                    "#s-94f802ff-0c78-4275-baac-70ff16a3eeb0 #s-Input_11 > .backgroundLayer": {
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