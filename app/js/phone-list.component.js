angular.module('phonecatApp').
	component('phoneList',{
		template:
		'<ul>'+
		'<li ng-repeat="phone in $ctrl.phones">' +
		'<span>{{phone.name}}</span>'+
		'<p>{{phone.snippet}}</p>'+
		'</li>' +
		'</ul>',
		controller: function PhoneListController() {
			this.phones = [
			{
				name: 'iphone 3GS',
				snippet: '爱疯就是垃圾'
			}, {
				name: '小米',
				snippet: '雷军ARE YOU ok?'
			}]
		}

	})