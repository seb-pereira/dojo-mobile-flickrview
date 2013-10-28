var profile = {

	"basePath": "./",
	"action": "release",
	"releaseDir": "../release/js",

	"selectorEngine": "acme",
	"stripConsole": "normal",
	"copyTests": false,
	"cssOptimize": "comments.keepLines",
	"mini": true,
	"optimize": "closure",
	"layerOptimize": "closure",

	"localeList": "en-us",

	layers: {
		"dojo/dojo": {
			customBase: true,
			include: [
				"dojo/_base/declare",
				"dojo/_base/lang",
				"dojo/_base/array",
				"dojo/_base/window",
				"dojo/_base/event",
				"dojo/_base/connect",
				"dojo/_base/html",
				"dojo/io/script",
				"dojo/Deferred",
				"dojo/DeferredList",
				"dojo/i18n",
				"dojo/date",
				"dijit/_WidgetBase",
				"dijit/_base/manager",
				"dojox/mobile",
				"dojox/mobile/parser",
				"dojox/mobile/deviceTheme",
				"dojox/mobile/ScrollableView",
				"dojox/mobile/TabBar",
				"dojox/mobile/TabBarButton",
				"dojox/mobile/ToolBarButton",
				"dojox/mobile/ListItem",
				"dojox/mobile/FormLayout",
				"dojox/mobile/TextBox",
				"dojox/mobile/RadioButton",
				"dojox/mobile/Heading",
				"dojox/mobile/EdgeToEdgeList",
				"dojox/mobile/RoundRect",
				"dojox/mobile/Switch",
				"dojo/cldr/nls/de/gregorian",
				"dojo/cldr/nls/fr/gregorian",
				"dojo/cldr/nls/it/gregorian",
				"dojo/cldr/nls/ko/gregorian",
				"dojo/cldr/nls/pt/gregorian",
				"dojo/cldr/nls/es/gregorian",
				"dojo/cldr/nls/zh/gregorian",
				"dojo/cldr/nls/zh-hk/gregorian"
			]
		},
		"flickrview/flickrview-app": {
			includeLocales: ["en-us"],
			include: [
				"flickrview/FeedView",
				"flickrview/SettingsView"
			]
		}
	},

	staticHasFeatures: {
		"dom-addeventlistener": true,
		"dom-qsa": true,
		"json-stringify": true,
		"json-parse": true,
		"bug-for-in-skips-shadowed": false,
		"dom-matches-selector": true,
		"native-xhr": true,
		"array-extensible": true,
		"ie": undefined,
		"quirks": false,
		"dojo-sync-loader": false,
		"ie-event-behavior": 0
	},

	packages: [
		{ name: "dojo", location: "dojo" },
		{ name: "dijit", location: "dijit" },
		{ name: "dojox", location: "dojox" },
		{ name: "flickrview", location: "flickrview" }
	]
};