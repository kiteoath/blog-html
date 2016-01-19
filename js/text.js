

function A(){
	this.name = "xds";

	this.setname = function(name, age){
		this.name = name;
		this.age = age;
	}
}

var a = new A();
a.name //xds
a.setname("my")  //a.name = "my"










var B = {
	name : "xds",
	setname : function(name){
		this.name = name;
	}
}
B.name //xds
B.setname("my") //B.name = "my"
