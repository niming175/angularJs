angular.
module('core.phone').
factory('Phone', ['$resource',
    function($resource) {
        return $resource('phones/:phoneId.json', {}, {
            query: {
                method: 'GET',
                params: { phoneId: 'phones' },
                isArray: true
            }
        });
    }
]);

/*
* 我们使用模块API的factory()函数注册了一个自定义服务。
* 并使用'Phone'来代表这个服务，调用factory()函数。
* factory()函数类似于一个控制器的构造函数,
* 通过函数参数可以声明依赖注入。
* Phone服务声明了对$resource服务功能的依赖。
*/