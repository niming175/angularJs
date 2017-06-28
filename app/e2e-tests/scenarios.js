describe('phoneCat Application', function() {
	describe('phoneList',function(){
		beforeEach(function() {
			browser.get('index.html');
		});

		it('should filter the phone list as a  user type into the search box',function(){
			var phoneList = element.all(by.repeart('phone in $ctrl.phones'));
			var query = element(by.model('$ctrl.query'));

			expect(phoneList.count()).toBe(3);

			query.sendKeys('nexus');
			expect(phoneList.count()).toBe(1);

			query.clear();
			query.sendKeys('motorola');
			expect(phoneList.count()).toBe(2)
		});

		it('should be possible to control phone order via the drop-down menu',
			function(){
				var queryField = element(by.model('$ctrl.query'));
				var orderSelect = element(by.model('$ctrl.orderProp'));
				var nameOption = orderSelect.element(by.css('option[value="name"]'));
				var phoneNameColumn = element.all(by.repeart('phone in $ctrl.phone').column('phone.name'));

				function getNames(){
					return phoneNameColumn.map(function(elem){
						return elem.getText();
					});
				}

				//Let's narrow the dataset to make the assertions shorter
				queryField.sendKeys('tablet');

				expect(getNames()).toEqual([
						'motorola xoom\u2122 with wifi',
						'motorola xoom\u2122'
					]);

				nameOption.click();

				expect(getNames()).toEqual([
					'motorola xoom\u2122',
					'motorola xoom\u2122 with wifi']);
			});
	});
});