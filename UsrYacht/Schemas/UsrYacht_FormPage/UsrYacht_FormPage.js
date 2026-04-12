define("UsrYacht_FormPage", /**SCHEMA_DEPS*/[]/**SCHEMA_DEPS*/, function/**SCHEMA_ARGS*/()/**SCHEMA_ARGS*/ {
	return {
		viewConfigDiff: /**SCHEMA_VIEW_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"name": "CardContentWrapper",
				"values": {
					"padding": {
						"left": "small",
						"right": "small",
						"top": "none",
						"bottom": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Tabs",
				"values": {
					"styleType": "default",
					"mode": "tab",
					"bodyBackgroundColor": "primary-contrast-500",
					"selectedTabTitleColor": "auto",
					"tabTitleColor": "auto",
					"underlineSelectedTabColor": "auto",
					"headerBackgroundColor": "auto",
					"allowToggleClose": true
				}
			},
			{
				"operation": "merge",
				"name": "GeneralInfoTabContainer",
				"values": {
					"gap": {
						"columnGap": "large",
						"rowGap": "none"
					},
					"visible": true,
					"color": "transparent",
					"borderRadius": "none",
					"padding": {
						"top": "none",
						"right": "none",
						"bottom": "none",
						"left": "none"
					},
					"alignItems": "stretch"
				}
			},
			{
				"operation": "merge",
				"name": "Feed",
				"values": {
					"dataSourceName": "PDS",
					"entitySchemaName": "UsrYacht"
				}
			},
			{
				"operation": "merge",
				"name": "AttachmentList",
				"values": {
					"columns": [
						{
							"id": "4cc7d2b4-007e-4539-8f69-a91927044a06",
							"code": "AttachmentListDS_Name",
							"caption": "#ResourceString(AttachmentListDS_Name)#",
							"dataValueType": 28,
							"width": 200
						}
					]
				}
			},
			{
				"operation": "insert",
				"name": "Button_jrx6ysq",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(Button_jrx6ysq_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "actions-button-icon",
					"menuItems": [],
					"clickMode": "default",
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAveragePriceCalc",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "Yachtid"
						}
					}
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "MenuItem_3l9q1ix",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(MenuItem_3l9q1ix_caption)#",
					"visible": true,
					"clicked": {
						"request": "crt.RunBusinessProcessRequest",
						"params": {
							"processName": "UsrAveragePriceCalc",
							"processRunType": "ForTheSelectedPage",
							"saveAtProcessStart": true,
							"showNotification": true,
							"recordIdProcessParameterName": "Yachtid"
						}
					}
				},
				"parentName": "Button_jrx6ysq",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "PushMe",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(PushMe_caption)#",
					"color": "default",
					"disabled": false,
					"size": "large",
					"iconPosition": "left-icon",
					"visible": true,
					"icon": "copilot-rewrite-friendly-icon",
					"clicked": {
						"request": "usr.PushButtonRequest"
					},
					"clickMode": "default"
				},
				"parentName": "ActionButtonsContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "UsrName",
				"values": {
					"layoutConfig": {
						"column": 1,
						"row": 1,
						"colSpan": 1,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.UsrName",
					"control": "$UsrName",
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Price",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPrice_xfvewev",
					"control": "$PDS_UsrPrice_xfvewev",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "Number",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrNumber_7dwyxpu",
					"control": "$PDS_UsrNumber_7dwyxpu",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": false,
					"labelPosition": "auto"
				},
				"parentName": "SideAreaProfileContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "Length",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrLength_pkfh69t",
					"control": "$PDS_UsrLength_pkfh69t",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Captain",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 1,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrCaptain_mxkru34",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrCaptain_mxkru34",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "CrewCount",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrCrewCount_ihpjdqo",
					"control": "$PDS_UsrCrewCount_ihpjdqo",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "DriveType",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 2,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrDriveType_x4ay1q3",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": false,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrDriveType_x4ay1q3",
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 3
			},
			{
				"operation": "insert",
				"name": "PassengersCount",
				"values": {
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrPassengersCount_qkxn8zh",
					"control": "$PDS_UsrPassengersCount_qkxn8zh",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": "",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 4
			},
			{
				"operation": "insert",
				"name": "Status",
				"values": {
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrStatus_94q3jfo",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrStatus_94q3jfo",
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 3,
						"rowSpan": 1
					},
					"visible": true,
					"readonly": false,
					"placeholder": "",
					"valueDetails": null
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 5
			},
			{
				"operation": "insert",
				"name": "addRecord_g70zb0r",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_g70zb0r_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Status",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "Comment",
				"values": {
					"type": "crt.Input",
					"label": "$Resources.Strings.PDS_UsrComment_0xo6um3",
					"control": "$PDS_UsrComment_0xo6um3",
					"placeholder": "",
					"tooltip": "",
					"readonly": false,
					"multiline": true,
					"labelPosition": "auto",
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					}
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 6
			},
			{
				"operation": "insert",
				"name": "Manager",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 4,
						"rowSpan": 1
					},
					"type": "crt.ComboBox",
					"label": "$Resources.Strings.PDS_UsrManager_si2a40z",
					"ariaLabel": "",
					"isAddAllowed": true,
					"showValueAsLink": true,
					"labelPosition": "auto",
					"controlActions": [],
					"listActions": [],
					"tooltip": "",
					"control": "$PDS_UsrManager_si2a40z",
					"valueDetails": null,
					"visible": true,
					"readonly": false,
					"placeholder": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 7
			},
			{
				"operation": "insert",
				"name": "addRecord_kgajl38",
				"values": {
					"code": "addRecord",
					"type": "crt.ComboboxSearchTextAction",
					"icon": "combobox-add-new",
					"caption": "#ResourceString(addRecord_kgajl38_caption)#",
					"clicked": {
						"request": "crt.CreateRecordFromLookupRequest",
						"params": {}
					}
				},
				"parentName": "Manager",
				"propertyName": "listActions",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "TikcetPrice",
				"values": {
					"layoutConfig": {
						"column": 1,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.NumberInput",
					"label": "$Resources.Strings.PDS_UsrTikcetPrice_34k1zcf",
					"control": "$PDS_UsrTikcetPrice_34k1zcf",
					"readonly": false,
					"placeholder": "",
					"labelPosition": "auto",
					"tooltip": ""
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 8
			},
			{
				"operation": "insert",
				"name": "EmailInput_Captain",
				"values": {
					"layoutConfig": {
						"column": 2,
						"colSpan": 1,
						"row": 5,
						"rowSpan": 1
					},
					"type": "crt.EmailInput",
					"label": "$Resources.Strings.PDS_UsrCaptainEmail_o33fr2a",
					"control": "$PDS_UsrCaptainEmail_o33fr2a",
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"needHandleSave": false,
					"caption": "#ResourceString(EmailInput_Captain_caption)#",
					"readonly": true
				},
				"parentName": "GeneralInfoTabContainer",
				"propertyName": "items",
				"index": 9
			},
			{
				"operation": "insert",
				"name": "YachtCategories",
				"values": {
					"type": "crt.MultiSelect",
					"label": "#ResourceString(YachtCategories_label)#",
					"recordId": "$Id",
					"recordRelationColumnName": "UsrYacht",
					"selectSchemaName": "UsrCategoryInYacht",
					"selectColumnName": "UsrCategory",
					"visible": true,
					"labelPosition": "auto",
					"placeholder": "",
					"tooltip": "",
					"required": false
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "ExpansionPanel_gx86v5r",
				"values": {
					"type": "crt.ExpansionPanel",
					"tools": [],
					"items": [],
					"title": "#ResourceString(ExpansionPanel_gx86v5r_title)#",
					"toggleType": "default",
					"togglePosition": "before",
					"expanded": true,
					"labelColor": "auto",
					"fullWidthHeader": false,
					"titleWidth": 20,
					"padding": {
						"top": "small",
						"bottom": "small",
						"left": "none",
						"right": "none"
					},
					"fitContent": true
				},
				"parentName": "GeneralInfoTab",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_vxfthnu",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 24px)",
					"columns": [
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_gx86v5r",
				"propertyName": "tools",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "FlexContainer_mm6xt17",
				"values": {
					"type": "crt.FlexContainer",
					"direction": "row",
					"gap": "none",
					"alignItems": "center",
					"items": [],
					"layoutConfig": {
						"colSpan": 1,
						"column": 1,
						"row": 1,
						"rowSpan": 1
					}
				},
				"parentName": "GridContainer_vxfthnu",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailRefreshBtn_o0yfzib",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailRefreshBtn_o0yfzib_caption)#",
					"icon": "reload-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.LoadDataRequest",
						"params": {
							"config": {
								"loadType": "reload"
							},
							"dataSourceName": "GridDetail_3zvdo2jDS"
						}
					}
				},
				"parentName": "FlexContainer_mm6xt17",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailSettingsBtn_7ol3dsm",
				"values": {
					"type": "crt.Button",
					"caption": "#ResourceString(GridDetailSettingsBtn_7ol3dsm_caption)#",
					"icon": "actions-button-icon",
					"iconPosition": "only-icon",
					"color": "default",
					"size": "medium",
					"clickMode": "menu",
					"menuItems": []
				},
				"parentName": "FlexContainer_mm6xt17",
				"propertyName": "items",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailExportDataBtn_8mll5xt",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailExportDataBtn_8mll5xt_caption)#",
					"icon": "export-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ExportDataGridToExcelRequest",
						"params": {
							"viewName": "GridDetail_3zvdo2j"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_7ol3dsm",
				"propertyName": "menuItems",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetailImportDataBtn_bbtjziv",
				"values": {
					"type": "crt.MenuItem",
					"caption": "#ResourceString(GridDetailImportDataBtn_bbtjziv_caption)#",
					"icon": "import-button-icon",
					"color": "default",
					"size": "medium",
					"clicked": {
						"request": "crt.ImportDataRequest",
						"params": {
							"entitySchemaName": "UsrYachtRentals"
						}
					}
				},
				"parentName": "GridDetailSettingsBtn_7ol3dsm",
				"propertyName": "menuItems",
				"index": 1
			},
			{
				"operation": "insert",
				"name": "GridDetailSearchFilter_bjbz1cg",
				"values": {
					"type": "crt.SearchFilter",
					"placeholder": "#ResourceString(GridDetailSearchFilter_bjbz1cg_placeholder)#",
					"iconOnly": true,
					"_filterOptions": {
						"expose": [
							{
								"attribute": "GridDetailSearchFilter_bjbz1cg_GridDetail_3zvdo2j",
								"converters": [
									{
										"converter": "crt.SearchFilterAttributeConverter",
										"args": [
											"GridDetail_3zvdo2j"
										]
									}
								]
							}
						],
						"from": [
							"GridDetailSearchFilter_bjbz1cg_SearchValue",
							"GridDetailSearchFilter_bjbz1cg_FilteredColumnsGroups"
						]
					}
				},
				"parentName": "FlexContainer_mm6xt17",
				"propertyName": "items",
				"index": 2
			},
			{
				"operation": "insert",
				"name": "GridContainer_wq5pqyw",
				"values": {
					"type": "crt.GridContainer",
					"rows": "minmax(max-content, 32px)",
					"columns": [
						"minmax(32px, 1fr)",
						"minmax(32px, 1fr)"
					],
					"gap": {
						"columnGap": "large",
						"rowGap": 0
					},
					"styles": {
						"overflow-x": "hidden"
					},
					"items": []
				},
				"parentName": "ExpansionPanel_gx86v5r",
				"propertyName": "items",
				"index": 0
			},
			{
				"operation": "insert",
				"name": "GridDetail_3zvdo2j",
				"values": {
					"type": "crt.DataGrid",
					"layoutConfig": {
						"colSpan": 2,
						"column": 1,
						"row": 1,
						"rowSpan": 6
					},
					"features": {
						"rows": {
							"selection": {
								"enable": true,
								"multiple": true
							}
						}
					},
					"items": "$GridDetail_3zvdo2j",
					"primaryColumnName": "GridDetail_3zvdo2jDS_Id",
					"columns": [
						{
							"id": "247fc14c-c103-fa41-2e0c-afe9f39f9b7e",
							"code": "GridDetail_3zvdo2jDS_UsrCustomer",
							"caption": "#ResourceString(GridDetail_3zvdo2jDS_UsrCustomer)#",
							"dataValueType": 10,
							"width": 140
						},
						{
							"id": "c36573c9-5146-8d9f-9245-f437feb75d6a",
							"code": "GridDetail_3zvdo2jDS_UsrStartDate",
							"caption": "#ResourceString(GridDetail_3zvdo2jDS_UsrStartDate)#",
							"dataValueType": 8,
							"width": 104
						},
						{
							"id": "d4d0a80d-34db-7a97-5fb5-3b96e4022a61",
							"code": "GridDetail_3zvdo2jDS_UsrEndDate",
							"caption": "#ResourceString(GridDetail_3zvdo2jDS_UsrEndDate)#",
							"dataValueType": 8
						}
					],
					"placeholder": false
				},
				"parentName": "GridContainer_wq5pqyw",
				"propertyName": "items",
				"index": 0
			}
		]/**SCHEMA_VIEW_CONFIG_DIFF*/,
		viewModelConfigDiff: /**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [
					"attributes"
				],
				"values": {
					"UsrName": {
						"modelConfig": {
							"path": "PDS.UsrName"
						}
					},
					"PDS_UsrLength_pkfh69t": {
						"modelConfig": {
							"path": "PDS.UsrLength"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 10,
									"message": "#ResourceString(LenghtCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrPrice_xfvewev": {
						"modelConfig": {
							"path": "PDS.UsrPrice"
						},
						"validators": {
							"MySuperValidator": {
								"type": "usr.DGValidator",
								"params": {
									"minValue": 50,
									"message": "#ResourceString(PriceCannotBeLess)#"
								}
							}
						}
					},
					"PDS_UsrCaptain_mxkru34": {
						"modelConfig": {
							"path": "PDS.UsrCaptain"
						}
					},
					"PDS_UsrCaptain_mxkru34_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrCrewCount_ihpjdqo": {
						"modelConfig": {
							"path": "PDS.UsrCrewCount"
						}
					},
					"PDS_UsrPassengersCount_qkxn8zh": {
						"modelConfig": {
							"path": "PDS.UsrPassengersCount"
						}
					},
					"PDS_UsrStatus_94q3jfo": {
						"modelConfig": {
							"path": "PDS.UsrStatus"
						}
					},
					"PDS_UsrStatus_94q3jfo_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrComment_0xo6um3": {
						"modelConfig": {
							"path": "PDS.UsrComment"
						}
					},
					"PDS_UsrManager_si2a40z": {
						"modelConfig": {
							"path": "PDS.UsrManager"
						}
					},
					"PDS_UsrManager_si2a40z_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrDriveType_x4ay1q3": {
						"modelConfig": {
							"path": "PDS.UsrDriveType"
						}
					},
					"PDS_UsrDriveType_x4ay1q3_List": {
						"isCollection": true,
						"modelConfig": {
							"sortingConfig": {
								"default": [
									{
										"columnName": "Name",
										"direction": "asc"
									}
								]
							}
						}
					},
					"PDS_UsrNumber_7dwyxpu": {
						"modelConfig": {
							"path": "PDS.UsrNumber"
						}
					},
					"PDS_UsrTikcetPrice_34k1zcf": {
						"modelConfig": {
							"path": "PDS.UsrTikcetPrice"
						}
					},
					"PDS_UsrCaptainEmail_o33fr2a": {
						"modelConfig": {
							"path": "PDS.UsrCaptainEmail_o33fr2a"
						}
					},
					"GridDetail_3zvdo2j": {
						"isCollection": true,
						"modelConfig": {
							"path": "GridDetail_3zvdo2jDS",
							"filterAttributes": [
								{
									"name": "GridDetailSearchFilter_bjbz1cg_GridDetail_3zvdo2j",
									"loadOnChange": true
								}
							],
							"sortingConfig": {
								"default": [
									{
										"direction": "asc",
										"columnName": "UsrStartDate"
									}
								]
							}
						},
						"viewModelConfig": {
							"attributes": {
								"GridDetail_3zvdo2jDS_UsrCustomer": {
									"modelConfig": {
										"path": "GridDetail_3zvdo2jDS.UsrCustomer"
									}
								},
								"GridDetail_3zvdo2jDS_UsrStartDate": {
									"modelConfig": {
										"path": "GridDetail_3zvdo2jDS.UsrStartDate"
									}
								},
								"GridDetail_3zvdo2jDS_UsrEndDate": {
									"modelConfig": {
										"path": "GridDetail_3zvdo2jDS.UsrEndDate"
									}
								},
								"GridDetail_3zvdo2jDS_Id": {
									"modelConfig": {
										"path": "GridDetail_3zvdo2jDS.Id"
									}
								}
							}
						}
					},
					"YachtCategories_List_Items_Predefined_Filter": {
						"value": null
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"attributes",
					"Id",
					"modelConfig"
				],
				"values": {
					"path": "PDS.Id"
				}
			}
		]/**SCHEMA_VIEW_MODEL_CONFIG_DIFF*/,
		modelConfigDiff: /**SCHEMA_MODEL_CONFIG_DIFF*/[
			{
				"operation": "merge",
				"path": [],
				"values": {
					"primaryDataSourceName": "PDS",
					"loadingConfig": {},
					"dependencies": {
						"GridDetail_3zvdo2jDS": [
							{
								"attributePath": "UsrParentYacht",
								"relationPath": "PDS.Id"
							}
						]
					}
				}
			},
			{
				"operation": "merge",
				"path": [
					"dataSources"
				],
				"values": {
					"PDS": {
						"type": "crt.EntityDataSource",
						"config": {
							"entitySchemaName": "UsrYacht",
							"attributes": {
								"UsrCaptainEmail_o33fr2a": {
									"path": "UsrCaptain.Email",
									"type": "ForwardReference"
								}
							}
						},
						"scope": "page"
					},
					"GridDetail_3zvdo2jDS": {
						"type": "crt.EntityDataSource",
						"scope": "viewElement",
						"config": {
							"entitySchemaName": "UsrYachtRentals",
							"attributes": {
								"UsrCustomer": {
									"path": "UsrCustomer"
								},
								"UsrStartDate": {
									"path": "UsrStartDate"
								},
								"UsrEndDate": {
									"path": "UsrEndDate"
								}
							}
						}
					}
				}
			}
		]/**SCHEMA_MODEL_CONFIG_DIFF*/,
		handlers: /**SCHEMA_HANDLERS*/[
						{
				request: "usr.PushButtonRequest",
				/* Implementation of the custom query handler. */
				handler: async (request, next) => {
					console.log("Button works...");
					Terrasoft.showInformation("My button was pressed.");
					var price = await request.$context.PDS_UsrPrice_xfvewev;
					console.log("Price = " + price);
					request.$context.PDS_UsrComment_0xo6um3 = "comment from JS code!";
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			{
			request: "crt.HandleViewModelAttributeChangeRequest",
				/* The custom implementation of the system query handler. */
				handler: async (request, next) => {
      				if (request.attributeName === 'PDS_UsrPrice_xfvewev' || 		        // if price changed
					   request.attributeName === '"PDS_UsrPassengersCount_qkxn8zh' ) { 		// or Passenger count changed
					
						let price = await request.$context.PDS_UsrPrice_xfvewev;
						let passengers = await request.$context.PDS_UsrPassengerCount_452hkkl;
						let ticket_price = price / passengers;
						request.$context.PDS_UsrTikcetPrice_34k1zcf = ticket_price;
					}
					/* Call the next handler if it exists and return its result. */
					return next?.handle(request);
				}
			},
			
		]/**SCHEMA_HANDLERS*/,
		converters: /**SCHEMA_CONVERTERS*/{}/**SCHEMA_CONVERTERS*/,
		validators: /**SCHEMA_VALIDATORS*/{
			"usr.DGValidator": {
				validator: function (config) {
					return function (control) {
						let value = control.value;
						let minValue = config.minValue;
						let valueIsCorrect = value >= minValue;
						var result;
						if (valueIsCorrect) {
							result = null;
						} else {
							result = {
								"usr.DGValidator": { 
									message: config.message
								}
							};
						}
						return result;
					};
				},
				params: [
					{
						name: "minValue"
					},
					{
						name: "message"
					}
				],
				async: false
			}
		}/**SCHEMA_VALIDATORS*/
	};
});