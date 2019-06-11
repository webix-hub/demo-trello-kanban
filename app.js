var toolbar = {
	css:"topbar", padding:1, view:"toolbar", height:40, cols:[
		{ view:"button", type:"icon", icon:"fas fa-arrow-left", width: 40 },
		{ view:"button", type:"icon", icon:"fas fa-tachometer-alt", label:"Boards", width:100 },
		{ view:"search", width:300 },
		{ view:"label", label:"<a href='https://webix.com/kanban/'>Webix Boards</a>"},
		{ view:"button", type:"icon", icon:"fas fa-plus", width: 40 },
		{ view:"button", type:"icon", icon:"fas fa-question-circle", width: 40 },
		{ view:"button", type:"icon", icon:"fas fa-bell", width: 40 }
	]
};
var subbar = {
	css:"draft", template:"<span class='title'>Subbar</span>", height: 40
};
var boards = {
	css:"draft", template:"<span class='title'>Boards</span>"
};

var menu = {
	css:"draft menuarea", template:"<span class='title'>Menu</span>", width: 340
};

webix.ready(function(){
	webix.ui({
		type:"clean", rows:[
			toolbar,
			{ type:"clean", cols:[
				{ type:"clean", rows:[ subbar, boards]},
				menu
			]}
		]
	});
});