describe('phoneList',function(){
	beforeEach(module('phonecatApp'));
	//test the controller
	describe('phoneListController',function(){
		it("phone模型中，应该有三个电话",inject(function($componentController){
			var ctrl = $componentController('phoneList');
			expect(ctrl.phones.length).toBe(3); 
		}));
	});
})