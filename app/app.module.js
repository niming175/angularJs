/*
* 模板的.config()方法可以获取配置所需的提供者
* 为了获取ngRoute 中的提供者、服务和指令，我们需要为phonecatApp增加ngRoute模块
*/

angular.module('phonecatApp',[
	'ngRoute', //增加ngRoute模块
	'phoneList',
	'phoneDetail',
	'core',//step 10 加入core模块
	'ngAnimate'//#14 加入动画模块
	]);
/*
* phoneDetail 模块依赖与ngRouter模块：ngRoute提供$routeParams对象，并将$routeParams
* 对象注入到phoneDetail组件的控制器。由于ngRoute也是phonecatApp主要模块的依赖，所以服务
* 指令在程序中随处可用（包括phoneDetail组件）。
* 这意味着，即使我们没有将ngRoute放入phoneDetail组件的依赖列表中，我们的程序仍然可以正常
* 运行。
*/