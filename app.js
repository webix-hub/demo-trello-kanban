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
	css:"subbar", padding:1, view:"toolbar", height:40, cols:[
	  { view:"label", label:"<h3>App Roadmap</h3>", width: 150 },
	  { view:"button", type:"icon", icon:"far fa-star", width: 28 },
	  { view:"button", type:"icon", icon:"fas fa-briefcase", label:" Private", width:72 },
	  {},
	  { view:"button", type:"icon", icon:"fas fa-ellipsis-h", label:" Show menu", width:100 }
	]
};

function getList(id, header){
	return {
		borderless:true, headerHeight:30, header:header,
		body:{
			view:"kanbanlist", width:300, status:id
		}
	};
}

var boards = {
	view:"scrollview", scroll:"x", body:{
		view:"kanban", css:"kanbanarea", type:"space", cols:[
			getList("new", "Backlog"),
			getList("work", "In Progress"),
			getList("test", "Testing"),
			getList("done", "Done")
		], url:"data.json"
	}
};

var menu = {
	width: 340, css:"menuarea", id:"sidemenu", hidden:true, type:"head", rows:[
		{ cols:[
			{ label:"Menu", view:"label" },
			{ view:"button", type:"icon", icon:"close", width: 30, click:function(){
				$$("sidemenu").hide();
				$$("show-btn").show();
			}}
		]},
		{ css:"draft", template:"<span class='title'>Menu Content</span>" }	
	]
};

webix.ready(function(){
	webix.CustomScroll.init();
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