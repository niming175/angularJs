function PhoneListCtrl($scope){
	$scope.phones=[
	{
		"name":"test1",
		"snippet":: "test word1"
	},{
		"name":"test2",
		"snippet":: "test word2"
	},{
		"name":"test1",
		"snippet":: "test word1"
	}];
}

describe('PhoneListController', function() {

  beforeEach(module('phonecatApp'));

  it('should create a `phones` model with 3 phones', inject(function($controller) {
    var scope = {};
    var ctrl = $controller('PhoneListController', {$scope: scope});

    expect(scope.phones.length).toBe(3);
  }));

});