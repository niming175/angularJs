//定义模板
var phonecatApp = angular.module('phonecatApp',[]);
//定义 PhoneListController 控制器
phonecatApp.controller('PhoneListController',function PhoneListController($scope){
	$scope.phones = [
		{
			name : 'Nexus S',
			snippet : 'Fast just got faster with Nexus S.'
		},{
			name : 'Motorola XOOM™ with Wi-Fi',
			snippet: 'The Next, Next Generation table.'
		},{
			name: 'MOTOROLA XOOM™',
			snippet: 'The Next, Next Generation table.'
		}
	];
});

phonecatApp.component("greetUser",{
	template: 'Hello {{$ctrl.user}}!',
	controller:function GreetUserController(){
		this.user = 'world';
		
	}
})