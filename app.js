var toolbar = {
	css:"draft", template:"<span class='title'>Toolbar</span>", height: 40
};
var subbar = {
	css:"draft", template:"<span class='title'>Subbar</span>", height: 40
};
var boards = {
	css:"draft", template:"<span class='title'>Boards</span>"
};

var menu = {
	css:"draft", template:"<span class='title'>Menu</span>", width: 340
};

webix.ready(function(){
	webix.ui({
		rows:[
		  toolbar,
		  { cols:[
			  { rows:[ subbar, boards]},
			  menu
		  ]}
		]
	});
});