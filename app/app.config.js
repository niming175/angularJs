/*
* 配置$route服务（使用他的提供者）
*/

angular.
	module('phonecatApp').
	config(['$locationProvider', '$routeProvider', 
		function config($locationProvider, $routeProvider) {
			$locationProvider.hashPrefix("!");

			//配置$route服务
			/*
			* when('/phones'):当url以/phones结尾时，显示手机列表。
			* 为了构造这个视图，Angular会创建一个phoneList组件的实例
			* 来管理视图。
			* 注意，我们在index.html中也使用了相同的标记（/phones）。
        	* when('/phones/:phoneId'): 当url以/phones/:phoneId结尾时，
        	* 显示手机详情。:phoneId是一个URL变量片段。
        	* 该视图由phoneDetail组件管理。
			* otherwise('/phones'): 当前url没有找到匹配的路由时，重定向
			* 到/phones页面。
			*/
			$routeProvider.
				when('/phones', {
					template: '<phone-list></phone-list>'
				}).
				when('/phones/:phoneId', {
					template: '<phone-detail></phone-detail>'
				}).
				otherwise('/phones');
		}]);