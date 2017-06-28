describe('phoneList',function(){
	//Load the module that contains the 'phoneList' compinent before each test
	beforeEach(module('phoneList'));
	//test the controller
	describe('phoneListController',function(){
		var ctrl;

		beforeEach(inject(function($componentController){
			ctrl=$componentController('phoneList');
		}));

		it('should create a “phone” model with 3 phone', function(){
			expect(ctrl.phones.length).toBe(3);
		});

		it('should set a default value for the "orferProp" model', function(){
			expect(ctrl.orderProp).toBe('age');
		});
	});
})