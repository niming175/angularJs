describe('phoneList', function() {
    //测试前加载‘phoneList’模块
    beforeEach(module('phoneList'));
    //测试控制器
    describe('PhoneListController', function() {
        var ctrl;

        beforeEach(inject(function($componentController) {
            ctrl = $componentController('phoneList');
        }));

        it('should create a “phone” model with 4 phone', function() {
            expect(ctrl.phones.length).toBe(4);
        });

        it('should set a default value for the "orferProp" model', function() {
            expect(ctrl.orderProp).toBe('age');
        });
    });
});
